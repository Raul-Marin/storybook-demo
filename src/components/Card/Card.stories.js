import { Card } from './Card'

export default {
  title: 'Componentes/Card',
  component: Card,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
}

export const Default = {
  args: {
    title: 'Tarjeta por Defecto',
    description: 'Esta es una tarjeta con el estilo por defecto. Tiene un borde simple y limpio.',
    imageUrl: 'https://via.placeholder.com/300x200/1ea7fd/ffffff?text=Imagen',
  },
}

export const Elevated = {
  args: {
    title: 'Tarjeta Elevada',
    description: 'Esta tarjeta tiene una sombra que le da un efecto elevado. Al pasar el ratón, la sombra aumenta.',
    imageUrl: 'https://via.placeholder.com/300x200/4caf50/ffffff?text=Elevada',
    variant: 'elevated',
  },
}

export const Outlined = {
  args: {
    title: 'Tarjeta con Borde',
    description: 'Esta tarjeta tiene un borde más grueso y de color para destacar.',
    imageUrl: 'https://via.placeholder.com/300x200/ff9800/ffffff?text=Borde',
    variant: 'outlined',
  },
}

export const WithoutImage = {
  args: {
    title: 'Sin Imagen',
    description: 'Las tarjetas también pueden funcionar sin imagen, solo con contenido de texto.',
    variant: 'elevated',
  },
}

