import PropTypes from 'prop-types';
import React from 'react';
import '../../styles/utils/buttonWrapper.css';

const ButtonWrapper = ({ onClick, iconSrc, altText, buttonText, className }) => {
  return (
    <div className={`button__wrapper ${className}`}>
      <button onClick={onClick} className={`button-wrapper__button ${className}__button`}>
        <img src={iconSrc} alt={altText} className={`button-wrapper__icon ${className}__icon`} />
        <p className={`button-wrapper__text ${className}__text`}>
          {buttonText}
        </p>
      </button>
    </div>
  );
};

ButtonWrapper.propTypes = {
  onClick: PropTypes.func.isRequired,
  iconSrc: PropTypes.string.isRequired,
  altText: PropTypes.string.isRequired,
  buttonText: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired, 
};

export default ButtonWrapper;