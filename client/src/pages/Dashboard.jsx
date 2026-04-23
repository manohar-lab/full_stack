import React from 'react';
import { useAuth } from '../context/AuthContext';
import { LogOut, Bus, MapPin, Calendar, User as UserIcon } from 'lucide-react';

const Dashboard = () => {
  const { user, logout } = useAuth();

  return (
    <div style={{ padding: '20px', maxWidth: '1200px', margin: '0 auto' }}>
      <nav style={{ 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center', 
        padding: '20px',
        marginBottom: '40px'
      }} className="glass-card">
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <Bus color="var(--primary)" size={32} />
          <h2 style={{ margin: 0 }}>BusBooking</h2>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
          <span style={{ color: 'var(--text-muted)' }}>Welcome, {user?.name}</span>
          <button 
            onClick={logout}
            className="btn-primary" 
            style={{ width: 'auto', padding: '8px 16px', background: 'rgba(255,255,255,0.1)' }}
          >
            <LogOut size={18} /> Logout
          </button>
        </div>
      </nav>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px' }}>
        <div className="glass-card" style={{ padding: '30px' }}>
          <h3>Search Buses</h3>
          <p className="subtitle">Find the best routes for your next trip</p>
          <div style={{ marginTop: '20px' }}>
            <div className="form-group">
              <label>From</label>
              <div className="input-wrapper">
                <MapPin size={20} />
                <input type="text" placeholder="Origin City" />
              </div>
            </div>
            <div className="form-group">
              <label>To</label>
              <div className="input-wrapper">
                <MapPin size={20} />
                <input type="text" placeholder="Destination City" />
              </div>
            </div>
            <button className="btn-primary">Search Buses</button>
          </div>
        </div>

        <div className="glass-card" style={{ padding: '30px' }}>
          <h3>My Bookings</h3>
          <div style={{ 
            height: '200px', 
            display: 'flex', 
            flexDirection: 'column', 
            alignItems: 'center', 
            justifyContent: 'center',
            color: 'var(--text-muted)'
          }}>
            <Calendar size={48} style={{ marginBottom: '10px', opacity: 0.5 }} />
            <p>No upcoming trips</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
