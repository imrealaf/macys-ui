import Theme from '../src/theme'

export const decorators = [
  (Story) => (
    <Theme variant={process.env.STORYBOOK_THEME}>
      <Story />
    </Theme>
  )
]

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/
    }
  }
}
