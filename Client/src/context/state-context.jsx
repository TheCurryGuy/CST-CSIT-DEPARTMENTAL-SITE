"use client"

import { createContext, useContext, useEffect, useState } from "react"

// Create the context
const StateContext = createContext(undefined)

// Create the provider component
export function StateProvider({ children }) {
  // Initialize state
  const [isDarkMode, setIsDarkMode] = useState(false)

  // Toggle dark mode function
  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => !prevMode)
  }

  // Apply dark mode class to document
  useEffect(() => {
    // On initial load, check for system preference or saved preference
    const savedTheme = localStorage.getItem("theme")
    if (savedTheme === "dark" || (!savedTheme && window.matchMedia("(prefers-color-scheme: dark)").matches)) {
      setIsDarkMode(true)
    }
  }, [])

  // Update document class and localStorage when isDarkMode changes
  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDarkMode)
    localStorage.setItem("theme", isDarkMode ? "dark" : "light")
  }, [isDarkMode])

  // Create the value object to be provided
  const value = {
    isDarkMode,
    toggleDarkMode,
  }

  return <StateContext.Provider value={value}>{children}</StateContext.Provider>
}

// Custom hook to use the state context
export function useStateContext() {
  const context = useContext(StateContext)
  if (context === undefined) {
    throw new Error("useStateContext must be used within a StateProvider")
  }
  return context
}

