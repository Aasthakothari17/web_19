import React, { useState } from 'react';
import { ArrowLeft } from 'lucide-react';

interface LoginFormProps {
  onBack: () => void;
}

export default function LoginForm({ onBack }: LoginFormProps) {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Login form submitted:', formData);
    // Handle login submission here
  };

  return (
    <div className="min-h-screen bg-white flex flex-col px-4 py-6">
      {/* Header with back button */}
      <div className="flex items-center mb-8">
        <button 
          onClick={onBack}
          className="p-2 hover:bg-gray-100 rounded-full transition-colors duration-200"
        >
          <ArrowLeft className="w-6 h-6 text-gray-600" />
        </button>
      </div>

      {/* Main Content */}
      <div className="flex-1 max-w-md mx-auto w-full">
        {/* Title and Description */}
        <div className="mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight mb-4">
            Signin to your<br />PopX account
          </h1>
          <p className="text-lg text-gray-500 leading-relaxed">
            Lorem ipsum dolor sit amet,<br />consectetur adipiscing elit,
          </p>
        </div>

        {/* Login Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Email Address */}
          <div className="space-y-2">
            <label className="text-purple-600 font-medium text-sm">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Enter email address"
              className="w-full px-4 py-4 border border-gray-200 rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200"
              required
            />
          </div>

          {/* Password */}
          <div className="space-y-2">
            <label className="text-purple-600 font-medium text-sm">
              Password
            </label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              placeholder="Enter password"
              className="w-full px-4 py-4 border border-gray-200 rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200"
              required
            />
          </div>

          {/* Submit Button */}
          <div className="pt-8">
            <button
              type="submit"
              className="w-full bg-gray-400 hover:bg-gray-500 text-white font-semibold py-4 px-6 rounded-2xl transition-all duration-200 transform hover:scale-[1.02] hover:shadow-lg active:scale-[0.98] text-lg"
            >
              Login
            </button>
          </div>
        </form>
      </div>

      {/* Bottom Navigation Indicator */}
      <div className="flex justify-center mt-8 md:hidden">
        <div className="flex items-center space-x-2">
          <div className="w-1 h-6 bg-gray-300 rounded-full"></div>
          <div className="w-8 h-8 bg-gray-300 rounded-lg"></div>
          <div className="w-6 h-6 bg-gray-300 rounded-sm transform rotate-45"></div>
        </div>
      </div>
    </div>
  );
}