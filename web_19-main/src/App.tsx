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
    return (
      <div className="flex items-center justify-center h-screen bg-gray-900 text-white text-3xl">
        🚀 Tailwind is working!
      </div>
    );
  }

return renderScreen();
}

export default App;



