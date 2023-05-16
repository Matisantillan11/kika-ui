import type { Preview } from "@storybook/react";
import { withGlobalStyles } from "./globalStyle";

const preview: Preview = {
  parameters: {
    decorator: [withGlobalStyles],
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
