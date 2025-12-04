import React, { useEffect, useState } from 'react'
import { useFormStore } from '../../store/formStore'
import { saveFormDataIncremental } from '../../lib/formTracking'

interface EvaluationAnimationProps {
  onComplete: () => void
}

export const EvaluationAnimation: React.FC<EvaluationAnimationProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0)
  const formState = useFormStore()

  useEffect(() => {
    const duration = 10000
    const interval = 50
    const increment = (interval / duration) * 100

    const timer = setInterval(() => {
      setProgress((prev) => {
        const next = prev + increment
        if (next >= 100) {
          clearInterval(timer)
          return 100
        }
        return next
      })
    }, interval)

    const completionTimer = setTimeout(async () => {
      formState.updateField('funnelStage', '06_lead_evaluated')
      await saveFormDataIncremental(
        formState.sessionId,
        { funnelStage: '06_lead_evaluated' },
        '06_lead_evaluated'
      )
      onComplete()
    }, duration)

    return () => {
      clearInterval(timer)
      clearTimeout(completionTimer)
    }
  }, [])

  return (
    <div className="w-full max-w-2xl mx-auto py-12 px-6">
      <div className="text-center space-y-8">
        <div className="space-y-3">
          <h3 className="text-2xl font-semibold text-navy">
            Evaluating Your Profile
          </h3>
          <p className="text-gray-600">
            We're analyzing your information to provide the best counseling match
          </p>
        </div>

        <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
          <div
            className="bg-gradient-to-r from-gold to-navy h-full transition-all duration-300 ease-out rounded-full"
            style={{ width: `${progress}%` }}
          />
        </div>

        <div className="flex justify-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gold"></div>
        </div>
      </div>
    </div>
  )
}
