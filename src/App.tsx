import { useEffect } from 'react'
import { BrowserRouter, Routes, Route, useLocation, useParams } from 'react-router-dom'
import { Nav } from './components/Nav'
import { Footer } from './components/Footer'
import { SupportChat } from './components/SupportChat'
import { HomePage } from './pages/HomePage'
import { CareersPage } from './pages/CareersPage'
import { JobDetailPage } from './pages/JobDetailPage'
import { ProductsPage } from './pages/ProductsPage'
import { ProductDetailPage } from './pages/ProductDetailPage'
import { SolutionPage } from './pages/SolutionPage'
import { NotFoundPage } from './pages/NotFoundPage'

function ScrollManager() {
  const location = useLocation()

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.slice(1)
      requestAnimationFrame(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
      })
      return
    }
    window.scrollTo(0, 0)
  }, [location.pathname, location.hash])

  return null
}

function SolutionRoute() {
  const { slug } = useParams<{ slug: string }>()
  return <SolutionPage slug={slug ?? ''} />
}

function AppShell() {
  return (
    <div className="min-h-svh overflow-x-hidden bg-bg text-ink">
      <ScrollManager />
      <Nav />
      <main id="main">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/products/:slug" element={<ProductDetailPage />} />
          <Route path="/solutions/:slug" element={<SolutionRoute />} />
          <Route path="/careers" element={<CareersPage />} />
          <Route path="/careers/:id" element={<JobDetailPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
      <Footer />
      <SupportChat />
    </div>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <AppShell />
    </BrowserRouter>
  )
}
