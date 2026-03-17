'use client';

import * as React from 'react';
import { ThemeProvider as NextThemesProvider, useTheme } from 'next-themes';
import { ThemeProvider as MuiThemeProvider, createTheme, CssBaseline } from '@mui/material';

function MUIWrapper({ children }: { children: React.ReactNode }) {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  const muiTheme = React.useMemo(() => createTheme({
    palette: {
      mode: (mounted && resolvedTheme === 'dark') ? 'dark' : 'light',
      primary: {
        main: '#d4af37', // Metallic Gold for Luxury Premium look
      },
      secondary: {
        main: '#10b981', // Emerald 500
      },
      background: {
        default: (mounted && resolvedTheme === 'dark') ? '#020617' : '#f8fafc', // Slate 950 / Slate 50
        paper: (mounted && resolvedTheme === 'dark') ? '#0f172a' : '#ffffff', // Slate 900 / White
      },
      text: {
        primary: (mounted && resolvedTheme === 'dark') ? '#f8fafc' : '#0f172a',
        secondary: (mounted && resolvedTheme === 'dark') ? '#94a3b8' : '#475569',
      }
    },
    typography: {
      fontFamily: 'var(--font-inter), Arial, sans-serif',
      h1: { fontWeight: 800 },
      h2: { fontWeight: 800 },
      h3: { fontWeight: 700 },
      h4: { fontWeight: 700 },
      h5: { fontWeight: 700 },
      h6: { fontWeight: 600 },
      button: { textTransform: 'none', fontWeight: 600 },
    },
    shape: {
      borderRadius: 12,
    },
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            textTransform: 'none',
            borderRadius: '12px',
            padding: '10px 24px',
            boxShadow: 'none',
            '&:hover': {
              boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
            },
          },
        },
      },
      MuiPaper: {
        styleOverrides: {
          root: {
            backgroundImage: 'none',
            borderRadius: '16px',
          },
        },
      },
    },
  }), [mounted, resolvedTheme]);

  // To avoid hydration mismatch, optionally avoid rendering UI until mounted
  // But returning children directly lets HTML render correctly formatted with Tailwind
  return (
    <MuiThemeProvider theme={muiTheme}>
      <CssBaseline />
      {children}
    </MuiThemeProvider>
  );
}

export default function ThemeRegistry({ children }: { children: React.ReactNode }) {
  return (
    <NextThemesProvider attribute="class" defaultTheme="system" enableSystem>
      <MUIWrapper>{children}</MUIWrapper>
    </NextThemesProvider>
  );
}
