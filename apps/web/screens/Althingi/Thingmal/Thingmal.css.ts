import { style } from '@vanilla-extract/css'

import { themeUtils } from '@island.is/island-ui/theme'

export const mobileFilter = style({
  ...themeUtils.responsiveStyle({
    sm: {
      visibility: 'hidden',
    },
  }),
})
