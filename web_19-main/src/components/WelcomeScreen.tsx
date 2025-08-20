import React from 'react';

interface WelcomeScreenProps {
  onCreateAccount: () => void;
  onLogin: () => void;
}

export default function WelcomeScreen({ onCreateAccount, onLogin }: WelcomeScreenProps) {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-4">
      <div className="w-full max-w-md mx-auto">
        {/* Main Content Container */}
        <div className="text-center space-y-8">
          {/* Welcome Section */}
          <div className="space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              Welcome to PopX
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed max-w-sm mx-auto">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            </p>
          </div>

          {/* Action Buttons */}
          <div className="space-y-4 pt-8">
            {/* Create Account Button */}
            <button 
              onClick={onCreateAccount}
              className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-4 px-6 rounded-2xl transition-all duration-200 transform hover:scale-[1.02] hover:shadow-lg active:scale-[0.98] text-lg"
            >
              Create Account
            </button>

            {/* Login Button */}
            <button 
              onClick={onLogin}
              className="w-full bg-purple-200 hover:bg-purple-300 text-purple-800 font-semibold py-4 px-6 rounded-2xl transition-all duration-200 transform hover:scale-[1.02] hover:shadow-md active:scale-[0.98] text-lg"
            >
              Already Registered? Login
            </button>
          </div>
        </div>

        {/* Bottom Navigation Indicator (Mobile Style) */}
        <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 md:hidden">
          <div className="flex items-center space-x-2">
            <div className="w-1 h-6 bg-gray-300 rounded-full"></div>
            <div className="w-8 h-8 bg-gray-300 rounded-lg"></div>
            <div className="w-6 h-6 bg-gray-300 rounded-sm transform rotate-45"></div>
          </div>
        </div>
      </div>
    </div>
  );
}