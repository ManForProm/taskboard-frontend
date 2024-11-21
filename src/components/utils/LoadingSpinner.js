import React from 'react';
import '../../styles/utils/loadingSpinner.css';

const LoadingSpinner = ({ size = 40, color = '#3498db' }) => {
  return (
    <div className="loading-spinner" style={{ width: size, height: size }}>
      <div
        className="spinner"
        style={{
          borderTopColor: color,
          width: size,
          height: size,
          borderWidth: `${size / 10}px`,
        }}
      ></div>
    </div>
  );
};

export default LoadingSpinner;