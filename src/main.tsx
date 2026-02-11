import { StrictMode, type ComponentType } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import NotFound from './not-found.tsx'
import { applyPageMeta, type PageKey } from './config/site-meta.ts'

type ResolvedPage = {
	component: ComponentType;
	pageKey: PageKey;
}

function resolvePage(pathname: string): ResolvedPage {
	const normalizedPath = pathname.replace(/\/+$/, "") || "/"
	if (normalizedPath === "/" || normalizedPath === "/index.html") {
		return { component: App, pageKey: "home" }
	}

	return { component: NotFound, pageKey: "notFound" }
}

const { component: Page, pageKey } = resolvePage(window.location.pathname)
applyPageMeta(pageKey)

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Page />
  </StrictMode>,
)
