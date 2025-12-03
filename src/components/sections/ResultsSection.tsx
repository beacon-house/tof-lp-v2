// Section F - Results section with correct narrative flow and one-fold optimization
import React from 'react'
import { Section } from '../Section'

export const ResultsSection: React.FC = () => {
  const comparisonData = [
    {
      university: 'Harvard',
      otherStudents: 3,
      ourStudents: 15,
      multiplier: '4.3X'
    },
    {
      university: 'Oxford',
      otherStudents: 9,
      ourStudents: 29,
      multiplier: '3.2X'
    },
    {
      university: 'Cambridge',
      otherStudents: 11,
      ourStudents: 36,
      multiplier: '3.3X'
    },
    {
      university: 'MIT',
      otherStudents: 4,
      ourStudents: 21,
      multiplier: '5.4X'
    }
  ]

  const stats = [
    { number: '150+', description: 'Former Ivy League Admissions Officers' },
    { number: '$4 Mn+', description: 'Scholarships Secured' },
    { number: '100%', description: 'Research & Internship Placements' },
    { number: '99%', description: 'Family Satisfaction Rate' }
  ]

  return (
    <Section id="results" className="relative">
      {/* Label */}


      {/* Main Heading - Using proper serif font like other sections */}
      <p className="font-serif text-lg md:text-2xl lg:text-3xl text-navy mb-4 md:mb-5 leading-relaxed text-center font-medium">
        When clarity and effort come together, great outcomes follow naturally.
      </p>

      {/* Stats Section - Right after heading */}
      <div className="w-full overflow-x-auto snap-x snap-mandatory pb-4 -mx-6 px-6 md:mx-0 md:px-0 md:pb-0 scrollbar-hide md:overflow-visible mb-5 md:mb-6">
        <div className="flex md:grid md:grid-cols-4 gap-3 md:gap-4 w-max md:w-full">
          {stats.map((stat, index) => (
            <div key={index} className="flex-shrink-0 w-[160px] md:w-auto snap-start text-center p-3 md:p-4 bg-gradient-to-br from-cream to-sage rounded-2xl border border-gold/10 shadow-sm hover:shadow-luxury transition-all duration-300 hover:-translate-y-1">
              <div className="flex items-center justify-center gap-1 mb-2">
                <div className="w-1.5 h-1.5 bg-gold rounded-full"></div>
                <div className="text-xl md:text-2xl lg:text-3xl font-bold bg-gradient-to-r from-gold to-goldLight bg-clip-text text-transparent">
                  {stat.number}
                </div>
              </div>
              <p className="text-xs md:text-sm text-navy/70 leading-snug font-medium whitespace-normal">
                {stat.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Comparison Cards - After stats */}
      <div className="w-full mb-5 md:mb-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-3 w-full">
          {comparisonData.map((item, index) => (
            <div
              key={index}
              className="bg-white border border-gold/10 rounded-2xl p-2 md:p-4 shadow-sm hover:shadow-luxury transition-all duration-300 hover:-translate-y-1"
            >
              {/* University Name */}
              <h3 className="text-xs md:text-base font-bold text-navy mb-1 md:mb-3">
                {item.university}
              </h3>

              {/* Other Students */}
              <div className="mb-1 md:mb-2">
                <div className="flex justify-between items-center mb-1">
                  <span className="text-[10px] md:text-xs text-navy/60">Other Students</span>
                  <span className="text-[10px] md:text-xs font-semibold text-navy/70">
                    {item.otherStudents} out of 100
                  </span>
                </div>
                <div className="w-full bg-navy/10 rounded-full h-1.5 md:h-2">
                  <div
                    className="bg-navy/40 h-1.5 md:h-2 rounded-full transition-all duration-500"
                    style={{ width: `${item.otherStudents}%` }}
                  ></div>
                </div>
              </div>

              {/* Our Students */}
              <div className="mb-1 md:mb-2">
                <div className="flex justify-between items-center mb-1">
                  <span className="text-[10px] md:text-xs text-navy/60">Our Students</span>
                  <span className="text-[10px] md:text-xs font-semibold text-navy">
                    {item.ourStudents} out of 100
                  </span>
                </div>
                <div className="w-full bg-navy/10 rounded-full h-1.5 md:h-2">
                  <div
                    className="bg-gradient-to-r from-gold to-goldLight h-1.5 md:h-2 rounded-full transition-all duration-500 shadow-sm"
                    style={{ width: `${item.ourStudents}%` }}
                  ></div>
                </div>
              </div>

              {/* Success Rate Badge */}
              <div className="flex justify-center mt-1 md:mt-2">
                <span className="inline-block bg-navy/5 text-navy text-[10px] md:text-xs font-semibold px-2 py-0.5 md:py-1 rounded-full">
                  {item.multiplier} Higher
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Cursive Closing Line */}
      <div className="text-center">
        <p className="text-base md:text-2xl lg:text-3xl text-navy font-serif font-medium">
          <span className="cursive-keyword">Clarity</span> → Direction → Outcomes.
        </p>
      </div>
    </Section>
  )
}
