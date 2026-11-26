import type { ComponentType, HTMLAttributes } from 'react'
import { Box, BoxProps, Typography, TypographyProps, IconButton, IconButtonProps, SvgIconProps } from '@mui/material'
import { InfoOutlined } from '@mui/icons-material'

import { styled } from '@mui/material/styles'

export const GroupsWrapper: ComponentType<BoxProps> = styled(Box)(({ theme }) => ({
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(4)
}))

export const GroupContainer: ComponentType<BoxProps & { $highlight?: boolean; $isCard?: boolean }> = styled(Box)<{ $highlight?: boolean; $isCard?: boolean }>(({ theme, $highlight, $isCard }) => ({
  width: '100%',
  ...($isCard && {
    borderRadius: typeof theme.shape.borderRadius === 'number' ? theme.shape.borderRadius * 2 : theme.shape.borderRadius,
    overflow: 'hidden',
    boxShadow: '0 4px 6px -4px rgba(0, 0, 0, 0.15)',
  }),
  ...($highlight && !$isCard && {
    padding: theme.spacing(2),
    borderRadius: theme.shape.borderRadius,
    border: `1px dashed ${theme.palette.primary.main}`
  })
}))

export const GroupHeader: ComponentType<BoxProps> = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(1.5),
  padding: theme.spacing(2, 2),
  backgroundColor: `${theme.palette.primary.main}14`,
  cursor: 'pointer',
  userSelect: 'none',
}))

export const GroupHeaderLine: ComponentType<BoxProps> = styled(Box)(({ theme }) => ({
  flex: 1,
  height: 1,
  backgroundColor: theme.palette.primary.main,
}))

export const GroupHeaderTitle: ComponentType<TypographyProps> = styled(Typography)(({ theme }) => ({
  color: theme.palette.primary.main,
  fontWeight: 600,
  fontSize: '1rem',
  lineHeight: '1.25rem',
  whiteSpace: 'nowrap',
}))

export const GroupCollapseButton: ComponentType<IconButtonProps & { $collapsed?: boolean }> = styled(IconButton)<{ $collapsed?: boolean }>(({ theme, $collapsed }) => ({
  color: '#ffffff',
  backgroundColor: theme.palette.primary.main,
  padding: 4,
  transition: 'transform 0.25s ease',
  transform: $collapsed ? 'rotate(-90deg)' : 'rotate(0deg)',
  flexShrink: 0,
  '&:hover': {
    backgroundColor: theme.palette.primary.dark,
  },
  '& svg': {
    fontSize: '1rem',
  }
}))

export const GroupContent: ComponentType<BoxProps & { $isCard?: boolean }> = styled(Box)<{ $isCard?: boolean }>(({ theme, $isCard }) => ({
  ...($isCard && {
    padding: theme.spacing(3),
  })
}))

export const FieldsContainer: ComponentType<BoxProps & { $columns?: number }> = styled(Box)<{ $columns?: number }>(({ theme, $columns }) => ({
  width: '100%',
  display: 'grid',
  gap: theme.spacing(3),
  gridTemplateColumns: '1fr',
  [theme.breakpoints.up('sm')]: {
    gridTemplateColumns: $columns ? `repeat(${Math.min(2, $columns)}, 1fr)` : 'repeat(auto-fit, minmax(250px, 1fr))',
  },
  [theme.breakpoints.up('md')]: {
    gridTemplateColumns: $columns ? `repeat(${$columns}, 1fr)` : 'repeat(auto-fit, minmax(250px, 1fr))',
  }
}))

export const FieldWrapper: ComponentType<BoxProps & { $colSpan?: number; $newRow?: boolean }> = styled(Box)<{ $colSpan?: number; $newRow?: boolean }>(({ $colSpan, $newRow }) => ({
  width: '100%',
  gridColumn: $colSpan ? `span ${$colSpan}` : 'auto',
  ...($newRow && { gridColumnStart: 1 }),
}))

export const SubtitleText: ComponentType<TypographyProps & { $highlight?: boolean }> = styled(Typography)<{ $highlight?: boolean }>(({ theme, $highlight }) => ({
  fontWeight: theme.typography.fontWeightBold,
  color: $highlight ? theme.palette.primary.main : theme.palette.text.secondary,
  marginBottom: theme.spacing(2)
}))

export const SubGroupsWrapper: ComponentType<BoxProps> = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(2),
  padding: theme.spacing(3),
}))

export const SubGroupContainer: ComponentType<BoxProps & { $seamless?: boolean }> = styled(Box)<{ $seamless?: boolean }>(({ theme, $seamless }) => ({
  width: '100%',
  ...(!$seamless && {
    borderRadius: theme.shape.borderRadius,
    border: `1px solid ${theme.palette.divider}`,
    overflow: 'hidden',
  }),
}))

export const SubGroupHeader: ComponentType<BoxProps> = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(1),
  padding: theme.spacing(1.5, 2),
  backgroundColor: theme.palette.grey[50],
  cursor: 'pointer',
  userSelect: 'none',
  borderBottom: `1px solid ${theme.palette.divider}`,
}))

export const SubGroupHeaderTitle: ComponentType<TypographyProps> = styled(Typography)(({ theme }) => ({
  flex: 1,
  color: theme.palette.text.secondary,
  fontWeight: 500,
  fontSize: '0.875rem',
  lineHeight: '1.25rem',
  whiteSpace: 'nowrap',
}))

export const SubGroupCollapseButton: ComponentType<IconButtonProps & { $collapsed?: boolean }> = styled(IconButton)<{ $collapsed?: boolean }>(({ theme, $collapsed }) => ({
  color: theme.palette.primary.main,
  border: `1px solid ${theme.palette.primary.main}`,
  backgroundColor: 'transparent',
  padding: 3,
  transition: 'transform 0.25s ease',
  transform: $collapsed ? 'rotate(-90deg)' : 'rotate(0deg)',
  flexShrink: 0,
  '&:hover': {
    backgroundColor: `${theme.palette.primary.main}14`,
  },
  '& svg': {
    fontSize: '0.875rem',
  }
}))

export const SubGroupContent: ComponentType<BoxProps & { $seamless?: boolean }> = styled(Box)<{ $seamless?: boolean }>(({ theme, $seamless }) => ({
  ...(!$seamless && { padding: theme.spacing(3) }),
}))

export const TooltipLine: ComponentType<HTMLAttributes<HTMLSpanElement>> = styled('span')({ display: 'block' })

export const InfoIcon: ComponentType<SvgIconProps> = styled(InfoOutlined)(({ theme }) => ({
  fontSize: '1rem',
  marginLeft: theme.spacing(0.5),
  verticalAlign: 'middle',
  cursor: 'help',
  opacity: 0.65
}))

export const PercentAdornment: ComponentType<TypographyProps & { $hasIcon?: boolean }> = styled(Typography)<{ $hasIcon?: boolean }>(({ theme, $hasIcon }) => ({
  color: theme.palette.text.secondary,
  marginRight: $hasIcon ? theme.spacing(1) : 0
}))
