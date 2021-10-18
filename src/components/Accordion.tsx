import React from 'react'
import {
  Accordion as MuiAccordion,
  AccordionProps,
  AccordionSummary,
  AccordionDetails,
  Typography,
  TypographyProps,
  useTheme
} from '@mui/material'
import AddIcon from '@mui/icons-material/Add'
import RemoveIcon from '@mui/icons-material/Remove'

export type SummaryVariant =
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6'
  | 'body1'
  | 'body2'

export interface IAccordionProps extends AccordionProps {
  // The id to identify the item (used for accessibility)
  id: string

  // Accordion size (sm, lg)
  size: string | undefined

  // Populates title in summary component
  title: string

  // Populates subtitle in summary component
  subtitle?: string | undefined
}

/**
 * Accordion
 * @description an extension of the MUI Accordion component that adds customization and combines sub components
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
  const icon = props.expanded ? <RemoveIcon /> : <AddIcon />

  /**
   * getTitleProps
   * @param size  - the size of the accordion
   * @returns {Obejct}
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

  return (
    <MuiAccordion defaultExpanded={defaultExpanded} {...props}>
      <AccordionSummary
        id={`${id}-header`}
        aria-controls={`${id}-content`}
        expandIcon={icon}
      >
        <Typography {...getTitleProps(size)}>{title}</Typography>
        {subtitle && (
          <Typography
            variant='body2'
            color='gray'
            sx={{
              position: 'absolute',
              right: theme.spacing(5),
              top: '50%',
              transform: 'translateY(-50%)',
              width: '140px'
            }}
          >
            {subtitle}
          </Typography>
        )}
      </AccordionSummary>
      <AccordionDetails>{children}</AccordionDetails>
    </MuiAccordion>
  )
}

export default Accordion