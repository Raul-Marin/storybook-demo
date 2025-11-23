import { Button } from './Button'

export default {
  title: 'Componentes/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: { control: 'color' },
  },
}

export const Primary = {
  args: {
    primary: true,
    label: 'Botón Primario',
  },
}

export const Secondary = {
  args: {
    label: 'Botón Secundario',
  },
}

export const Large = {
  args: {
    size: 'large',
    label: 'Botón Grande',
  },
}

export const Small = {
  args: {
    size: 'small',
    label: 'Botón Pequeño',
  },
}

