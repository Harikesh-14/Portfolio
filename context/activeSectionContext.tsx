"use client";

import React, { useState, createContext } from 'react'

import { links } from '@/lib/data'

type SectionActive = typeof links[number]['name']

type ActiveSectionContextType = {
  activeSection: SectionActive
  setActiveSection: React.Dispatch<React.SetStateAction<SectionActive>>
}

export const ActiveSectionContext = createContext<ActiveSectionContextType | null>(null)

function ActiveSectionContextProvider({ children }: { children: React.ReactNode }) {
  const [activeSection, setActiveSection] = useState<SectionActive>('Home')
  return (
    <ActiveSectionContext.Provider value={{activeSection, setActiveSection}}>
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