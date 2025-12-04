import { FunnelStage } from './formTracking'

export function trackFormEvent(eventName: FunnelStage, data?: Record<string, any>) {
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', eventName, data)
  }

  console.log('Form Event:', eventName, data)
}
