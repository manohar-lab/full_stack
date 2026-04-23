import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check if user is logged in via mock JWT in localStorage
    const token = localStorage.getItem('mock_jwt');
    if (token) {
      // Simulate decoding token
      setUser({ email: 'user@example.com', name: 'Traveler' });
    }
    setLoading(false);
  }, []);

  const login = (email, password) => {
    // Mock login logic
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (email && password) {
          const mockToken = "mock_jwt_header.mock_payload.mock_signature";
          localStorage.setItem('mock_jwt', mockToken);
          setUser({ email, name: 'Traveler' });
          resolve({ success: true });
        } else {
          reject({ message: "Invalid credentials" });
        }
      }, 1000);
    });
  };

  const signup = (userData) => {
    // Mock signup logic
    return new Promise((resolve) => {
      setTimeout(() => {
        // Just resolve for demo
        resolve({ success: true });
      }, 1000);
    });
  };

  const logout = () => {
    localStorage.removeItem('mock_jwt');
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, signup, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
