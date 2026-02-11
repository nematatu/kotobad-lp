import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import NotFound from './not-found.tsx'

function resolvePage(pathname: string) {
	const normalizedPath = pathname.replace(/\/+$/, "") || "/"
	if (normalizedPath === "/" || normalizedPath === "/index.html") {
		return App
	}

	return NotFound
}

const Page = resolvePage(window.location.pathname)

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Page />
  </StrictMode>,
)
