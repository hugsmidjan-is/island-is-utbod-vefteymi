import { style } from '@vanilla-extract/css'

import { theme, themeUtils } from '@island.is/island-ui/theme'

export const grid = style({
  display: 'grid',
  gap: theme.spacing[2],
  ...themeUtils.responsiveStyle({
    md: {
      gap: theme.spacing[3],
    },
  }),
  justifyContent: 'stretch',
  gridTemplateColumns: '1fr 1fr',
})
