import { BASE_URL } from '@/lib/config'
import ErrorBoundary from '@/pages/common/ErrorBoundary'
import Routes from '@/routes'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router'

import './css/global.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ErrorBoundary>
      <BrowserRouter basename={BASE_URL}>
        <Routes />
      </BrowserRouter>
    </ErrorBoundary>
  </StrictMode>
)
