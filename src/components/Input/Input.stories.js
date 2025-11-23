import { Input } from './Input'

export default {
  title: 'Componentes/Input',
  component: Input,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
}

export const Default = {
  args: {
    label: 'Nombre',
    placeholder: 'Escribe tu nombre',
  },
}

export const Email = {
  args: {
    label: 'Email',
    type: 'email',
    placeholder: 'tu@email.com',
  },
}

export const Password = {
  args: {
    label: 'Contraseña',
    type: 'password',
    placeholder: 'Mínimo 8 caracteres',
  },
}

export const WithError = {
  args: {
    label: 'Email',
    type: 'email',
    placeholder: 'tu@email.com',
    value: 'email-invalido',
    error: 'Por favor, introduce un email válido',
  },
}

export const Disabled = {
  args: {
    label: 'Campo Deshabilitado',
    placeholder: 'No puedes editar esto',
    disabled: true,
    value: 'Valor bloqueado',
  },
}

