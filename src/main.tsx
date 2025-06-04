import { Provider } from "@/components/ui/provider"
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
          <Provider >
              <div className="flex justify-center items-center min-h-screen w-screen ">
              <App />
              </div>
          </Provider>
  </StrictMode>,
)
