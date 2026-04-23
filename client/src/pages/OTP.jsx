import React, { useState, useRef, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Smartphone, ArrowRight, AlertCircle, Loader2, RefreshCw } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

const OTP = () => {
  const [otp, setOtp] = useState(['', '', '', '']);
  const [error, setError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const inputs = useRef([]);
  
  const { login } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const email = location.state?.email || "your email";

  const handleChange = (element, index) => {
    if (isNaN(element.value)) return false;

    setOtp([...otp.map((d, idx) => (idx === index ? element.value : d))]);

    // Focus next input
    if (element.value !== '' && index < 3) {
      inputs.current[index + 1].focus();
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === 'Backspace' && !otp[index] && index > 0) {
      inputs.current[index - 1].focus();
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const code = otp.join('');
    
    if (code.length < 4) {
      setError('Please enter the full code');
      return;
    }

    setIsSubmitting(true);
    try {
      // For demo, any code works
      await login(email, 'dummy_password'); 
      navigate('/dashboard');
    } catch (err) {
      setError('Invalid code. Try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-card glass-card">
        <div style={{ textAlign: 'center', marginBottom: '30px' }}>
          <div style={{ 
            width: '60px', 
            height: '60px', 
            background: '#10b981', 
            borderRadius: '16px', 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center',
            margin: '0 auto 20px',
            boxShadow: '0 8px 16px rgba(16, 185, 129, 0.4)'
          }}>
            <Smartphone color="white" size={32} />
          </div>
          <h1>Verify Email</h1>
          <p className="subtitle">We've sent a code to {email}</p>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="otp-inputs">
            {otp.map((data, index) => (
              <input
                key={index}
                type="text"
                maxLength="1"
                className="otp-input"
                value={data}
                onChange={(e) => handleChange(e.target, index)}
                onKeyDown={(e) => handleKeyDown(e, index)}
                ref={(el) => (inputs.current[index] = el)}
                autoFocus={index === 0}
              />
            ))}
          </div>

          {error && (
            <div className="error-message" style={{ justifyContent: 'center', marginBottom: '20px' }}>
              <AlertCircle size={16} />
              {error}
            </div>
          )}

          <button 
            type="submit" 
            className="btn-primary" 
            style={{ background: '#10b981' }}
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <Loader2 className="animate-spin" size={20} />
            ) : (
              <>
                Verify & Continue <ArrowRight size={20} />
              </>
            )}
          </button>
        </form>

        <div className="auth-footer" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}>
          <RefreshCw size={16} />
          <span>Didn't receive the code?</span>
          <button style={{ 
            background: 'none', 
            border: 'none', 
            color: 'var(--primary)', 
            fontWeight: 600, 
            cursor: 'pointer',
            padding: 0
          }}>
            Resend
          </button>
        </div>
      </div>
    </div>
  );
};

export default OTP;
