'use client';
import { useState } from 'react';
import { Mail, Lock, Eye, EyeOff, X } from 'lucide-react';
import RegisterModal from './register-modal';

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
  onLoginSuccess?: (userData: { username: string; email: string }) => void;
}

export default function LoginModal({ isOpen, onClose, onLoginSuccess }: LoginModalProps) {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isRegisterModalOpen, setIsRegisterModalOpen] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      
      // Mock successful login
      const userData = {
        username: formData.email.split('@')[0], // Use email prefix as username
        email: formData.email
      };
      
      // Call the success callback if provided
      if (onLoginSuccess) {
        onLoginSuccess(userData);
      } else {
        onClose(); // Fallback to just closing
      }
    }, 1000);
  };

  const handleClose = () => {
    setFormData({ email: '', password: '' });
    setShowPassword(false);
    setIsLoading(false);
    onClose();
  };

  const handleOpenRegister = () => {
    setIsRegisterModalOpen(true);
  };

  const handleCloseRegister = () => {
    setIsRegisterModalOpen(false);
  };

  const handleRegisterSuccess = (userData: { username: string; email: string }) => {
    // Auto-login after successful registration
    if (onLoginSuccess) {
      onLoginSuccess(userData);
    }
    setIsRegisterModalOpen(false);
  };

  if (!isOpen) return null;

  console.log('LoginModal rendering, isOpen:', isOpen);

  return (
    <>
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
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#F3F4F6';
              e.currentTarget.style.color = '#4B5563';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'transparent';
              e.currentTarget.style.color = '#9CA3AF';
            }}
          >
            <X className="h-5 w-5" />
          </button>

          {/* Header with Gradient */}
          <div style={{
            background: 'linear-gradient(to right, #10B981, #059669)',
            padding: '2rem',
            textAlign: 'center',
            position: 'relative',
            overflow: 'hidden'
          }}>
            {/* Background Pattern */}
            <div style={{
              position: 'absolute',
              inset: 0,
              opacity: 0.1
            }}>
              <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '5rem',
                height: '5rem',
                backgroundColor: 'white',
                borderRadius: '50%',
                transform: 'translate(-2.5rem, -2.5rem)'
              }}></div>
              <div style={{
                position: 'absolute',
                bottom: 0,
                right: 0,
                width: '4rem',
                height: '4rem',
                backgroundColor: 'white',
                borderRadius: '50%',
                transform: 'translate(2rem, 2rem)'
              }}></div>
            </div>
            
            <div style={{ position: 'relative', zIndex: 10 }}>
              <div style={{
                margin: '0 auto',
                width: '4rem',
                height: '4rem',
                backgroundColor: 'rgba(255, 255, 255, 0.2)',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '1rem',
                backdropFilter: 'blur(4px)'
              }}>
                <span style={{ color: 'white', fontSize: '1.5rem' }}>🍃</span>
              </div>
              <h2 style={{
                fontSize: '1.875rem',
                fontWeight: 'bold',
                color: 'white',
                marginBottom: '0.5rem',
                margin: 0
              }}>Welcome Back, Hobbit!</h2>
              <p style={{
                color: '#D1FAE5',
                fontSize: '1.125rem',
                margin: 0
              }}>Sign in to your Tales of the Shire account</p>
            </div>
          </div>

          {/* Login Form */}
          <div style={{ padding: '2rem' }}>
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
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
                <div style={{ position: 'relative' }}>
                  <div style={{
                    position: 'absolute',
                    top: 0,
                    left: '1rem',
                    bottom: 0,
                    display: 'flex',
                    alignItems: 'center',
                    pointerEvents: 'none'
                  }}>
                    <Mail className="h-5 w-5" style={{ color: '#9CA3AF' }} />
                  </div>
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
                      paddingLeft: '3rem',
                      paddingRight: '1rem',
                      paddingTop: '1rem',
                      paddingBottom: '1rem',
                      border: '2px solid #E5E7EB',
                      borderRadius: '0.75rem',
                      fontSize: '1rem',
                      backgroundColor: '#F9FAFB',
                      outline: 'none'
                    }}
                    placeholder="Enter your email"
                    onFocus={(e) => {
                      e.target.style.borderColor = '#10B981';
                      e.target.style.backgroundColor = 'white';
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = '#E5E7EB';
                      e.target.style.backgroundColor = '#F9FAFB';
                    }}
                  />
                </div>
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
                <div style={{ position: 'relative' }}>
                  <div style={{
                    position: 'absolute',
                    top: 0,
                    left: '1rem',
                    bottom: 0,
                    display: 'flex',
                    alignItems: 'center',
                    pointerEvents: 'none'
                  }}>
                    <Lock className="h-5 w-5" style={{ color: '#9CA3AF' }} />
                  </div>
                  <input
                    id="password"
                    name="password"
                    type={showPassword ? 'text' : 'password'}
                    required
                    value={formData.password}
                    onChange={handleChange}
                    style={{
                      display: 'block',
                      width: '100%',
                      paddingLeft: '3rem',
                      paddingRight: '3rem',
                      paddingTop: '1rem',
                      paddingBottom: '1rem',
                      border: '2px solid #E5E7EB',
                      borderRadius: '0.75rem',
                      fontSize: '1rem',
                      backgroundColor: '#F9FAFB',
                      outline: 'none'
                    }}
                    placeholder="Enter your password"
                    onFocus={(e) => {
                      e.target.style.borderColor = '#10B981';
                      e.target.style.backgroundColor = 'white';
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = '#E5E7EB';
                      e.target.style.backgroundColor = '#F9FAFB';
                    }}
                  />
                  <button
                    type="button"
                    style={{
                      position: 'absolute',
                      top: 0,
                      right: 0,
                      bottom: 0,
                      paddingRight: '1rem',
                      display: 'flex',
                      alignItems: 'center',
                      background: 'transparent',
                      border: 'none',
                      cursor: 'pointer'
                    }}
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? (
                      <EyeOff className="h-5 w-5" style={{ color: '#9CA3AF' }} />
                    ) : (
                      <Eye className="h-5 w-5" style={{ color: '#9CA3AF' }} />
                    )}
                  </button>
                </div>
              </div>

              {/* Remember Me & Forgot Password */}
              <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between'
              }}>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <input
                    id="remember-me"
                    name="remember-me"
                    type="checkbox"
                    style={{
                      height: '1rem',
                      width: '1rem',
                      color: '#10B981',
                      borderColor: '#D1D5DB',
                      borderRadius: '0.25rem'
                    }}
                  />
                  <label htmlFor="remember-me" style={{
                    marginLeft: '0.75rem',
                    display: 'block',
                    fontSize: '0.875rem',
                    color: '#374151'
                  }}>
                    Remember me
                  </label>
                </div>
                <div style={{ fontSize: '0.875rem' }}>
                  <button 
                    type="button" 
                    style={{
                      fontWeight: '500',
                      color: '#10B981',
                      background: 'transparent',
                      border: 'none',
                      cursor: 'pointer'
                    }}
                  >
                    Forgot password?
                  </button>
                </div>
              </div>

              {/* Sign In Button */}
              <button
                type="submit"
                disabled={isLoading}
                style={{
                  width: '100%',
                  display: 'flex',
                  justifyContent: 'center',
                  paddingTop: '1rem',
                  paddingBottom: '1rem',
                  paddingLeft: '1.5rem',
                  paddingRight: '1.5rem',
                  border: 'none',
                  borderRadius: '0.75rem',
                  boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
                  fontSize: '1.125rem',
                  fontWeight: '600',
                  color: 'white',
                  background: 'linear-gradient(to right, #10B981, #059669)',
                  cursor: 'pointer',
                  outline: 'none',
                  opacity: isLoading ? 0.5 : 1,
                  pointerEvents: isLoading ? 'none' : 'auto'
                }}
                onMouseEnter={(e) => {
                  if (!isLoading) {
                    e.currentTarget.style.background = 'linear-gradient(to right, #059669, #047857)';
                  }
                }}
                onMouseLeave={(e) => {
                  if (!isLoading) {
                    e.currentTarget.style.background = 'linear-gradient(to right, #10B981, #059669)';
                  }
                }}
              >
                {isLoading ? (
                  <div style={{ display: 'flex', alignItems: 'center' }}>
                    <div style={{
                      animation: 'spin 1s linear infinite',
                      borderRadius: '50%',
                      height: '1.25rem',
                      width: '1.25rem',
                      border: '2px solid transparent',
                      borderBottomColor: 'white',
                      marginRight: '0.75rem'
                    }}></div>
                    Signing in...
                  </div>
                ) : (
                  'Sign in'
                )}
              </button>
            </form>

            {/* Sign Up Link */}
            <div style={{ marginTop: '2rem', textAlign: 'center' }}>
              <p style={{ color: '#6B7280', fontSize: '1rem', margin: 0 }}>
                Don&apos;t have an account?{' '}
                <button 
                  type="button"
                  style={{
                    fontWeight: '600',
                    color: '#10B981',
                    background: 'transparent',
                    border: 'none',
                    cursor: 'pointer',
                    textDecoration: 'underline',
                    textDecorationThickness: '2px',
                    textUnderlineOffset: '2px'
                  }}
                  onClick={handleOpenRegister}
                >
                  Sign up
                </button>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Register Modal */}
      <RegisterModal 
        isOpen={isRegisterModalOpen} 
        onClose={handleCloseRegister}
        onRegisterSuccess={handleRegisterSuccess}
      />
    </>
  );
} 