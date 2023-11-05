import React from 'react';
import './Sidebar.css';

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="logo">
        <img src="/Blackcoffer.png" alt="Logo" style={{ width: '120px', height: '65px', marginTop: '-30px', marginLeft: '-15px' }} />
      </div>
      <nav style={{ marginLeft: "-50px", marginTop: "50px" }}>
        <ul style={{ listStyleType: 'none' }}>
          <li><a type='none' href="/" className="sidebar-button">Dashboard</a></li>
          <li style={{ marginTop: "20px" }}><a href="/about" className="sidebar-button">About</a></li>
          <li style={{ marginTop: "20px" }}><a href="/contact" className="sidebar-button">Contact</a></li>
        </ul>
      </nav>
      <div style={{ color: 'brown', textAlign: 'center', marginTop: '420px', fontFamily: 'monospace',fontSize:"20px" , border:"1px solid white", padding:"10px", borderRadius:"5px" }}>
        i15roshanza@gmail.com
      </div>
    </div>
  );
}

export default Sidebar;
