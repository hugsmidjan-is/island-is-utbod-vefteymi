import { globalStyle, style } from '@vanilla-extract/css'

import { theme } from '@island.is/island-ui/theme'

export const footerBg = style({
  background: '#174C97',
  color: '#fff',
})

export const logoStyle = style({ width: 150 })

export const footerSecondRow = style({
  display: 'flex',
  minHeight: 72,
  alignItems: 'center',
})

export const footerItemFirst = style({
  '@media': {
    [`screen and (max-width: ${theme.breakpoints.lg}px)`]: {
      maxWidth: 'none',
      flexBasis: '100%',
    },
  },
})

globalStyle(`${footerBg} a, ${footerBg} a:hover, ${footerBg} * `, {
  color: `#fff !important`,
  boxShadow: 'none !important',
})

globalStyle(
  `${footerSecondRow} a, ${footerSecondRow} a:hover, ${footerSecondRow} *`,
  {
    color: '#fff !important',
    boxShadow: 'none !important',
  },
)

export const link = style({
  fontSize: '16px',
  textDecoration: 'underline',
  ':hover': {
    textDecoration: 'underline',
  },
})
