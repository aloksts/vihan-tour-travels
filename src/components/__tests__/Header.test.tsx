import React from 'react';
import { render, screen } from '@testing-library/react';
import Header from '../Header';
import { ThemeProvider as NextThemesProvider } from 'next-themes';

const renderWithTheme = (ui: React.ReactElement) => {
  return render(
    <NextThemesProvider attribute="class" defaultTheme="light">
      {ui}
    </NextThemesProvider>
  );
};

describe('Header Component', () => {
  it('renders the logo text correctly', () => {
    renderWithTheme(<Header />);
    expect(screen.getByText(/Vihan/i)).toBeInTheDocument();
    expect(screen.getByText(/tours & travels/i)).toBeInTheDocument();
  });

  it('renders all 4 navigation links', () => {
    renderWithTheme(<Header />);
    const expectedLinks = ['Home', 'Fleet', 'About Goa', 'Contact'];
    expectedLinks.forEach((linkText) => {
      const linkElement = screen.getByRole('link', { name: linkText });
      expect(linkElement).toBeInTheDocument();
    });
  });

  it('renders the Call to Action button pointing to WhatsApp', () => {
    renderWithTheme(<Header />);
    const bookNowButton = screen.getByRole('link', { name: /book now/i });
    expect(bookNowButton).toBeInTheDocument();
    expect(bookNowButton).toHaveAttribute('href', expect.stringContaining('https://wa.me/919765460182'));
  });
});
