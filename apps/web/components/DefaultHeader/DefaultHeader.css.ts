import { style } from '@vanilla-extract/css'

import { theme, themeUtils } from '@island.is/island-ui/theme'

export const gridContainer = style({
  display: 'grid',
  maxWidth: '1342px',
  margin: '0 auto',
  ...themeUtils.responsiveStyle({
    lg: {
      gridTemplateRows: '315px',
      gridTemplateColumns: '65fr 35fr',
    },
  }),
  background: 'linear-gradient(180deg, #3D6BA2 0%, #315584 100%)',
})

export const gridContainerSubpage = style({
  ...themeUtils.responsiveStyle({
    lg: {
      gridTemplateRows: 'auto',
      gridTemplateColumns: '100fr',
    },
  }),
})

export const gridContainerWidth = style({
  maxWidth: '1342px',
  margin: '0 auto',
  marginBottom: 40,
})

export const textContainer = style({
  textAlign: 'center',
  ...themeUtils.responsiveStyle({
    xs: {
      order: 1,
      minHeight: '255px',
      paddingTop: '32px',
      paddingBottom: '20px',
    },
    lg: {
      order: 0,
      display: 'grid',
      placeItems: 'left',
      textAlign: 'left',
      paddingTop: '0px',
    },
  }),
})

export const textContainerSubpage = style({
  ...themeUtils.responsiveStyle({
    xs: {
      minHeight: '90px',
      paddingLeft: '15px',
      paddingRight: '15px',
      paddingTop: '15px',
      paddingBottom: '15px',
      textAlign: 'left',
    },
    lg: {
      minHeight: '115px',
      paddingTop: '15px',
      paddingLeft: '0px',
      paddingRight: '0px',
    },
  }),
})

export const textInnerContainer = style({
  ...themeUtils.responsiveStyle({
    lg: {
      height: '100%',
      maxWidth: '100%',
      display: 'flex',
      alignItems: 'flex-end',
      paddingLeft: '60px',
      paddingRight: '16px',
      paddingBottom: '105px',
      justifyContent: 'center',
    },
  }),
})

export const textInnerContainerSubpage = style({
  ...themeUtils.responsiveStyle({
    lg: {
      paddingLeft: '288px',
      paddingBottom: '0',
      justifyContent: 'flex-start',
      alignItems: 'center',
    },
    xs: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
  }),
})

export const headerImage = style({
  width: '100%',
  maxHeight: '100%',
  display: 'flex',
  alignItems: 'flexEnd',

  ...themeUtils.responsiveStyle({
    xs: {
      order: 0,
    },
    lg: {
      order: 1,
    },
  }),
})

export const logoContainer = style({
  width: '100%',
  height: 56,
  boxShadow: '0px 4px 30px rgba(0, 97, 255, 0.08)',
  position: 'absolute',
  bottom: -100,
  zIndex: 99,
  borderRadius: 8,
  display: 'flex',
  alignItems: 'center',
  ...themeUtils.responsiveStyle({
    md: {
      height: 80,
    },
    xl: {
      left: 24,
      maxWidth: 1300,
    },
  }),
})

export const logoContainerSubpage = style({
  bottom: -3,
  ...themeUtils.responsiveStyle({
    md: {
      bottom: '-48px',
    },
    xl: {
      maxWidth: 1300,
    },
  }),
})

export const logo = style({
  width: 'auto',
  height: 36,
  marginLeft: 12,

  ...themeUtils.responsiveStyle({
    md: {
      height: '50px',
    },
    lg: {
      marginLeft: 24,
      marginTop: 12,
    },
  }),
})

export const logoSubpage = style({
  width: '30px',
  height: '30px',
})

export const contentContainer = style({
  maxWidth: '1440px',
  width: '100%',
  height: '255px',
  position: 'absolute',
  left: '50%',
  transform: 'translate(-50%, 0)',

  ...themeUtils.responsiveStyle({
    sm: {
      paddingLeft: '48px',
      paddingRight: '48px',
    },
    md: {
      paddingLeft: '96px',
      paddingRight: '96px',
    },
  }),
})

export const contentContainerSubpage = style({
  height: '115px',
  paddingLeft: 8,
  paddingRight: 8,
  ...themeUtils.responsiveStyle({
    md: {
      padding: 0,
    },
  }),
})

export const innerContentContainer = style({
  width: '100%',
  height: '100%',
  margin: '0 auto',
  position: 'relative',
  ...themeUtils.responsiveStyle({}),
})

export const logoContainerMobile = style({
  width: '136px',
  height: '136px',
  boxShadow: '0px 4px 30px rgba(0, 97, 255, 0.08)',
  display: 'grid',
  placeItems: 'center',
  margin: '0 auto',
  marginBottom: '4px',
  marginLeft: 12,
})

export const logoContainerMobileSubpage = style({
  width: '60px',
  height: '60px',
  marginBottom: '0px',
})

export const title = style({
  zIndex: 0,
})
