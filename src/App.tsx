import { useEffect } from 'react'
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ScrollProgress from './components/ScrollProgress'
import FloatingActions from './components/FloatingActions'
import PageHeader from './components/PageHeader'
import Projects, { Gallery, Legislation } from './components/Projects'
import About from './components/About'
import Home from './pages/Home'

function Pages() {
  const { pathname } = useLocation()
  useEffect(() => { window.scrollTo(0, 0) }, [pathname])
  return (
    <motion.main
      key={pathname}
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45 }}
    >
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/projects"
          element={<><PageHeader title="Completed projects" text="What has been delivered across Ogun Central, sector by sector." /><Projects /></>}
        />
        <Route
          path="/bills"
          element={<><PageHeader title="Bills & Motions" text="His legislative work in the National Assembly." /><Legislation /></>}
        />
        <Route
          path="/gallery"
          element={<><PageHeader title="Gallery" text="Moments from projects and events across the district." /><Gallery /></>}
        />
        <Route
          path="/about"
          element={<><PageHeader title="About" text="The man behind the work." /><About /></>}
        />
        <Route path="*" element={<Home />} />
      </Routes>
    </motion.main>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollProgress />
      <Navbar />
      <Pages />
      <Footer />
      <FloatingActions />
    </BrowserRouter>
  )
}