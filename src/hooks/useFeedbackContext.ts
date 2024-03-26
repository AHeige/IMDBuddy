import { useContext } from 'react'
import { FeedbackContext } from '../contexts/FeedbackContext/FeedbackContext'

export const useFeedbackContext = () => {
  const context = useContext(FeedbackContext)
  if (!context) {
    throw new Error('useFeedback must be used within a FeedbackProvider')
  }
  return context
}
