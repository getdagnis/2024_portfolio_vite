import React from 'react';
import './ButtonNextProject.css';

export default function ButtonNextProject({ children, type = 'right' }) {
  return (
    <div id="button-next" className={type}>
      {type === 'left' && <div className="arrow">&lt;</div>}
      {children}
      {type === 'right' && <div className="arrow">&gt;</div>}
    </div>
  );
}
