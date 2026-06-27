import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import '@/assets/styles/main.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <div className="text-center text-2xl font-bold text-red-500">Hello world</div>
  </StrictMode>,
)
