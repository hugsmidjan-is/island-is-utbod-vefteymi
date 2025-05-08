import React from 'react'
import cn from 'classnames'
import { useRouter } from 'next/router'

import {
  Box,
  Button,
  Hidden,
  Icon,
  Link,
  ResponsiveSpace,
  Text,
  TextProps,
} from '@island.is/island-ui/core'
import { theme } from '@island.is/island-ui/theme'
import { useWindowSize } from '@island.is/web/hooks/useViewport'
import { paths } from '@island.is/web/utils/mockData'

import * as styles from './DefaultHeader.css'

export interface DefaultHeaderProps {
  fullWidth?: boolean
  image?: string
  background?: string
  mobileBackground?: string | null
  title: string
  underTitle?: string
  titleSectionPaddingLeft?: ResponsiveSpace
  logo?: string
  logoHref?: string
  titleColor?: TextProps['color']
  customTitleColor?: string
  imagePadding?: string
  imageIsFullHeight?: boolean
  imageObjectFit?: 'contain' | 'cover'
  imageObjectPosition?: 'left' | 'center' | 'right'
  className?: string
  titleClassName?: string
  logoImageClassName?: string
  logoAltText?: string
  isSubpage?: boolean
}

export const DefaultHeader: React.FC<
  React.PropsWithChildren<DefaultHeaderProps>
