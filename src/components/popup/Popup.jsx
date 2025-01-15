import React from 'react';
import './Popup.css';

const Popup = ({ message, onClose, type }) => {
  // Se determina la clase de estilo según el tipo de mensaje (error o success)
  const popupClass = type === 'error' ? 'popup-error' : 'popup-success';

  return (
    <div className="popup-overlay">
      <div className={`popup-content ${popupClass}`}>
        <p>{message}</p>
        <button className="popup-close-btn" onClick={onClose}>
          Aceptar
        </button>
      </div>
    </div>
  );
};

export default Popup;
