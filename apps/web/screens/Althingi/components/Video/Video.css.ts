import { style } from '@vanilla-extract/css'

import { theme } from '@island.is/island-ui/theme'

export const video = style({
  width: '100%',
  height: 425,
})

export const timestamp = style({
  height: 'fit-content',
  width: 'fit-content',
  borderRadius: theme.border.radius.large,
  padding: '18px',
  backgroundColor: theme.color.dark100,
})

export const link = style({})
