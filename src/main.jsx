import React from 'react'
import { hydrateRoot } from 'react-dom/client'
import './index.css'
import App from './App'

hydrateRoot(
  document.getElementById('root'),
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
