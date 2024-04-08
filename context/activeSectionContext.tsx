"use client";

import React, { useState, createContext } from 'react'

import type { SectionActive } from '@/lib/types';

type ActiveSectionContextType = {
  activeSection: SectionActive
  setActiveSection: React.Dispatch<React.SetStateAction<SectionActive>>
  timeOfLastClick: number,
  setTimeOfLastClick: React.Dispatch<React.SetStateAction<number>>
}

export const ActiveSectionContext = createContext<ActiveSectionContextType | null>(null)

function ActiveSectionContextProvider({ children }: { children: React.ReactNode }) {
  const [activeSection, setActiveSection] = useState<SectionActive>('Home')
  const [timeOfLastClick, setTimeOfLastClick] = useState<number>(0)

  return (
    <ActiveSectionContext.Provider value={{activeSection, setActiveSection, timeOfLastClick, setTimeOfLastClick}}>
      {children}
    </ActiveSectionContext.Provider>
  )
}

export function useActiveSectionContext() {
  const context = React.useContext(ActiveSectionContext)
  if (context === null) {
    throw new Error('useActiveSectionContext must be used within an ActiveSectionContextProvider')
  }
  return context
}

export default ActiveSectionContextProvider