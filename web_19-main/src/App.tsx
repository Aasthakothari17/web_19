import React, { useState } from 'react';
import WelcomeScreen from './components/WelcomeScreen';
import RegistrationForm from './components/RegistrationForm';
import LoginForm from './components/LoginForm';

type Screen = 'welcome' | 'register' | 'login';

function App() {
  const [currentScreen, setCurrentScreen] = useState<Screen>('welcome');

  const handleCreateAccount = () => {
    setCurrentScreen('register');
  };

  const handleLogin = () => {
    setCurrentScreen('login');
  };

  const handleBack = () => {
    setCurrentScreen('welcome');
  };

  const renderScreen = () => {
    switch (currentScreen) {
      case 'welcome':
        return (
          <WelcomeScreen 
            onCreateAccount={handleCreateAccount}
            onLogin={handleLogin}
          />
        );
      case 'register':
        return <RegistrationForm onBack={handleBack} />;
      case 'login':
        return <LoginForm onBack={handleBack} />;
      default:
        return null;
    }
  };
  export default function App() {
  return <h1>Hello Render!</h1>;
}


  return renderScreen();
}

export default App;
