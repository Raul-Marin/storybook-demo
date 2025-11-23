# 🎉 ¡Tu proyecto está configurado y sincronizado con GitHub!

## ✅ Lo que ya está hecho:

- ✓ Proyecto de Storybook creado con React + Vite
- ✓ 3 componentes de ejemplo con sus stories
- ✓ Git inicializado y commits realizados
- ✓ **Código subido a GitHub**: https://github.com/Raul-Marin/storybook-demo
- ✓ GitHub Actions configurado para despliegue automático

---

## 🚀 Próximos pasos:

### 1. Instalar las dependencias

```bash
cd /Users/raulmarin/Desktop/storybook-demo
npm install
```

### 2. Probar Storybook en local

```bash
npm run storybook
```

Se abrirá automáticamente en **http://localhost:6006** 🎨

Verás tus 3 componentes:
- 🔘 **Button** - Botones con diferentes estilos y tamaños
- 🃏 **Card** - Tarjetas con imagen y variantes
- ✏️ **Input** - Campos de entrada con validación

### 3. Activar GitHub Pages (Despliegue automático)

Para que tu Storybook se publique automáticamente en internet:

1. Ve a tu repositorio: https://github.com/Raul-Marin/storybook-demo
2. Haz clic en **Settings** (Configuración)
3. En el menú lateral, haz clic en **Pages**
4. En **Source**, selecciona **GitHub Actions**
5. ¡Listo! 🎊

Cada vez que hagas un push a `main`, se desplegará automáticamente tu Storybook.

La URL será algo como: `https://raul-marin.github.io/storybook-demo/`

---

## 📝 Comandos útiles:

```bash
# Desarrollo
npm run dev              # Inicia la app React (puerto 5173)
npm run storybook        # Inicia Storybook (puerto 6006)

# Build de producción
npm run build            # Build de la app
npm run build-storybook  # Build de Storybook

# Git
git status               # Ver cambios
git add .                # Agregar archivos
git commit -m "mensaje"  # Hacer commit
git push                 # Subir a GitHub
```

---

## 🎨 Crear nuevos componentes:

### Estructura recomendada:

```
src/components/MiComponente/
├── MiComponente.jsx       # El componente
├── MiComponente.css       # Los estilos
└── MiComponente.stories.js # Las stories de Storybook
```

### Ejemplo de story:

```javascript
import { MiComponente } from './MiComponente'

export default {
  title: 'Componentes/MiComponente',
  component: MiComponente,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
}

export const Default = {
  args: {
    // tus props aquí
  },
}
```

---

## 🔐 Seguridad del token:

Tu token de GitHub ya no está guardado en el repositorio local. Para futuros push, Git usará el sistema de credenciales de macOS.

Si necesitas configurar el token nuevamente:

```bash
# Usar GitHub CLI (recomendado)
gh auth login

# O configurar git credential helper
git config --global credential.helper osxkeychain
```

---

## 📚 Recursos:

- [Documentación de Storybook](https://storybook.js.org/docs)
- [React Docs](https://react.dev)
- [Vite Docs](https://vitejs.dev)
- [GitHub Actions](https://docs.github.com/actions)

---

## 🆘 ¿Problemas?

Si tienes algún error durante `npm install`, asegúrate de tener Node.js 16 o superior:

```bash
node --version  # Debería ser v16.x o superior
```

---

¡Disfruta creando componentes! 🚀✨

