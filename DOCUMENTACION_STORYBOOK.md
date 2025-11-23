# 📚 Guía de Documentación en Storybook

Esta guía explica todas las formas de documentar componentes en Storybook.

---

## 🎯 Tipos de Documentación

### 1. **Comentarios JSDoc en el Componente** ⭐ RECOMENDADO

```jsx
/**
 * Descripción del componente
 * 
 * @component
 * @example
 * <Button label="Click me" />
 */
export const Button = ({ props }) => {
  // ...
}

Button.propTypes = {
  /**
   * Descripción de la prop
   */
  label: PropTypes.string.isRequired,
}
```

✅ **Ventajas:**
- Storybook los detecta automáticamente
- Útil para otros desarrolladores
- Aparece en IDEs con IntelliSense

---

### 2. **Documentación en el archivo `.stories.js`**

#### A) Comentario JSDoc sobre el export default

```javascript
/**
 * # Título del Componente
 * 
 * Descripción general del componente.
 * 
 * ## Cuándo usar
 * - Caso de uso 1
 * - Caso de uso 2
 */
export default {
  title: 'Componentes/Button',
  component: Button,
  // ...
}
```

#### B) En el objeto `parameters.docs.description.component`

```javascript
export default {
  title: 'Componentes/Button',
  component: Button,
  parameters: {
    docs: {
      description: {
        component: `
### Descripción
Componente versátil con markdown.

### Características
- Feature 1
- Feature 2

### Código ejemplo
\`\`\`jsx
<Button label="Click" />
\`\`\`
        `,
      },
    },
  },
}
```

---

### 3. **Documentar `argTypes` (Props)**

```javascript
export default {
  argTypes: {
    primary: {
      control: 'boolean',
      description: 'Define el estilo del botón',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
        category: 'Appearance', // Agrupa props
      },
    },
    onClick: {
      description: 'Callback al hacer click',
      action: 'clicked', // Muestra en panel Actions
      table: {
        type: { summary: '() => void' },
      },
    },
  },
}
```

**Controles disponibles:**
- `'boolean'` - Checkbox
- `'text'` - Input de texto
- `'number'` - Input numérico
- `'color'` - Color picker
- `'select'` - Dropdown
- `'radio'` - Radio buttons
- `'date'` - Date picker

---

### 4. **Documentar Stories Individuales**

#### A) Comentario JSDoc

```javascript
/**
 * Descripción breve de la historia
 * 
 * Explicación más detallada de cuándo usar esta variante.
 */
export const Primary = {
  args: { /* ... */ }
}
```

#### B) Con `parameters.docs.description.story`

```javascript
export const Primary = {
  args: {
    primary: true,
    label: 'Button',
  },
  parameters: {
    docs: {
      description: {
        story: 'Descripción de esta variante específica.',
      },
      source: {
        code: `<Button primary={true} label="Button" />`,
      },
    },
  },
}
```

---

### 5. **Tag `autodocs`** ⭐

```javascript
export default {
  tags: ['autodocs'], // 👈 Genera documentación automática
}
```

Genera automáticamente:
- Descripción del componente
- Tabla de props
- Ejemplos de cada story
- Código fuente

---

## 🎨 Formatos de Texto

### Markdown en descripciones

```javascript
description: `
# Título
## Subtítulo

**Negrita** y *cursiva*

- Lista 1
- Lista 2

\`\`\`jsx
// Bloque de código
<Button />
\`\`\`

[Link](https://example.com)
`
```

---

## 📁 Estructura Recomendada

```
src/components/Button/
├── Button.jsx              # ← JSDoc aquí
├── Button.css
├── Button.stories.js       # ← Documentación principal aquí
└── Button.test.js
```

---

## 🔥 Ejemplo Completo

```javascript
// Button.stories.js

/**
 * # Button Component
 * 
 * Botón versátil y reutilizable.
 * 
 * ## Importación
 * \`\`\`jsx
 * import { Button } from './components/Button/Button';
 * \`\`\`
 */
export default {
  title: 'Componentes/Button',
  component: Button,
  parameters: {
    docs: {
      description: {
        component: `
### Características
- Sincronizado con Figma
- Múltiples variantes
- Accesible (WCAG AA)

### Uso básico
\`\`\`jsx
<Button label="Click me" />
\`\`\`
        `,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    primary: {
      control: 'boolean',
      description: 'Estilo del botón',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
      },
    },
    label: {
      control: 'text',
      description: 'Texto del botón',
      table: {
        type: { summary: 'string' },
      },
    },
  },
}

/**
 * Botón primario para acciones principales
 */
export const Primary = {
  args: {
    primary: true,
    label: 'Button',
  },
  parameters: {
    docs: {
      description: {
        story: 'Usar para llamadas a la acción principales como "Enviar" o "Guardar".',
      },
    },
  },
}
```

---

## 🎯 Best Practices

### ✅ DO

- ✅ Usar `autodocs` para generación automática
- ✅ Documentar todas las props con `argTypes`
- ✅ Incluir ejemplos de código
- ✅ Explicar cuándo usar cada variante
- ✅ Agregar links a Figma si corresponde
- ✅ Usar JSDoc en el componente React

### ❌ DON'T

- ❌ Documentar props obvias (`className`, etc)
- ❌ Escribir descripciones genéricas
- ❌ Olvidar el tag `autodocs`
- ❌ Dejar código de ejemplo desactualizado

---

## 📚 Recursos

- [Documentación oficial de Storybook](https://storybook.js.org/docs/writing-docs/introduction)
- [MDX en Storybook](https://storybook.js.org/docs/writing-docs/mdx)
- [ArgTypes](https://storybook.js.org/docs/api/arg-types)

---

## 🚀 Ver tu documentación

1. Inicia Storybook: `npm run storybook`
2. Ve a tu componente
3. Haz click en la pestaña **"Docs"**
4. ¡Disfruta de tu documentación!

---

**Todas estas técnicas ya están aplicadas en el componente Button del proyecto.** 🎉

