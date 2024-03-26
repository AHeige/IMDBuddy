import React, { useContext } from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import { FeedbackContext, FeedbackProvider } from './FeedbackContext'

const MockConsumerComponent: React.FC = () => {
  const { successMessage, setSuccessMessage, errorMessage, setErrorMessage } =
    useContext(FeedbackContext)!
  return (
    <div>
      <p data-testid='success'>{successMessage}</p>
      <p data-testid='error'>{errorMessage}</p>
      <button
        onClick={() => setSuccessMessage('Success!')}
        data-testid='set-success'
      >
        Set Success
      </button>
      <button onClick={() => setErrorMessage('Error!')} data-testid='set-error'>
        Set Error
      </button>
    </div>
  )
}

describe('FeedbackProvider', () => {
  test('provides context', () => {
    render(
      <FeedbackProvider>
        <MockConsumerComponent />
      </FeedbackProvider>
    )

    expect(screen.getByTestId('success').textContent).toBe('')
    expect(screen.getByTestId('error').textContent).toBe('')

    const setSuccessButton = screen.getByTestId('set-success')
    const setErrorButton = screen.getByTestId('set-error')
    fireEvent.click(setSuccessButton)
    fireEvent.click(setErrorButton)

    expect(screen.getByTestId('success').textContent).toBe('Success!')
    expect(screen.getByTestId('error').textContent).toBe('Error!')
  })
})
