import React from 'react'
import {
  Accordion as MuiAccordion,
  AccordionProps,
  AccordionSummary,
  AccordionSummaryProps,
  AccordionDetails,
  Typography,
  TypographyProps,
  useTheme
} from '@mui/material'
import { styled } from '@mui/material/styles'

import PlusIcon from '../icons/PlusIcon'
import MinusIcon from '../icons/MinusIcon'

export interface IAccordionProps extends AccordionProps {
  // The id to identify the item (used mainly for accessibility)
  id: string

  // Accordion size (sm, lg)
  size: string | undefined

  // Populates title in summary component
  title: string

  // Populates subtitle in summary component
  subtitle?: string | undefined
}

/**
 * Wrapped Summary with styling
 */
const StyledAccordion = styled(MuiAccordion)<AccordionProps>(({ theme }) => ({
  ':before': {
    backgroundColor: theme.palette.gray3.main
  },
  '&.Mui-expanded': {
    margin: 0,
    '&:before': {
      opacity: 1
    }
  }
}))

/**
 * Wrapped Summary with styling
 */
const StyledSummary = styled(AccordionSummary)<AccordionSummaryProps>(() => ({
  '&.Mui-expanded': {
    minHeight: '60px'
  }
}))

/**
 * Accordion
 * @description extends MUI Accodrion component with added capability
 * @implements <AccordionSummary />, <AccordionDetails />
 */
function Accordion({
  id,
  size,
  title,
  subtitle,
  expanded,
  defaultExpanded,
  onChange,
  children
}: IAccordionProps) {
  const theme = useTheme()
  // State & handler for uncontrolled accordion
  const [isExpanded, setExpanded] = React.useState<boolean | false>(false)
  const handleChange = (event: React.SyntheticEvent, isExpanded: boolean) => {
    setExpanded(isExpanded)
  }

  // Determine if controlled
  const controlled = expanded !== undefined && onChange

  // Determine props based on controlled or not
  const props = controlled
    ? { expanded, onChange }
    : { expanded: isExpanded, onChange: handleChange }

  // Switch icon based on expanded state
  const icon = props.expanded ? <MinusIcon /> : <PlusIcon />

  /**
   * getTitleProps
   * @description return typography props for title based on size
   */
  const getTitleProps = (size: string | undefined): TypographyProps => {
    let props: TypographyProps
    switch (size) {
      default:
        props = {
          variant: 'body1',
          fontWeight: 400
        }
        break
      case 'sm':
        props = {
          variant: 'body1',
          fontWeight: 500,
          sx: {
            textTransform: 'uppercase'
          }
        }
        break
      case 'lg':
        props = {
          variant: 'h4'
        }
        break
    }
    return props
  }

  /**
   * getSubtitleProps
   * @description return typography props for subtitle based on size
   */
  const getSubtitleProps = (size: string | undefined): TypographyProps => {
    let props: TypographyProps = {
      sx: {
        position: 'absolute',
        right: theme.spacing(5),
        top: '50%',
        transform: 'translateY(-50%)',
        width: '140px'
      }
    }
    switch (size) {
      default:
        props = {
          ...props,
          variant: 'body2',
          color: 'gray'
        }
        break
    }
    return props
  }

  return (
    <StyledAccordion defaultExpanded={defaultExpanded} {...props}>
      <StyledSummary
        id={`${id}-header`}
        aria-controls={`${id}-content`}
        expandIcon={icon}
      >
        <Typography {...getTitleProps(size)}>{title}</Typography>
        {subtitle && (
          <Typography {...getSubtitleProps(size)}>{subtitle}</Typography>
        )}
      </StyledSummary>
      <AccordionDetails sx={{ pt: 0 }}>{children}</AccordionDetails>
    </StyledAccordion>
  )
}

export default Accordion
