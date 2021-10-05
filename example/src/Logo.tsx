import { useBreakpoint, AppBarHeight } from 'macys-ui'

enum LogoHeight {
  default = AppBarHeight.default - 20,
  sm = AppBarHeight.sm - 20
}

function Logo() {
  const bp = useBreakpoint()

  return (
    <img
      src='/logo.svg'
      style={{ height: `${bp.smAndUp ? LogoHeight.default : LogoHeight.sm}px` }}
      alt='logo'
    />
  )
}

export default Logo
