import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import BookingForm from '../BookingForm';
import { ThemeProvider as NextThemesProvider } from 'next-themes';
import { ThemeProvider as MuiThemeProvider, createTheme } from '@mui/material';

// We mock window.open to prevent actual opening of whatsapp link
const mockWindowOpen = jest.fn();
Object.defineProperty(window, 'open', { value: mockWindowOpen });

const renderWithProviders = (ui: React.ReactElement) => {
  const muiTheme = createTheme();
  return render(
    <NextThemesProvider attribute="class" defaultTheme="light">
      <MuiThemeProvider theme={muiTheme}>
        {ui}
      </MuiThemeProvider>
    </NextThemesProvider>
  );
};

describe('BookingForm Component', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('renders correctly with default car type', () => {
    renderWithProviders(<BookingForm />);
    expect(screen.getByText('Book Your Ride')).toBeInTheDocument();
    
    // MUI Autocomplete/Select values are sometimes tricky, but we can check the input value
    expect(screen.getByDisplayValue('Baleno MT')).toBeInTheDocument();
  });

  it('renders correctly with passed initialCarType', () => {
    renderWithProviders(<BookingForm initialCarType="Thar MT / AT" />);
    expect(screen.getByDisplayValue('Thar MT / AT')).toBeInTheDocument();
  });

  it('calls window.open with correctly formatted WhatsApp URL on submit', () => {
    renderWithProviders(<BookingForm initialCarType="Swift MT / AT" />);
    
    // Fill out the date
    const dateInput = screen.getByLabelText(/Pickup Date/i);
    fireEvent.change(dateInput, { target: { value: '2026-03-25' } });

    // Click submit
    const submitButton = screen.getByRole('button', { name: /Book via WhatsApp/i });
    fireEvent.click(submitButton);

    expect(mockWindowOpen).toHaveBeenCalledTimes(1);
    
    // Check if URL starts with wa.me and contains our fields
    const urlCalled = mockWindowOpen.mock.calls[0][0];
    expect(urlCalled).toContain('https://wa.me/919765460182');
    expect(urlCalled).toContain('Goa Dabolim Airport');
    expect(urlCalled).toContain('Swift MT / AT');
    expect(urlCalled).toContain('2026-03-25');
  });
});
