import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { StyledEngineProvider } from '@mui/material/styles';
import AppRoutes from './AppRoutes.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <StyledEngineProvider injectFirst>
      <AppRoutes />
    </StyledEngineProvider>
  </StrictMode>,
)
