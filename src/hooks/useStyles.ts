import { useTheme } from '@mui/material'

/**
 * IUseStyles
 * @description utility for including style mixins
 */

function useStyles(): Record<string, any> {
  const theme = useTheme()

  const fixed = {
    position: 'fixed',
    zIndex: theme.zIndex.appBar,
    left: 0
  }

  const fixedTop = {
    ...fixed,
    top: 0
  }

  const fixedBottom = {
    ...fixed,
    bottom: 0
  }

  const center = {
    top: '50%',
    left: '50%',
    transform: 'translate(-50%,-50%)'
  }

  const centerX = {
    left: '50%',
    transform: 'translateX(-50%)'
  }

  const centerY = {
    top: '50%',
    transform: 'translate&(-50%)'
  }

  const fixedCenter = {
    ...fixed,
    ...center
  }

  const buttonReset = {
    backgroundColor: 'transparent',
    color: theme.palette.gray1.main,
    textTransform: 'capitalize',
    fontSize: theme.typography.body1.fontSize,
    ':hover': {
      backgroundColor: 'transparent',
      color: theme.palette.common.black
    }
  }

  return {
    theme,
    fixed,
    fixedTop,
    fixedBottom,
    fixedCenter,
    center,
    centerX,
    centerY,
    buttonReset
  }
}

export default useStyles
