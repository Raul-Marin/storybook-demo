import React from 'react'
import { Button } from './components/Button/Button'
import './App.css'

function App() {
  return (
    <div className="App">
      <h1>Storybook Demo</h1>
      <p>Componentes de ejemplo para Storybook</p>
      <div style={{ display: 'flex', gap: '1rem', marginTop: '2rem' }}>
        <Button label="Botón Primario" primary />
        <Button label="Botón Secundario" />
      </div>
    </div>
  )
}

export default App

