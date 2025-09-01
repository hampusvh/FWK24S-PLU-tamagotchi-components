import React from 'react';
import './ActionButton.css';

const ActionButton = ({ icon, text, onClick, variant = 'pink' }) => {
  return (
    <button 
      className={`action-button ${variant}`}
      onClick={onClick}
    >
      <img src={icon} alt="" className="action-button-icon" />
      <span className="action-button-text">{text}</span>
    </button>
  );
};

export default ActionButton;
