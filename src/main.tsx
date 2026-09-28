import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { DarkModeContextProvider } from '@contexts/dark-mode-context/index.tsx'

createRoot(document.getElementById('root')!).render(
  <DarkModeContextProvider>
    <App />
  </DarkModeContextProvider>,
)
