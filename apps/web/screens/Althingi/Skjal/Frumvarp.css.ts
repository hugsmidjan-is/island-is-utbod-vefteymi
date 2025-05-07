import { style } from '@vanilla-extract/css'

import { theme } from '@island.is/island-ui/theme'

export const dot = style({
  height: 16,
  width: 16,
  borderRadius: '50%',
  backgroundColor: theme.color.mint600,
  display: 'inline-block',
})

export const checkbox = style({
  marginBottom: 0,
})
