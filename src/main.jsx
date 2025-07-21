import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './layoutes/Home'

createRoot(document.getElementById('root')).render(
  <Layout>
  <BrowserRouter>
    <App />
  </BrowserRouter>
  </Layout> 
)
