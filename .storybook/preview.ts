import type { Preview } from "@storybook/react";
import { withGlobalStyles } from "./globalStyle";
import { GlobalStyles } from "../src/packages/components/globalStyles/globalStyle.component";

import { withThemeFromJSXProvider } from '@storybook/addon-styling';
import Theme from "../src/constants/theme";
import { ThemeProvider } from "styled-components";
import DarkTheme from "../src/constants/dark-theme";

const decorators = [
  withThemeFromJSXProvider({
  themes: {
    light: Theme,
    dark: DarkTheme
  },
  defaultTheme: 'light',
  Provider: ThemeProvider,
  GlobalStyles,
})];

const preview: Preview = {
  parameters: {
    decorators,
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export default preview;
