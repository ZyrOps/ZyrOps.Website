import { useEffect } from 'react'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { Nav } from './components/Nav'
import { Footer } from './components/Footer'
import { SupportChat } from './components/SupportChat'
import { HomePage } from './pages/HomePage'
import { CareersPage } from './pages/CareersPage'
import { JobDetailPage } from './pages/JobDetailPage'
import { ProductsPage } from './pages/ProductsPage'
import { ProductDetailPage } from './pages/ProductDetailPage'

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
          <Route path="/careers" element={<CareersPage />} />
          <Route path="/careers/:id" element={<JobDetailPage />} />
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
