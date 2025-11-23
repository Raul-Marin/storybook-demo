import React from 'react'
import PropTypes from 'prop-types'
import './Card.css'

export const Card = ({ title, description, imageUrl, variant }) => {
  return (
    <div className={`card card--${variant}`}>
      {imageUrl && (
        <div className="card__image">
          <img src={imageUrl} alt={title} />
        </div>
      )}
      <div className="card__content">
        <h3 className="card__title">{title}</h3>
        {description && <p className="card__description">{description}</p>}
      </div>
    </div>
  )
}

Card.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  imageUrl: PropTypes.string,
  variant: PropTypes.oneOf(['default', 'elevated', 'outlined']),
}

Card.defaultProps = {
  variant: 'default',
  description: '',
  imageUrl: '',
}

