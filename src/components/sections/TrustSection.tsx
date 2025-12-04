// Section H - Trust + Proof section
import React from 'react'
import { Section } from '../Section'
import { Button } from '../Button'

export const TrustSection: React.FC = () => {
  const handleBookCall = () => {
    window.open('https://calendly.com/beacon-house', '_blank')
  }

  const handleRequestEvaluation = () => {
    window.open('https://forms.gle/beacon-house-evaluation', '_blank')
  }

  return (
    <Section id="trust" className="relative py-16 md:py-20 flex items-center bg-gradient-to-br from-white via-gray50 to-white">
      <div className="max-w-5xl mx-auto w-full">
        {/* Three Opening Lines */}
        <div className="text-center mb-8 md:mb-10 space-y-4 md:space-y-5">
          <p className="font-serif text-lg md:text-3xl lg:text-4xl text-navy leading-tight font-light">
            Admissions doesn't have to feel chaotic.
          </p>
          <p className="font-serif text-lg md:text-3xl lg:text-4xl text-navy leading-tight font-medium">
            Clarity is possible.
          </p>
          <p className="font-serif text-lg md:text-3xl lg:text-4xl text-navy leading-tight font-bold">
            And it changes <span className="cursive-keyword">everything</span>.
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8 md:mt-10">
          <Button variant="primary" onClick={handleBookCall}>
            Book a Founder Strategy Call
          </Button>
          <Button variant="secondary" onClick={handleRequestEvaluation}>
            Request Evaluation
          </Button>
        </div>
      </div>
    </Section>
  )
}
