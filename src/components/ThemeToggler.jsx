"use client"
import React, { useState, useEffect } from "react"
import { useTheme } from "next-themes"
import { IoSunnyOutline, IoMoonOutline } from "react-icons/io5"


const ThemeSwitcher = () => {
  const [mounted, setMounted] = useState(false)
  const { resolvedTheme, setTheme } = useTheme()

  // helper function toggle theme
  const toggleTheme = () => {
    setTheme(resolvedTheme === "light" ? "dark" : "light")
    // setIsActive((current) => !current)
  }

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <button
      onClick={toggleTheme}
      className="flex items-center gap-2 w-8 h-8 justify-center rounded-full transition-all duration-200 border border-stone-300 dark:border-stone-700"
    >
      {resolvedTheme === "light" ? (
        <IoSunnyOutline size={18} />
      ) : (
        <IoMoonOutline size={18} />
      )}
    </button>
  )
}

export default ThemeSwitcher
