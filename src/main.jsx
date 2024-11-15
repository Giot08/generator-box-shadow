import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './assets/css/normalize.css'
import './assets/css/main.css'
import '@radix-ui/themes/styles.css';

import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
