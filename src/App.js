import React from 'react';
import AuthContextProvider from './contexts/auth/AuthContext';
import { Router } from './components/Router';

function App() {
  return (
    <AuthContextProvider>
      <Router />
    </AuthContextProvider>
  );
}

export default App;
