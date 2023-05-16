import { useEffect, useState } from "react"

import DarkTheme from "../constants/dark-theme"
import Theme from "../constants/theme"
import { useDarkMode } from "./useDarkMode"

const useGetTheme = () => {
  const { isDarkMode } = useDarkMode()
  const [theme, setTheme] = useState(isDarkMode ? DarkTheme : Theme)

  useEffect(() => {
    setTheme(isDarkMode ? DarkTheme : Theme)
  }, [isDarkMode])

  return { theme }
}

export default useGetTheme
