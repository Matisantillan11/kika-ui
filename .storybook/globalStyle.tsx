import React, { ReactNode } from "react"

import { GlobalStyles } from "../src/packages/components/globalStyles/globalStyle.component"
import { ThemeProvider } from "styled-components"
import useGetTheme from "../src/hooks/useGetTheme"



interface Props {
  children: ReactNode
}

export const withGlobalStyles = (storyFn: () => ReactNode) => {
  // const {isDarkMode} = useDarkMode()
  const {theme} = useGetTheme()
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      {storyFn()}
    </ThemeProvider>
  )
}
