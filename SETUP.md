# Configuración de GitHub

## Pasos para conectar tu proyecto con GitHub

### 1. Crear repositorio en GitHub

1. Ve a [GitHub](https://github.com) e inicia sesión
2. Haz clic en el botón **"New"** o **"+"** → **"New repository"**
3. Configura tu repositorio:
   - **Repository name:** `storybook-demo` (o el nombre que prefieras)
   - **Description:** Proyecto demo de Storybook con React
   - **Public/Private:** Elige según tus preferencias
   - ⚠️ **NO** marques "Initialize this repository with a README" (ya tenemos archivos locales)
4. Haz clic en **"Create repository"**

### 2. Conectar el repositorio local con GitHub

Después de crear el repositorio en GitHub, ejecuta estos comandos en tu terminal:

```bash
cd /Users/raulmarin/Desktop/storybook-demo

# Agrega el repositorio remoto (reemplaza TU_USUARIO con tu nombre de usuario de GitHub)
git remote add origin https://github.com/TU_USUARIO/storybook-demo.git

# O si prefieres SSH:
# git remote add origin git@github.com:TU_USUARIO/storybook-demo.git

# Sube el código a GitHub
git push -u origin main
```

### 3. Verificar la conexión

Ejecuta este comando para ver tu repositorio remoto:

```bash
git remote -v
```

Deberías ver algo como:
```
origin  https://github.com/TU_USUARIO/storybook-demo.git (fetch)
origin  https://github.com/TU_USUARIO/storybook-demo.git (push)
```

## Comandos Git útiles

### Hacer cambios y subirlos a GitHub:

```bash
# Ver el estado de tus archivos
git status

# Agregar archivos modificados
git add .

# Hacer un commit
git commit -m "Descripción de los cambios"

# Subir a GitHub
git push
```

### Ver el historial de commits:

```bash
git log --oneline
```

### Crear una nueva rama:

```bash
git checkout -b nombre-de-la-rama
```

### Ver todas las ramas:

```bash
git branch -a
```

## 🚀 Próximos pasos

1. Instala las dependencias: `npm install`
2. Inicia Storybook: `npm run storybook`
3. Explora los componentes en `http://localhost:6006`
4. Haz cambios, commitea y sube a GitHub

## 🌐 GitHub Pages (Opcional)

Puedes publicar tu Storybook en GitHub Pages:

1. Crea el archivo `.github/workflows/deploy-storybook.yml`
2. Configura GitHub Pages en la configuración del repositorio
3. Cada push a `main` desplegará automáticamente tu Storybook

¿Te gustaría que configure GitHub Actions para despliegue automático?

