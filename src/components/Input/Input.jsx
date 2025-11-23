import React from 'react'
import PropTypes from 'prop-types'
import './Input.css'

export const Input = ({ 
  label, 
  placeholder, 
  type, 
  error, 
  disabled, 
  value, 
  onChange 
}) => {
  return (
    <div className="input-wrapper">
      {label && <label className="input-label">{label}</label>}
      <input
        type={type}
        className={`input ${error ? 'input--error' : ''}`}
        placeholder={placeholder}
        disabled={disabled}
        value={value}
        onChange={onChange}
      />
      {error && <span className="input-error-message">{error}</span>}
    </div>
  )
}

Input.propTypes = {
  label: PropTypes.string,
  placeholder: PropTypes.string,
  type: PropTypes.oneOf(['text', 'email', 'password', 'number']),
  error: PropTypes.string,
  disabled: PropTypes.bool,
  value: PropTypes.string,
  onChange: PropTypes.func,
}

Input.defaultProps = {
  type: 'text',
  placeholder: '',
  disabled: false,
  error: '',
  label: '',
  value: '',
  onChange: undefined,
}

