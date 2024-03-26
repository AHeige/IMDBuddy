import React, { createContext, useState, ReactNode } from 'react'

export interface FeedbackContextType {
  successMessage: string | undefined
  setSuccessMessage: (message: string | undefined) => void
  errorMessage: string | undefined
  setErrorMessage: (message: string | undefined) => void
}

export const FeedbackContext = createContext<FeedbackContextType | undefined>(
  undefined
)

interface FeedbackProviderProps {
  children?: ReactNode
}

export const FeedbackProvider: React.FC<FeedbackProviderProps> = ({
  children,
}) => {
  const [successMessage, setSuccessMessage] = useState<string>()
  const [errorMessage, setErrorMessage] = useState<string>()

  return (
    <FeedbackContext.Provider
      value={{
        successMessage,
        setSuccessMessage,
        errorMessage,
        setErrorMessage,
      }}
    >
      {children}
    </FeedbackContext.Provider>
  )
}
