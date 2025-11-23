import { Button } from './Button'

/**
 * # Button Component
 * 
 * Componente de botón versátil y reutilizable sincronizado con Figma.
 * 
 * ## Cuándo usar
 * - Para acciones principales o secundarias
 * - Para enviar formularios
 * - Para navegación y llamadas a la acción
 * 
 * ## Importación
 * ```jsx
 * import { Button } from './components/Button/Button';
 * ```
 * 
 * ## Figma
 * [Ver diseño en Figma](https://www.figma.com/design/0XYUpz6zUHOv622PhKXb8v/Untitled?node-id=1-4)
 */
export default {
  title: 'Componentes/Button',
  component: Button,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
Componente Button sincronizado con Figma. 

### Características
- ✅ Sincronizado con Figma Design System
- ✅ Variantes Primary y Secondary
- ✅ 3 tamaños disponibles (small, medium, large)
- ✅ Estados hover interactivos
- ✅ Accesible y semántico

### Diseño
- **Color primario**: #0a01b2 (azul oscuro)
- **Tipografía**: Inter Regular, 12px
- **Padding**: 10px
- **Layout**: Flex centered

### Uso básico
\`\`\`jsx
<Button label="Click me" />
\`\`\`

### Con todas las opciones
\`\`\`jsx
<Button 
  primary={true}
  size="large"
  label="Enviar"
  onClick={() => console.log('Clicked!')}
/>
\`\`\`
        `,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    primary: {
      control: 'boolean',
      description: 'Define el estilo del botón',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
      },
    },
    size: {
      control: { type: 'select', options: ['small', 'medium', 'large'] },
      description: 'Tamaño del botón',
      table: {
        type: { summary: "'small' | 'medium' | 'large'" },
        defaultValue: { summary: 'medium' },
      },
    },
    label: {
      control: 'text',
      description: 'Texto que se muestra dentro del botón',
      table: {
        type: { summary: 'string' },
      },
    },
    onClick: {
      description: 'Función callback que se ejecuta al hacer click',
      action: 'clicked',
      table: {
        type: { summary: '() => void' },
      },
    },
  },
}

/**
 * Botón primario con el color principal del sistema.
 * 
 * Usar para acciones principales como "Enviar", "Guardar", "Continuar".
 */
export const Primary = {
  args: {
    primary: true,
    label: 'Button',
  },
  parameters: {
    docs: {
      description: {
        story: 'Variante principal del botón con fondo azul oscuro (#0a01b2). Ideal para llamadas a la acción principales.',
      },
      source: {
        code: `<Button 
  primary={true}
  label="Button" 
/>`,
      },
    },
  },
}

/**
 * Botón secundario con borde.
 * 
 * Usar para acciones secundarias como "Cancelar", "Volver", "Cerrar".
 */
export const Secondary = {
  args: {
    label: 'Button',
  },
  parameters: {
    docs: {
      description: {
        story: 'Variante secundaria con fondo transparente y borde. Para acciones menos importantes.',
      },
      source: {
        code: `<Button 
  label="Button" 
/>`,
      },
    },
  },
}

/**
 * Botón grande para mayor énfasis visual.
 */
export const Large = {
  args: {
    size: 'large',
    label: 'Button',
  },
  parameters: {
    docs: {
      description: {
        story: 'Tamaño grande para áreas destacadas o pantallas móviles.',
      },
      source: {
        code: `<Button 
  size="large"
  label="Button" 
/>`,
      },
    },
  },
}

/**
 * Botón pequeño para espacios reducidos.
 */
export const Small = {
  args: {
    size: 'small',
    label: 'Button',
  },
  parameters: {
    docs: {
      description: {
        story: 'Tamaño compacto para tablas, tarjetas o áreas con poco espacio.',
      },
      source: {
        code: `<Button 
  size="small"
  label="Button" 
/>`,
      },
    },
  },
}

/**
 * Ejemplo con función onClick
 * 
 * Puedes ver el evento en el panel "Actions" cuando hagas click.
 */
export const WithClick = {
  args: {
    primary: true,
    label: 'Click Me',
  },
  parameters: {
    docs: {
      description: {
        story: 'Ejemplo de botón con manejador de eventos onClick. Mira el panel Actions al hacer click.',
      },
      source: {
        code: `<Button 
  primary={true}
  label="Click Me"
  onClick={() => console.log('Button clicked!')}
/>`,
      },
    },
  },
}

