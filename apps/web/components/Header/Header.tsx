/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { FC, useContext } from 'react'
import { useRouter } from 'next/router'

import {
  Box,
  Button,
  ButtonTypes,
  ColorSchemeContext,
  Column,
  Columns,
  FocusableBox,
  GridColumn,
  GridContainer,
  GridRow,
  Hidden,
  Logo,
  ResponsiveSpace,
} from '@island.is/island-ui/core'
import { FixedNav, SearchInput } from '@island.is/web/components'
import { LayoutProps } from '@island.is/web/layouts/main'
import { paths } from '@island.is/web/utils/mockData'

interface HeaderProps {
  showSearchInHeader?: boolean
  buttonColorScheme?: ButtonTypes['colorScheme']
  languageToggleQueryParams?: LayoutProps['languageToggleQueryParams']
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore make web strict
  megaMenuData
  organizationSearchFilter?: string
  searchPlaceholder?: string
  customTopLoginButtonItem?: LayoutProps['customTopLoginButtonItem']
  loginButtonType?: 'dropdown' | 'link'
}

const marginLeft = [1, 1, 1, 2] as ResponsiveSpace

export const Header: FC<React.PropsWithChildren<HeaderProps>> = ({
  showSearchInHeader = true,
  buttonColorScheme = 'default',
  megaMenuData,
  languageToggleQueryParams,
  organizationSearchFilter,
  searchPlaceholder,
  customTopLoginButtonItem,
  loginButtonType = 'dropdown',
  children,
}) => {
  const { colorScheme } = useContext(ColorSchemeContext)
  const router = useRouter()
  const locale = 'is'
  const english = false
  const isWhite = colorScheme === 'white'
  const EN = router.asPath.includes('/en')

  return (
    <header>
      <Hidden print={true}>
        <FixedNav />
        <GridContainer>
          <GridRow>
            <GridColumn span="12/12" paddingTop={4} paddingBottom={4}>
              <Columns alignY="center" space={2}>
                <Column width="content">
                  <FocusableBox
                    href={english ? '/en' : '/'}
                    data-testid="link-back-home"
                  >
                    <Hidden above="md">
                      <Logo
                        id="header-logo-icon"
                        width={40}
                        iconOnly
                        solid={isWhite}
                      />
                    </Hidden>
                    <Hidden below="lg">
                      <Logo id="header-logo" width={160} solid={isWhite} />
                    </Hidden>
                  </FocusableBox>
                </Column>
                <Column>
                  <Box
                    display="flex"
                    alignItems="center"
                    justifyContent="flexEnd"
                    width="full"
                  >
                    {showSearchInHeader && (
                      <Box
                        role="search"
                        display={['none', 'none', 'none', 'block']}
                      >
                        <SearchInput
                          id="search_input_header"
                          size="medium"
                          activeLocale={locale}
                          placeholder={EN ? 'Search' : searchPlaceholder}
                          autocomplete={true}
                          autosuggest={true}
                          organization={organizationSearchFilter}
                        />
                      </Box>
                    )}

                    <Box marginLeft={marginLeft}>
                      <Button variant="utility" icon="person">
                        {EN ? 'My pages' : 'Mínar síður'}
                      </Button>
                    </Box>

                    <Box
                      marginLeft={marginLeft}
                      display={['none', 'none', 'none', 'block']}
                    >
                      <Button
                        variant="utility"
                        onClick={() => router.push(paths.umAlthingiEN)}
                      >
                        EN
                      </Button>
                    </Box>
                    <Box marginLeft={marginLeft}>
                      <Button
                        variant="utility"
                        icon="menu"
                        colorScheme={buttonColorScheme}
                        data-testid="frontpage-burger-button"
                        onClick={() => console.log('Menu button clicked')}
                      >
                        {EN ? 'Menu' : 'Valmynd'}
                      </Button>
                    </Box>
                  </Box>
                </Column>
              </Columns>
            </GridColumn>
          </GridRow>
        </GridContainer>
      </Hidden>
      {children}
    </header>
  )
}

export default Header
