import React from 'react'
import { figma } from '@figma/code-connect'
import { Button } from './Button'

/**
 * -- Este es un ejemplo de cómo vincular tu componente Button con Figma --
 * 
 * PASOS PARA USAR:
 * 1. Abre tu componente Button en Figma
 * 2. Copia la URL del componente (debe verse como: https://www.figma.com/file/FILE_ID/FILE_NAME?node-id=NODE_ID)
 * 3. Reemplaza 'YOUR_FIGMA_NODE_URL' abajo con esa URL
 * 4. Ejecuta: npx @figma/code-connect publish --token=TU_TOKEN
 */

figma.connect(
  Button,
  'YOUR_FIGMA_NODE_URL', // 👈 Reemplaza esto con la URL de tu componente en Figma
  {
    props: {
      primary: figma.boolean('Variant', {
        true: 'Primary',
        false: 'Secondary',
      }),
      size: figma.enum('Size', {
        Small: 'small',
        Medium: 'medium',
        Large: 'large',
      }),
      label: figma.string('Text'),
    },
    example: (props) => <Button {...props} />,
  }
)

