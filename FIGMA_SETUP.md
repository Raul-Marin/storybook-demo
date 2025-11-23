# 🎨 Configuración de Figma Code Connect

Guía paso a paso para vincular tus componentes de React con Figma.

---

## 🎯 ¿Qué es Figma Code Connect?

Figma Code Connect vincula tus componentes de diseño en Figma con tu código real. Cuando alguien selecciona un componente en Figma, puede ver directamente el código de React que lo implementa.

---

## 📝 Configuración Inicial

### 1. Obtener Token de Figma

1. Ve a: https://www.figma.com/settings
2. Baja a la sección **"Personal access tokens"**
3. Haz clic en **"Generate new token"**
4. Dale un nombre como "Code Connect"
5. Copia el token (guárdalo en un lugar seguro, solo se muestra una vez)

### 2. Guardar el token (recomendado)

Guarda tu token en una variable de entorno para no tener que escribirlo cada vez:

```bash
# En tu archivo ~/.zshrc o ~/.bash_profile
export FIGMA_ACCESS_TOKEN="tu_token_aqui"

# Luego recarga:
source ~/.zshrc
```

---

## 🔗 Vincular Componentes

### Paso 1: Obtener la URL del componente en Figma

1. Abre tu archivo de Figma con los componentes
2. Selecciona tu componente Button (el principal, no una instancia)
3. Click derecho → **"Copy link to selection"** (o Cmd/Ctrl + L)
4. La URL se verá algo así:
   ```
   https://www.figma.com/design/abc123xyz/MyProject?node-id=1-234
   ```

### Paso 2: Actualizar el archivo de conexión

Edita el archivo: `src/components/Button/Button.figma.tsx`

Reemplaza `YOUR_FIGMA_NODE_URL` con la URL que copiaste:

```typescript
figma.connect(
  Button,
  'https://www.figma.com/design/abc123xyz/MyProject?node-id=1-234', // 👈 Tu URL aquí
  {
    // ... resto del código
  }
)
```

### Paso 3: Publicar a Figma

```bash
# Si guardaste el token en variable de entorno:
npx @figma/code-connect publish --token=$FIGMA_ACCESS_TOKEN

# O directamente con el token:
npx @figma/code-connect publish --token=tu_token_aqui
```

---

## 🔄 Flujo de trabajo completo

### Crear nueva conexión desde una URL de Figma:

```bash
# Genera automáticamente el archivo .figma.tsx
npx @figma/code-connect create "URL_DEL_COMPONENTE_EN_FIGMA" \
  --token=$FIGMA_ACCESS_TOKEN \
  --outDir="src/components/Button"
```

### Ver qué componentes están conectados:

```bash
npx @figma/code-connect parse --token=$FIGMA_ACCESS_TOKEN
```

### Publicar todos los componentes:

```bash
npx @figma/code-connect publish --token=$FIGMA_ACCESS_TOKEN
```

### Despublicar (si necesitas eliminar la conexión):

```bash
npx @figma/code-connect unpublish --token=$FIGMA_ACCESS_TOKEN
```

---

## 📁 Estructura de archivos

Para cada componente, crea un archivo `.figma.tsx`:

```
src/components/
├── Button/
│   ├── Button.jsx           # Componente React
│   ├── Button.css           # Estilos
│   ├── Button.stories.js    # Storybook
│   └── Button.figma.tsx     # 👈 Conexión con Figma
├── Card/
│   ├── Card.jsx
│   ├── Card.css
│   ├── Card.stories.js
│   └── Card.figma.tsx       # 👈 Conexión con Figma
└── Input/
    ├── Input.jsx
    ├── Input.css
    ├── Input.stories.js
    └── Input.figma.tsx       # 👈 Conexión con Figma
```

---

## 🎨 Mapeo de Props

En el archivo `.figma.tsx`, mapeas las propiedades de Figma a las props de React:

### Boolean (true/false):
```typescript
primary: figma.boolean('Variant', {
  true: 'Primary',
  false: 'Secondary',
})
```

### Enum (selección):
```typescript
size: figma.enum('Size', {
  Small: 'small',
  Medium: 'medium',
  Large: 'large',
})
```

### String (texto):
```typescript
label: figma.string('Text')
```

### Children (contenido anidado):
```typescript
children: figma.children('Content')
```

---

## 🚀 Comandos útiles

```bash
# Ver ayuda
npx @figma/code-connect --help

# Crear conexión nueva desde Figma
npx @figma/code-connect create "FIGMA_URL" --token=$FIGMA_ACCESS_TOKEN

# Publicar todos los componentes
npx @figma/code-connect publish --token=$FIGMA_ACCESS_TOKEN

# Ver qué se va a publicar (sin publicar)
npx @figma/code-connect publish --dry-run --token=$FIGMA_ACCESS_TOKEN

# Parsear archivos localmente
npx @figma/code-connect parse --dir=src/components

# Verbose mode para debugging
npx @figma/code-connect publish --verbose --token=$FIGMA_ACCESS_TOKEN
```

---

## 📚 Recursos

- [Documentación oficial](https://www.figma.com/developers/code-connect)
- [GitHub del proyecto](https://github.com/figma/code-connect)
- [Ejemplos de Code Connect](https://github.com/figma/code-connect/tree/main/examples)

---

## ⚠️ Importante

- **Nunca subas tu token a Git**: Usa variables de entorno
- Los archivos `.figma.tsx` SÍ deben estar en Git
- Necesitas permisos de edición en el archivo de Figma
- Los componentes deben ser componentes principales, no instancias

---

## 🆘 Problemas comunes

### "Invalid token"
- Verifica que copiaste el token completo
- Genera un nuevo token en Figma settings

### "Node not found"
- Asegúrate de que la URL es del componente principal
- Verifica que tienes acceso al archivo de Figma

### "No files found"
- Verifica que los archivos `.figma.tsx` están en las rutas correctas
- Revisa el `figma.config.json`

---

¿Listo para conectar tus componentes? 🚀

1. Obtén tu token de Figma
2. Ejecuta: `npx @figma/code-connect publish --token=TU_TOKEN`
3. ¡Verifica en Figma que aparece el código!

