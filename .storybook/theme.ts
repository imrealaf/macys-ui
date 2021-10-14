import { create } from '@storybook/theming'
import * as themes from './themes'

const theme = themes[process.env.STORYBOOK_THEME]

export default create(theme)
