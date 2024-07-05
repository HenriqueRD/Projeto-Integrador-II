import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles/index.scss'
import Router from './routes'
import { Toaster } from 'react-hot-toast'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
      <Router />
    <div><Toaster/></div>
  </React.StrictMode>,
)
