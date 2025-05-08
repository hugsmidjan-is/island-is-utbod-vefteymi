import { themeUtils } from '@island.is/island-ui/theme'
import { style } from '@vanilla-extract/css'

export const video = style({
  width: '100%',
  height: 425,
  border: 'none',
  overflow: 'hidden',
})

export const comingUpButtons = style({
  width: 'auto',
})

export const image = style({})

export const gridRow = style({
  marginTop: 120,
  ...themeUtils.responsiveStyle({
    md: {
      marginBottom: 120,
    },
  }),
})
