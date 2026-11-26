import type { ComponentType } from 'react'
import { Stepper, StepperProps, Step, StepProps, StepLabel, StepLabelProps } from '@mui/material'
import { styled } from '@mui/material/styles'

export const StyledStepper: ComponentType<StepperProps> = styled(Stepper)(({ theme }) => ({
  marginBottom: theme.spacing(4),
}))

export const StyledStep: ComponentType<StepProps> = styled(Step)({})
export const StyledStepLabel: ComponentType<StepLabelProps> = styled(StepLabel)({})
