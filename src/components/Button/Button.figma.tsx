import React from 'react'
import { figma } from '@figma/code-connect'
import { Button } from './Button'

/**
 * Conexión entre el componente Button de Figma y React
 * 
 * Este ejemplo muestra cómo usar el componente Button en tu código.
 * Las propiedades se ajustarán automáticamente cuando tu componente
 * de Figma tenga variantes y propiedades configuradas.
 */

figma.connect(
  Button,
  'https://www.figma.com/design/0XYUpz6zUHOv622PhKXb8v/Untitled?node-id=1-4',
  {
    example: () => (
      <Button 
        label="Button" 
        primary={true}
      />
    ),
  }
)

