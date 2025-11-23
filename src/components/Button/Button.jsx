import React from 'react'
import PropTypes from 'prop-types'
import './Button.css'

/**
 * Componente Button versátil para acciones de usuario.
 * 
 * Sincronizado con el diseño de Figma para mantener consistencia visual.
 * Soporta variantes primary/secondary y múltiples tamaños.
 * 
 * @component
 * @example
 * // Uso básico
 * <Button label="Click me" />
 * 
 * @example
 * // Botón primario grande con evento
 * <Button 
 *   primary={true}
 *   size="large"
 *   label="Enviar"
 *   onClick={() => handleSubmit()}
 * />
 */
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
  /**
   * Define si el botón usa el estilo primario (azul) o secundario (con borde)
   */
  primary: PropTypes.bool,
  /**
   * Tamaño del botón: small, medium o large
   */
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  /**
   * Texto que se muestra dentro del botón
   */
  label: PropTypes.string.isRequired,
  /**
   * Función callback que se ejecuta cuando el usuario hace click
   */
  onClick: PropTypes.func,
}

Button.defaultProps = {
  primary: false,
  size: 'medium',
  onClick: undefined,
}

