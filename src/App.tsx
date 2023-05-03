import React from 'react';
import Router from './routes/router';
import { AuthContextProvider } from './contexts/Auth';
import { ThemeContextProvider } from './theme/Theme';

export default function App() {
  return (
    <ThemeContextProvider>
      <AuthContextProvider>
        <Router/>
      </AuthContextProvider>
    </ThemeContextProvider>
  );
}
