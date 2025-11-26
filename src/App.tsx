// Main App component integrating all sections
import { useState } from 'react'
import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { StickyMobileCTA } from './components/StickyMobileCTA'
import { HeroSection } from './components/sections/HeroSection'
import { PainPointSection } from './components/sections/PainPointSection'
import { AuthoritySection } from './components/sections/AuthoritySection'
import { BridgeSection } from './components/sections/BridgeSection'
import { WhoWeAreSection } from './components/sections/WhoWeAreSection'
import { ResultsSection } from './components/sections/ResultsSection'
import { ProcessSection } from './components/sections/ProcessSection'
import { TrustSection } from './components/sections/TrustSection'
import { FinalCloseSection } from './components/sections/FinalCloseSection'
import { LeadCaptureModal } from './components/LeadCaptureModal'

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleRequestEvaluation = () => {
    setIsModalOpen(true)
  }

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <Header onCTAClick={handleRequestEvaluation} />

      <main>
        <HeroSection />
        <PainPointSection />
        <AuthoritySection />
        <BridgeSection />
        <WhoWeAreSection />
        <ResultsSection />
        <ProcessSection />
        <TrustSection />
        <FinalCloseSection />
      </main>

      <Footer />

      <StickyMobileCTA onClick={handleRequestEvaluation} />

      <LeadCaptureModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        type="evaluation"
      />
    </div>
  )
}

export default App