> = ({
  fullWidth,
  image,
  background,
  mobileBackground,
  logo,
  logoHref,
  imagePadding = '20px',
  imageObjectFit = 'contain',
  imageObjectPosition = 'center',
  className,
  logoImageClassName,
  logoAltText,
  isSubpage,
}) => {
  const { width } = useWindowSize()
  const imageProvided = !!image
  const logoProvided = !!logo
  const LinkWrapper = logoHref ? Link : Box

  const isMobile = width < theme.breakpoints.lg
  const router = useRouter()
  const EN = router.asPath.includes('/en')
  return (
    <>
      {logoProvided && (
        <div
          className={cn(styles.contentContainer, {
            [styles.contentContainerSubpage]: isSubpage,
          })}
        >
          <div className={styles.innerContentContainer}>
            <Box
              className={cn(styles.logoContainer, {
                [styles.logoContainerSubpage]: isSubpage,
              })}
              borderRadius="full"
              background="white"
              display={'flex'}
              justifyContent={['spaceBetween', 'spaceBetween', 'flexStart']}
            >
              <Box
                display="flex"
                flexDirection="row"
                alignItems="center"
                justifyContent={['spaceBetween', 'spaceBetween', 'flexStart']}
                width="full"
              >
                <LinkWrapper href={logoHref as string}>
                  <img
                    className={
                      logoImageClassName ? logoImageClassName : styles.logo
                    }
                    src={logo}
                    alt={logoAltText}
                  />
                </LinkWrapper>
                <Hidden below="md">
                  <Box display="flex" alignItems={'center'}>
                    <Box marginRight={3} marginLeft={4}>
                      <Link href={paths.home}>
                        <Text
                          fontWeight="medium"
                          variant={isMobile ? 'medium' : 'default'}
                          color={
                            router.asPath === paths.home ? 'blue400' : undefined
                          }
                        >
                          {EN ? 'Frontpage' : 'Forsíða'}
                        </Text>
                      </Link>
                    </Box>
                    <Box marginX={3}>
                      <Link href={paths.thingstorf}>
                        <Text
                          fontWeight="medium"
                          variant={isMobile ? 'medium' : 'default'}
                          color={
                            router.asPath.includes(paths.thingstorf)
                              ? 'blue400'
                              : undefined
                          }
                        >
                          {EN ? 'Duties' : 'Þingstörf'}
                        </Text>
                      </Link>
                    </Box>
                    <Box marginX={3}>
                      <Link href={paths.thingmennLanding}>
                        <Text
                          variant={isMobile ? 'medium' : 'default'}
                          fontWeight="medium"
                          color={
                            router.asPath.includes('thingmenn')
                              ? 'blue400'
                              : undefined
                          }
                        >
                          {EN ? 'Members' : 'Þingmenn'}
                        </Text>
                      </Link>
                    </Box>
                    <Box marginX={3}>
                      <Link href={paths.umAlthingi}>
                        <Text
                          variant={isMobile ? 'medium' : 'default'}
                          fontWeight="medium"
                          color={
                            router.asPath.includes(paths.umAlthingi)
                              ? 'blue400'
                              : undefined
                          }
                        >
                          {EN ? 'About' : 'Um Alþingi'}
                        </Text>
                      </Link>
                    </Box>
                    <Box marginX={3}>
                      <Link href={paths.home}>
                        <Text
                          variant={isMobile ? 'medium' : 'default'}
                          fontWeight="medium"
                        >
                          {EN ? 'The Legislative Archive' : 'Lagasafn'}
                        </Text>
                      </Link>
                    </Box>
                  </Box>
                </Hidden>
                <Hidden above="sm" inline>
                  <Box
                    width="full"
                    display="flex"
                    marginRight={2}
                    alignItems="center"
                    justifyContent="flexStart"
                  >
                    <Text variant="eyebrow">Valmynd Alþingis</Text>

                    <Box
                      onClick={() => console.log('hi')}
                      display="flex"
                      alignItems={'center'}
                      marginLeft={1}
                    >
                      <Icon icon="chevronDown" size="small" color="blue400" />
                    </Box>
                  </Box>
                </Hidden>
              </Box>
              <Hidden below="md">
                <Box marginRight={3}>
                  <Button variant="utility" icon="chevronDown">
                    {EN ? 'Login' : 'Innskráning'}
                  </Button>
                </Box>
              </Hidden>
            </Box>
          </div>
        </div>
      )}
      <div
        className={cn({ [styles.gridContainerWidth]: !fullWidth })}
        style={{
          background:
            isMobile || isSubpage ? mobileBackground || background : background,
          //background: 'linearGradient(180deg, #3D6BA2 0%, #315584 100%))',
        }}
      >
        <div
          className={cn(
            {
              [styles.gridContainer]: !className,
              [styles.gridContainerSubpage]: isSubpage,
            },
            className,
          )}
        >
          <div
            className={cn(styles.textContainer, {
              [styles.textContainerSubpage]: isSubpage,
            })}
            style={
              !logoProvided
                ? {
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                  }
                : {}
            }
          >
            <div
              className={cn(styles.textInnerContainer, {
                [styles.textInnerContainerSubpage]: isSubpage,
              })}
            >
              {/* {logoProvided && (
                <Hidden above="md">
                  <LinkWrapper href={logoHref as string}>
                    <Box
                      className={cn(styles.logoContainerMobile, {
                        [styles.logoContainerMobileSubpage]: isSubpage,
                      })}
                      borderRadius="full"
                      background="white"
                    >
                      <img
                        className={
                          isSubpage
                            ? styles.logoSubpage
                            : logoImageClassName
                            ? logoImageClassName
                            : styles.logo
                        }
                        src={logo}
                        alt={logoAltText}
                      />
                    </Box>
                  </LinkWrapper>
                </Hidden>
              )} */}
              {/* {!isSubpage && (
                <Box
                  className={cn(styles.title, titleClassName)}
                  paddingLeft={
                    !isMobile ? titleSectionPaddingLeft : isSubpage ? 2 : 0
                  }
                >
                  <Text
                    variant={isSubpage && isMobile ? 'h4' : 'h2'}
                    as="h1"
                    color={!customTitleColor ? titleColor : undefined}
                  >
                    <span style={{ color: customTitleColor }}>{title}</span>
                  </Text>
                  {underTitle && (
                    <Text
                      fontWeight="regular"
                      color={!customTitleColor ? titleColor : undefined}
                    >
                      <span style={{ color: customTitleColor }}>
                        {underTitle}
                      </span>
                    </Text>
                  )}
                </Box>
              )} */}
            </div>
          </div>
          {imageProvided && !isSubpage && (
            <Box display={'flex'} alignItems={'flexEnd'}>
              <Hidden below="lg">
                <img
                  style={{
                    padding: imagePadding,
                    paddingBottom: 0,
                    objectFit: imageObjectFit,
                    objectPosition: imageObjectPosition,
                  }}
                  className={styles.headerImage}
                  src={image}
                  alt=""
                />
              </Hidden>
            </Box>
          )}
        </div>
      </div>
    </>
  )
}
