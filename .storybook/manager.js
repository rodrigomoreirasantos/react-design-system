// Configurando o tema do storybook de light para dark

import { addons } from '@storybook/addons'
import { themes } from '@storybook/theming'

addons.setConfig({
    theme: themes.dark,
})