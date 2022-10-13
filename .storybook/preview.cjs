import { themes } from '@storybook/theming'

import '../src/styles/global.css'

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  // Condição para deixar o preview da documentação em dark mode
  docs: {
    theme: themes.dark,
  }
}