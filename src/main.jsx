import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter,Routes, Route } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import Layout from './routes/Layout.jsx'
import DetailedView from './routes/DetailedView.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout/>}>
        <Route index={true} element={<App />}/>
        <Route index={false} path="/Detail/:city" element={<DetailedView/>}/>
      </Route>
    </Routes>
    </BrowserRouter>
  </StrictMode>,
)
