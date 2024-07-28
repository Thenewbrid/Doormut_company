import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import ToastProvider from './components/ToastProvider.jsx'
import UnToastProviderToastProvider from './constants/UnToastProvider.jsx'
import UnToastProvider from './constants/UnToastProvider.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <UnToastProvider>
  <ToastProvider>
    <App />
      </ToastProvider>
    </UnToastProvider>
  </React.StrictMode>
)
