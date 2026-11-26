import type { ComponentType } from 'react'
import { Box, BoxProps, Button, ButtonProps } from '@mui/material'
import { styled } from '@mui/material/styles'

export const ActionsContainer: ComponentType<BoxProps> = styled(Box)(({ theme }) => ({
  display: 'flex',
  marginTop: 'auto',
  gap: theme.spacing(2),
  justifyContent: 'flex-end'
}))

export const ActionButton: ComponentType<ButtonProps> = styled(Button)({})
