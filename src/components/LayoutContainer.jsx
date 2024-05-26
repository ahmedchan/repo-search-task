"use client"
import React from 'react'
import ThemeProvider from "@/context/ThemeProvider"

const LayoutContainer = ({ children }) => {
  return (
    <ThemeProvider attribute="class">
      {children}
    </ThemeProvider>
  )
}

export default LayoutContainer