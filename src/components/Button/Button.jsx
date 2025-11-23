import React from 'react'
import PropTypes from 'prop-types'
import './Button.css'

export const Button = ({ primary, size, label, onClick }) => {
  const mode = primary ? 'button--primary' : 'button--secondary'
  const sizeClass = `button--${size}`
  
  return (
    <button
      type="button"
      className={['button', sizeClass, mode].join(' ')}
      onClick={onClick}
    >
      {label}
    </button>
  )
}

Button.propTypes = {
  primary: PropTypes.bool,
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func,
}

Button.defaultProps = {
  primary: false,
  size: 'medium',
  onClick: undefined,
}

