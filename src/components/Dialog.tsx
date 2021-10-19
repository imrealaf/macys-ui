import React from 'react'
import {
  Dialog as MuiDialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  DialogProps,
  IconButton
} from '@mui/material'
import CloseIcon from '@mui/icons-material/Close'

export interface IDialogProps extends DialogProps {
  // Hides the close button if needed
  hideClose?: boolean | undefined

  // Capability to change close icon
  closeIcon: React.ReactNode

  // Adds action node content to dialog
  actions?: React.ReactNode | undefined
}

/**
 * Dialog
 * @description extends MUI Dialog component which implements DialogTitle, DialogContent, DialogActions
 * @implements <DialogTitle />, <DialogContent />, <DialogActions />
 */
function Dialog({
  title,
  actions,
  open,
  onClose,
  hideClose = false,
  closeIcon = <CloseIcon />,
  children,
  ...rest
}: IDialogProps) {
  return (
    <MuiDialog open={open} {...rest}>
      {title && (
        <DialogTitle>
          {title}
          {/* Conditionally render close button */}
          {onClose && !hideClose && (
            <IconButton
              aria-label='close'
              onClick={() => onClose({}, 'backdropClick')}
              sx={{
                position: 'absolute',
                right: 8,
                top: 8
              }}
            >
              {closeIcon}
            </IconButton>
          )}
        </DialogTitle>
      )}
      <DialogContent>{children}</DialogContent>
      {actions && <DialogActions>{actions}</DialogActions>}
    </MuiDialog>
  )
}

export default Dialog
