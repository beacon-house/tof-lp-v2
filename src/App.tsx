// Main App component integrating all sections with progressive reveal functionality
import { useState, useRef, lazy, Suspense } from 'react'
import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { HeroSection } from './components/sections/HeroSection'
import { FormSection } from './components/sections/FormSection'

const PainPointSection = lazy(() => import('./components/sections/PainPointSection').then(m => ({ default: m.PainPointSection })))
const AuthoritySection = lazy(() => import('./components/sections/AuthoritySection').then(m => ({ default: m.AuthoritySection })))
const BridgeSection = lazy(() => import('./components/sections/BridgeSection').then(m => ({ default: m.BridgeSection })))
const AchievementsSection = lazy(() => import('./components/sections/AchievementsSection').then(m => ({ default: m.AchievementsSection })))
const WhoWeAreSection = lazy(() => import('./components/sections/WhoWeAreSection').then(m => ({ default: m.WhoWeAreSection })))
const ResultsSection = lazy(() => import('./components/sections/ResultsSection').then(m => ({ default: m.ResultsSection })))
const ProcessSection = lazy(() => import('./components/sections/ProcessSection').then(m => ({ default: m.ProcessSection })))
const TrustSection = lazy(() => import('./components/sections/TrustSection').then(m => ({ default: m.TrustSection })))

function App() {
  const [showFirstGroup, setShowFirstGroup] = useState(false)
  const [showSecondGroup, setShowSecondGroup] = useState(false)
  const [showForm, setShowForm] = useState(false)
  const firstGroupRef = useRef<HTMLDivElement>(null)
  const secondGroupRef = useRef<HTMLDivElement>(null)
  const formRef = useRef<HTMLDivElement>(null)

  const handleLearnMore = () => {
    setShowFirstGroup(true)
    setTimeout(() => {
      firstGroupRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }, 100)
  }

  const handleUnderstandApproach = () => {
    setShowSecondGroup(true)
    setTimeout(() => {
      secondGroupRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }, 100)
  }

  const handleShowForm = () => {
    setShowForm(true)
    setTimeout(() => {
      formRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }, 100)
  }

  const handleCloseForm = () => {
    setShowForm(false)
  }

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <Header />

      <main>
        <HeroSection onLearnMore={handleLearnMore} />

        {showFirstGroup && (
          <div ref={firstGroupRef}>
            <Suspense fallback={<div className="min-h-screen flex items-center justify-center"><div className="animate-spin rounded-full h-12 w-12 border-b-2 border-navy"></div></div>}>
              <PainPointSection />
              <AuthoritySection />
              <BridgeSection onUnderstandApproach={handleUnderstandApproach} />
            </Suspense>
          </div>
        )}

        {showSecondGroup && (
          <div ref={secondGroupRef}>
            <Suspense fallback={<div className="min-h-screen flex items-center justify-center"><div className="animate-spin rounded-full h-12 w-12 border-b-2 border-navy"></div></div>}>
              <AchievementsSection />
              <WhoWeAreSection />
              <ResultsSection />
              <ProcessSection />
              <TrustSection onShowForm={handleShowForm} />
            </Suspense>
          </div>
        )}

        {showForm && (
          <div ref={formRef}>
            <FormSection onClose={handleCloseForm} />
          </div>
        )}
      </main>

      <Footer />
    </div>
  )
}

export default App
