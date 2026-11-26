import type { ComponentType } from 'react'
import { TableContainer, TableContainerProps, Box, BoxProps } from '@mui/material'
import { styled } from '@mui/material/styles'

const ICON_MARGIN = 8

export const TableContainerWrapper: ComponentType<TableContainerProps> = styled(TableContainer)(({ theme }) => ({
  width: '100%',
  border: `1px solid ${theme.palette.divider}`,
  borderRadius: theme.shape.borderRadius,
  overflow: 'hidden'
}))

export const HeaderContainer: ComponentType<BoxProps> = styled(Box)(({ theme }) => ({
  padding: theme.spacing(2),
  borderBottom: `1px solid ${theme.palette.divider}`,
  backgroundColor: theme.palette.action.hover
}))

export const MenuIconWrapper: ComponentType<BoxProps> = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  marginRight: ICON_MARGIN
})
