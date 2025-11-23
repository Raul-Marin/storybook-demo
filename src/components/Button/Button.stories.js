import { Button } from './Button'

export default {
  title: 'Componentes/Button',
  component: Button,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Componente Button sincronizado con Figma. El diseño coincide exactamente con el componente de Figma.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    primary: {
      control: 'boolean',
      description: 'Estilo del botón: primary (azul) o secondary (con borde)',
    },
    size: {
      control: { type: 'select', options: ['small', 'medium', 'large'] },
      description: 'Tamaño del botón',
    },
    label: {
      control: 'text',
      description: 'Texto que se muestra en el botón',
    },
    onClick: {
      description: 'Función que se ejecuta al hacer click',
    },
  },
}

export const Primary = {
  args: {
    primary: true,
    label: 'Button',
  },
  parameters: {
    docs: {
      source: {
        code: `<Button 
  primary={true}
  label="Button" 
/>`,
      },
    },
  },
}

export const Secondary = {
  args: {
    label: 'Button',
  },
  parameters: {
    docs: {
      source: {
        code: `<Button 
  label="Button" 
/>`,
      },
    },
  },
}

export const Large = {
  args: {
    size: 'large',
    label: 'Button',
  },
  parameters: {
    docs: {
      source: {
        code: `<Button 
  size="large"
  label="Button" 
/>`,
      },
    },
  },
}

export const Small = {
  args: {
    size: 'small',
    label: 'Button',
  },
  parameters: {
    docs: {
      source: {
        code: `<Button 
  size="small"
  label="Button" 
/>`,
      },
    },
  },
}

