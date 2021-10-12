import { Container, Typography, TypographyProps } from '@mui/material'
import { styled } from '@mui/system'

type DividerColor = 'primary' | 'secondary'
type DividerSize = 'sm' | 'md' | 'lg'

enum DividerHeights {
  sm = 2,
  md = 3,
  lg = 4
}

enum DividerWidths {
  sm = 30,
  md = 40,
  lg = 50
}

interface ITypographyWithDividerProps extends TypographyProps {
  dividerSize?: DividerSize
  dividerColor?: DividerColor
}

function StyledComponents() {
  const TypographyWithDivider = styled(Typography, {
    shouldForwardProp: (prop) =>
      prop !== 'dividerSize' && prop !== 'dividerColor'
  })<ITypographyWithDividerProps>(
    ({ dividerSize = 'md', dividerColor = 'primary', theme }) => ({
      '&::after': {
        content: '" "',
        display: 'block',
        width: `${DividerWidths[dividerSize]}px`,
        height: `${DividerHeights[dividerSize]}px`,
        margin: `${theme.spacing(2)} 0`,
        backgroundColor: theme.palette[dividerColor].main
      }
    })
  )

  const PageTitle = ({
    variant = 'h2',
    dividerSize,
    dividerColor,
    children
  }: ITypographyWithDividerProps) => (
    <TypographyWithDivider
      variant={variant}
      dividerSize={dividerSize}
      dividerColor={dividerColor}
    >
      {children}
    </TypographyWithDivider>
  )

  return (
    <Container maxWidth={false} sx={{ p: 3 }}>
      <PageTitle dividerColor='secondary' dividerSize='lg'>
        Styled Components
      </PageTitle>
    </Container>
  )
}
export default StyledComponents
