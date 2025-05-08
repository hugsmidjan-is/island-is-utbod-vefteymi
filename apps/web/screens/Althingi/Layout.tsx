import React from 'react'
import { useWindowSize } from 'react-use'
import NextLink from 'next/link'
import { useRouter } from 'next/router'

import {
  Box,
  BreadCrumbItem,
  Breadcrumbs,
  Button,
  GridColumn,
  GridContainer,
  GridRow,
  Inline,
  Link,
  Navigation,
  NavigationItem,
  ProfileCard,
  Stack,
  Text,
} from '@island.is/island-ui/core'
import { theme } from '@island.is/island-ui/theme'
import {
  DefaultHeader,
  HeadWithSocialSharing,
  OrganizationFooter,
  Webreader,
} from '@island.is/web/components'

import { OrganizationMock, paths } from '../../utils/mockData'
import SidebarLayout from '../Layouts/SidebarLayout'
interface LayoutProps {
  title: string
  children: React.ReactNode
  mainLayout?: React.ReactNode
  sidebar?: React.ReactNode
  breadcrumbs?: BreadCrumbItem[]
}

const Layout: React.FC<LayoutProps> = ({
  title,
  children,
  mainLayout,
  breadcrumbs,
  sidebar,
}) => {
  const router = useRouter()
  const { width } = useWindowSize()
  const isMobile = width < theme.breakpoints.md
  const EN = router.asPath.includes('/en')

  const defaultItems = [
    {
      title: 'Þingstörf',
      href: paths.thingstorf,
      active: router.pathname === paths.thingstorf,
      items: [
        {
          title: 'Þingfundir og ræður',
          href: paths.thingfundir,
          active: router.pathname === paths.thingfundir,
        },
        {
          title: 'Þingmál',
          href: paths.thingmal,
          active: router.pathname === paths.thingmal,
        },
        { title: 'Nefndir' },
        { title: 'Mál í umsagnarferli' },
        { title: 'Tilkynningar um þingstörf' },
        { title: 'Samantektir' },
      ],
    },
    {
      title: 'Þingmenn',
      href: paths.thingmenn,
      active: router.pathname === paths.thingmenn,
      items: [
        { title: 'Alþingismenn', active: true },
        { title: 'Aðstoðarmenn' },
        { title: 'Ríkisstjórn' },
        { title: 'Forsetar Alþingis' },
        { title: 'Þingflokkar' },
        { title: 'Tilkynningar' },
        { title: 'Hagsmunir og starfskjör' },
        { title: 'Alþingismannatal' },
        { title: 'Sögulegur fróðleikur' },
        { title: 'Þingtímabil og kosningar' },
      ],
    },
    {
      title: 'Um Alþingi',
      href: paths.home,
      active: router.pathname === paths.umAlthingi,
    },
    {
      title: 'Lagasafn',
      href: paths.home,
    },
  ]

  const defaultSubItems = [
    { title: 'Lagafrumvörp', href: '/link1' },
    { title: 'Umsagnagátt', href: '/link2' },
    { title: 'Handbækur', href: paths.utgefidEfni },
  ]

  const sidebarContent = (
    <GridContainer>
      <GridRow>
        <GridColumn
          span={['9/9', '9/9', sidebar ? '8/9' : '7/9']}
          offset={['0', '0', sidebar ? '1/9' : '0']}
        >
          <Stack space={3}>
            <Box display="flex" justifyContent="spaceBetween">
              <Breadcrumbs
                items={[
                  {
                    title: 'Ísland.is',
                    href: '/',
                  },
                  {
                    title: 'Alþingi',
                    href: paths.home,
                    isCurrentPage: true,
                  },
                  ...(breadcrumbs || []),
                ]}
              />
              {router.pathname === paths.home && (
                <Inline space={2}>
                  <Button
                    variant="ghost"
                    icon="open"
                    iconType="outline"
                    size="medium"
                    onClick={() => router.push(paths.thingmal)}
                  >
                    Umsagnagátt
                  </Button>
                  <Button
                    icon="open"
                    iconType="outline"
                    size="medium"
                    onClick={() => router.push(paths.thingmal)}
                  >
                    Lagasafn
                  </Button>
                </Inline>
              )}
            </Box>
            <Box className="rs_read">
              <Webreader
                marginTop={0}
                marginBottom={0}
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-ignore make web strict
                readId={null}
                readClass="rs_read"
              />
              {children}
            </Box>
          </Stack>
        </GridColumn>
      </GridRow>
    </GridContainer>
  )
  return (
    <>
      <HeadWithSocialSharing
        title={title}
        description={'Alþingi - vefsíða'}
        imageUrl={'https://www.althingi.is/skin/basic9k/i/sitelogo-new.svg'}
        imageContentType={'svg'}
        imageWidth={'300'}
        imageHeight={'300'}
      ></HeadWithSocialSharing>
      <Box>
        <DefaultHeader
          title={'Alþingi'}
          titleColor="white"
          image={'/assets/althingi-new-logo.svg'}
          background="linear-gradient(180deg, #3D6BA2 0%, #315584 100%);"
          imagePadding="20px"
          logoHref="/s/althingi"
          isSubpage={isMobile ? true : router.pathname !== paths.home}
          logo="https://www.althingi.is/skin/basic9k/i/sitelogo-new.svg"
        />
      </Box>
      {sidebar && (
        <SidebarLayout
          paddingTop={[2, 2, 9]}
          paddingBottom={[6, 6, 9]}
          isSticky={false}
          fullWidthContent={true}
          sidebarContent={sidebar}
        >
          {isMobile && !sidebar && (
            <Box position="relative" zIndex={90}>
              <Box marginY={2}>
                <Navigation
                  baseId="pageNavMobile"
                  isMenuDialog={true}
                  items={defaultItems}
                  title={'Efnisyfirlit'}
                  activeItemTitle={
                    defaultItems.find((item) => item.href === router.pathname)
                      ?.title
                  }
                  renderLink={(link, item) => {
                    return item?.href ? (
                      <NextLink href={item?.href} legacyBehavior>
                        {link}
                      </NextLink>
                    ) : (
                      link
                    )
                  }}
                />
              </Box>

              <Box marginY={2}>
                <Navigation
                  baseId="secondaryNav"
                  colorScheme="purple"
                  isMenuDialog={true}
                  title={'Tengt efni'}
                  items={defaultSubItems}
                  renderLink={(link, item) => {
                    return item?.href ? (
                      <NextLink href={item?.href} legacyBehavior>
                        {link}
                      </NextLink>
                    ) : (
                      link
                    )
                  }}
                />
              </Box>
            </Box>
          )}

          {/* {isMobile && sidebarContent} */}
          {sidebar && <Box>{sidebarContent}</Box>}
        </SidebarLayout>
      )}
      {!sidebar && (
        <Box marginTop={12} marginBottom={8}>
          {sidebarContent}
        </Box>
      )}
      {mainLayout}

      <Box className="rs_read" marginTop="auto">
        <OrganizationFooter
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore make web strict
          organizations={[OrganizationMock]}
          force={true}
        />
      </Box>
    </>
  )
}

export default Layout
