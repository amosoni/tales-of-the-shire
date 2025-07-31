'use client';
import { useState } from 'react';
import { Mail, Lock, Eye, EyeOff, X, User } from 'lucide-react';

interface RegisterModalProps {
  isOpen: boolean;
  onClose: () => void;
  onRegisterSuccess?: (userData: { username: string; email: string }) => void;
}

export default function RegisterModal({ isOpen, onClose, onRegisterSuccess }: RegisterModalProps) {
  const [formData, setFormData] = useState({ username: '', email: '', password: '', confirmPassword: '' });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      
      // Mock successful registration
      const userData = {
        username: formData.username,
        email: formData.email
      };
      
      // Call the success callback if provided
      if (onRegisterSuccess) {
        onRegisterSuccess(userData);
      } else {
        onClose(); // Fallback to just closing
      }
    }, 1000);
  };

  const handleClose = () => {
    setFormData({ username: '', email: '', password: '', confirmPassword: '' });
    setShowPassword(false);
    setShowConfirmPassword(false);
    setIsLoading(false);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div 
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 9999,
        padding: '1rem'
      }}
      onClick={handleClose}
    >
      <div 
        style={{
          width: '100%',
          maxWidth: '28rem',
          backgroundColor: 'white',
          borderRadius: '1.5rem',
          boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
          overflow: 'hidden',
          position: 'relative'
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={handleClose}
          style={{
            position: 'absolute',
            top: '1rem',
            right: '1rem',
            zIndex: 10,
            borderRadius: '50%',
            padding: '0.5rem',
            color: '#9CA3AF',
            border: 'none',
            background: 'transparent',
            cursor: 'pointer'
          }}
        >
          <X className="h-5 w-5" />
        </button>

        {/* Header */}
        <div style={{
          background: 'linear-gradient(to right, #10B981, #059669)',
          padding: '2rem',
          textAlign: 'center'
        }}>
          <h2 style={{
            fontSize: '1.875rem',
            fontWeight: 'bold',
            color: 'white',
            margin: 0
          }}>Join the Shire!</h2>
          <p style={{
            color: '#D1FAE5',
            fontSize: '1.125rem',
            margin: '0.5rem 0 0 0'
          }}>Create your Tales of the Shire account</p>
        </div>

        {/* Register Form */}
        <div style={{ padding: '2rem' }}>
          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            {/* Username Field */}
            <div>
              <label htmlFor="username" style={{
                display: 'block',
                fontSize: '0.875rem',
                fontWeight: '600',
                color: '#374151',
                marginBottom: '0.75rem'
              }}>
                Username
              </label>
              <input
                id="username"
                name="username"
                type="text"
                required
                value={formData.username}
                onChange={handleChange}
                style={{
                  display: 'block',
                  width: '100%',
                  padding: '1rem',
                  border: '2px solid #E5E7EB',
                  borderRadius: '0.75rem',
                  fontSize: '1rem',
                  backgroundColor: '#F9FAFB',
                  outline: 'none'
                }}
                placeholder="Enter your username"
              />
            </div>

            {/* Email Field */}
            <div>
              <label htmlFor="email" style={{
                display: 'block',
                fontSize: '0.875rem',
                fontWeight: '600',
                color: '#374151',
                marginBottom: '0.75rem'
              }}>
                Email Address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                value={formData.email}
                onChange={handleChange}
                style={{
                  display: 'block',
                  width: '100%',
                  padding: '1rem',
                  border: '2px solid #E5E7EB',
                  borderRadius: '0.75rem',
                  fontSize: '1rem',
                  backgroundColor: '#F9FAFB',
                  outline: 'none'
                }}
                placeholder="Enter your email"
              />
            </div>

            {/* Password Field */}
            <div>
              <label htmlFor="password" style={{
                display: 'block',
                fontSize: '0.875rem',
                fontWeight: '600',
                color: '#374151',
                marginBottom: '0.75rem'
              }}>
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                required
                value={formData.password}
                onChange={handleChange}
                style={{
                  display: 'block',
                  width: '100%',
                  padding: '1rem',
                  border: '2px solid #E5E7EB',
                  borderRadius: '0.75rem',
                  fontSize: '1rem',
                  backgroundColor: '#F9FAFB',
                  outline: 'none'
                }}
                placeholder="Enter your password"
              />
            </div>

            {/* Confirm Password Field */}
            <div>
              <label htmlFor="confirmPassword" style={{
                display: 'block',
                fontSize: '0.875rem',
                fontWeight: '600',
                color: '#374151',
                marginBottom: '0.75rem'
              }}>
                Confirm Password
              </label>
              <input
                id="confirmPassword"
                name="confirmPassword"
                type="password"
                required
                value={formData.confirmPassword}
                onChange={handleChange}
                style={{
                  display: 'block',
                  width: '100%',
                  padding: '1rem',
                  border: '2px solid #E5E7EB',
                  borderRadius: '0.75rem',
                  fontSize: '1rem',
                  backgroundColor: '#F9FAFB',
                  outline: 'none'
                }}
                placeholder="Confirm your password"
              />
            </div>

            {/* Create Account Button */}
            <button
              type="submit"
              disabled={isLoading}
              style={{
                width: '100%',
                padding: '1rem 1.5rem',
                border: 'none',
                borderRadius: '0.75rem',
                fontSize: '1.125rem',
                fontWeight: '600',
                color: 'white',
                background: 'linear-gradient(to right, #10B981, #059669)',
                cursor: 'pointer',
                outline: 'none',
                opacity: isLoading ? 0.5 : 1
              }}
            >
              {isLoading ? 'Creating account...' : 'Create account'}
            </button>
          </form>

          {/* Sign In Link */}
          <div style={{ marginTop: '2rem', textAlign: 'center' }}>
            <p style={{ color: '#6B7280', fontSize: '1rem', margin: 0 }}>
              Already have an account?{' '}
              <button 
                type="button"
                style={{
                  fontWeight: '600',
                  color: '#10B981',
                  background: 'transparent',
                  border: 'none',
                  cursor: 'pointer',
                  textDecoration: 'underline'
                }}
                onClick={() => {
                  console.log('Switch to sign in modal');
                  onClose();
                }}
              >
                Sign in
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
} 