import React from 'react'
import { useWindowSize } from 'react-use'
import NextLink from 'next/link'
import { useRouter } from 'next/router'

import {
  Box,
  Breadcrumbs,
  Button,
  GridColumn,
  GridContainer,
  GridRow,
  InfoCardGrid,
  Link,
  LinkV2,
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

import { mockInfoCards, OrganizationMock } from '../../utils/mockData'
import SidebarLayout from '../Layouts/SidebarLayout'

interface LayoutProps {
  title: string
  children: React.ReactNode
}

const Layout: React.FC<LayoutProps> = ({ title, children }) => {
  const router = useRouter()
  const { width } = useWindowSize()
  const isMobile = width < theme.breakpoints.sm

  const SecondaryMenu = ({
    title,
    items,
  }: {
    title: string
    items: NavigationItem[]
  }) => (
    <Box
      background="purple100"
      borderRadius="large"
      padding={[3, 3, 4]}
      marginY={3}
    >
      <Stack space={[1, 1, 2]}>
        <Text variant="eyebrow" as="h2">
          {title}
        </Text>
        {items.map((link) => (
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore make web strict
          <Link key={link.href} href={link.href} underline="normal">
            <Text
              key={link.href}
              as="span"
              variant={link.active ? 'h5' : 'default'}
            >
              {link.title}
            </Text>
          </Link>
        ))}
      </Stack>
    </Box>
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
          title={title}
          titleColor="white"
          image={'/assets/althingi.svg'}
          background="#174C97"
          isSubpage={false}
          logo="https://www.althingi.is/skin/basic9k/i/sitelogo-new.svg"
        />
      </Box>
      <SidebarLayout
        paddingTop={[2, 2, 9]}
        paddingBottom={[6, 6, 9]}
        isSticky={false}
        fullWidthContent={true}
        sidebarContent={
          <Box>
            <Stack space={3}>
              <Navigation
                baseId="pageNav"
                items={[
                  {
                    title: 'Þingfundir og mál',
                    href: '/s/althingi',
                    active: router.pathname === '/s/althingi',
                  },
                  {
                    title: 'Þingmenn',
                    href: '/s/althingi/thingmenn',
                    items: [{ title: 'Alþingismenn' }],
                  },
                  {
                    title: 'Nefndir',
                    href: '/s/althingi',
                  },
                  {
                    title: 'Alþjóðastarf',
                    href: '/s/althingi',
                  },
                  {
                    title: 'Lagasafn',
                    href: '/s/althingi',
                  },
                  {
                    title: 'Ályktanir Alþingis',
                    href: '/s/althingi',
                  },
                  {
                    title: 'Um Alþingi',
                    href: '/s/althingi',
                  },
                  {
                    title: 'Þingmál',
                    href: '/s/althingi/thingmal',
                    active: router.pathname === '/s/althingi/thingmal',
                    items: [{ title: 'Alþingismál' }],
                  },
                ]}
                title="Efnisyfirlit"
                activeItemTitle="ACTIVE TITLE"
              />
            </Stack>

            <>
              <SecondaryMenu
                title={'Tengt efni'}
                items={[
                  { title: 'Lagafrumvörp', href: '/link1' },
                  { title: 'Link 2', href: '/link2' },
                ]}
              />

              <ProfileCard
                key={'card.id'}
                title={'card.title'}
                description={'card.contentString'}
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-ignore make web strict
                link={'https://althingi.is'}
                image={
                  'https://www.althingi.is/skin/basic9k/i/sitelogo-new.svg'
                }
                size="default"
              />
            </>
          </Box>
        }
      >
        {isMobile && (
          <Box position="relative" zIndex={90}>
            <Box marginY={2}>
              <Navigation
                baseId="pageNavMobile"
                isMenuDialog={true}
                items={[{ title: 'Link 1', href: '/link1' }]}
                title={'Efnisyfirlit'}
                activeItemTitle={'Valið efni'}
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
                items={[
                  { title: 'Link 1', href: '/link1' },
                  { title: 'Link 2', href: '/link2' },
                ]}
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

        {/* <GridContainer>
          <GridRow>
            <GridColumn span={'9/9'} offset={'0'}>
              {showExternalLinks && (
                <OrganizationExternalLinks
                  organizationPage={organizationPage}
                  showOnMobile={false}
                />
              )}
              {breadcrumbItems && (
                <Breadcrumbs
                  items={breadcrumbItems ?? []}
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
              )}

              {showReadSpeaker && (
                <Webreader
                  marginTop={breadcrumbItems?.length ? 3 : 0}
                  marginBottom={breadcrumbItems?.length ? 0 : 3}
                  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                  // @ts-ignore make web strict
                  readId={null}
                  readClass="rs_read"
                />
              )}

              {pageDescription && (
                <Box
                  className="rs_read"
                  paddingTop={[2, 2, breadcrumbItems ? 5 : 0]}
                  paddingBottom={SLICE_SPACING}
                >
                  <Text variant="default">{pageDescription}</Text>
                </Box>
              )}
            </GridColumn>
          </GridRow>
        </GridContainer> */}

        {/* {isMobile && sidebarContent} */}

        <GridContainer>
          <GridRow>
            <GridColumn span={['9/9', '9/9', '7/9']} offset={['0', '0', '1/9']}>
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
                        href: '/s/althingi',
                        isCurrentPage: true,
                      },
                    ]}
                  />
                  <Button
                    icon="open"
                    iconType="outline"
                    size="medium"
                    onClick={() => router.push('/s/althingi/thingmal')}
                  >
                    Þingmál
                  </Button>
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

        {/* {isMobile && !isSubpage && sidebarCards.length > 0 && (
          <Box marginY={4}>
            <Stack space={3}>
              {sidebarCards.map((card) => {
                if (card.__typename === 'SidebarCard') {
                  return (
                    <ProfileCard
                      key={card.id}
                      title={card.title}
                      description={card.contentString}
                      link={card.link ?? undefined}
                      size="small"
                    />
                  )
                }

                if (card.__typename === 'ConnectedComponent') {
                  return renderConnectedComponent(card)
                }

                return null
              })}
            </Stack>
          </Box>
        )} */}
      </SidebarLayout>
      {
        <Box className="rs_read" background="blue100" width="full" padding={6}>
          {'MAIN CONTENT??'}
          <Box width="full" display={'flex'} justifyContent={'spaceBetween'}>
            <Text>{'Á döfinni'}</Text>
            <LinkV2
              href={'/s/althingi/frettir'}
              underline="small"
              underlineVisibility="hover"
              color="blue400"
            >
              {'Sjá fleiri'}
            </LinkV2>
          </Box>
          <Box>
            <InfoCardGrid
              cards={mockInfoCards}
              variant="detailed"
              cardsBorder="backgroundBrandLighter"
            />
          </Box>
        </Box>
      }
      {/* Á döfinni */}

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
