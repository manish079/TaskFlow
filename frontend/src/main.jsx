import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import './styles/theme.css'
import './styles/global.css'
// Ensure component/page CSS is loaded
import './components/AuthLayout/AuthLayout.css'
import './components/Button/Button.css'
import './components/TextField/TextField.css'
import './components/PasswordField/PasswordField.css'
import './components/Logo/Logo.css'
import './pages/auth.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <App />
      <ToastContainer
        position="top-right"
        newestOnTop
        closeOnClick
        pauseOnHover
        autoClose={3000}
        theme="dark"
      />
    </BrowserRouter>
  </StrictMode>,
)
