import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
//import App from './App.tsx'
import 'bootstrap/dist/css/bootstrap.css'
import Login from './Mylogin/login.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Login />
  </StrictMode>,
)
