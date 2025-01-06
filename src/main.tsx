import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

import { BrowserRouter, HashRouter, Route, Routes } from "react-router";
import Page1 from './Page1.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HashRouter>
      <Routes>
        <Route index element={<App />} />
        <Route path='page1' element={<Page1 />} />
      </Routes>
    </HashRouter>
  </StrictMode>,
)
