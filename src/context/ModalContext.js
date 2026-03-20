import { createContext, useContext, useState } from 'react'

const ModalContext = createContext()

export function ModalProvider({ children }) {
  const [resumeOpen, setResumeOpen] = useState(false)
  const [connectOpen, setConnectOpen] = useState(false)

  return (
    <ModalContext.Provider value={{
      resumeOpen, setResumeOpen,
      connectOpen, setConnectOpen,
    }}>
      {children}
    </ModalContext.Provider>
  )
}

export function useModals() {
  return useContext(ModalContext)
}
