import React, { useState } from "react"

export const useDarkMode = () => {
  const LOCAL_STORAGE_ITEM = "isDarkMode"
  const localValue = localStorage.getItem(LOCAL_STORAGE_ITEM)
  const [isDarkMode, setIsDarkMode] = useState<boolean>(localValue !== null && localValue === "true")

  const setDarkMode = (value: boolean) => {
    setIsDarkMode(value)
    localStorage.setItem(LOCAL_STORAGE_ITEM, value.toString())
    window.location.reload()
  }

  return {
    setDarkMode,
    isDarkMode,
  }
}
