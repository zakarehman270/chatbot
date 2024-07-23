import React, { useState } from 'react';

const SlideModal = ({ isOpen, onClose, children }) => {
  return (
    <div className={`sliding-modal ${isOpen ? 'open' : ''}`}>
      <div className="modal-content">
        <button className="close-button" onClick={onClose}>
          Close
        </button>
        {children}
      </div>
    </div>
  );
};
export default SlideModal;
