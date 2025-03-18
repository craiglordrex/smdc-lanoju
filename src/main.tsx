import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter basename='/smdc-lanoja/'>
    <Routes>
      <Route path="*" element={<App/>}/>
      <App />
    </Routes>
    </BrowserRouter>
  </StrictMode>,
)
