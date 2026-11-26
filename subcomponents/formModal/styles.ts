import type { ComponentType } from 'react'
import { Box, BoxProps, DialogContent, DialogContentProps } from '@mui/material'
import { styled } from '@mui/material/styles'

export const ModalContainer: ComponentType<BoxProps> = styled(Box)({
  width: '100%',
  display: 'flex',
  flexDirection: 'column'
})

export const ContentContainer: ComponentType<DialogContentProps> = styled(DialogContent)({
  display: 'flex',
  flexDirection: 'column'
})

export const FieldsGrid: ComponentType<BoxProps & { $columns?: number }> = styled(Box, {
  shouldForwardProp: (prop) => prop !== '$columns'
})<{ $columns?: number }>(({ theme, $columns = 2 }) => ({
  display: 'grid',
  gridTemplateColumns: `repeat(${$columns}, 1fr)`,
  gap: theme.spacing(2)
}))
