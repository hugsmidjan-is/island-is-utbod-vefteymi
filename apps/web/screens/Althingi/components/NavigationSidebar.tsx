import React from 'react'
import { useWindowSize } from 'react-use'
import NextLink from 'next/link'
import { useRouter } from 'next/router'

import {
  Box,
  Link,
  Navigation,
  NavigationItem,
  Stack,
  Text,
} from '@island.is/island-ui/core'
import { theme } from '@island.is/island-ui/theme'
import { paths } from '@island.is/web/utils/mockData'

interface NavigationSidebarProps {
  title?: string
  items?: NavigationItem[]
  subItems?: NavigationItem[]
}

const NavigationSidebar: React.FC<NavigationSidebarProps> = ({
  items,
  subItems,
  title,
}) => {
  const router = useRouter()
  const { width } = useWindowSize()
  const frontpage = router.asPath === paths.home
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
    { title: 'Lagafrumvörp', href: paths.thingmalLagafrumvarp },
    { title: 'Umsagnagátt', href: '/link2' },
    { title: 'Handbækur', href: paths.handbaekur },
  ]

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
    <Box>
      <Stack space={3}>
        <Navigation
          baseId="pageNav"
          items={items ?? defaultItems}
          title={title ?? 'Efnisyfirlit'}
          activeItemTitle="ACTIVE TITLE"
          expandOnActivation
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-expect-error make web strict
          renderLink={(link, { href }) => {
            return (
              <NextLink href={href} legacyBehavior>
                {link}
              </NextLink>
            )
          }}
        />
      </Stack>

      <>
        {frontpage && (
          <SecondaryMenu
            title={'Tengt efni'}
            items={subItems ?? defaultSubItems}
          />
        )}

        {/* <ProfileCard
          key={'card.id'}
          title={'Ungmennavefur Alþingis'}
          description={
            'Vefur fyrir ungt fólk á öllum aldri um Alþingi, sögu þess og dagleg störf. Hvað er svona merkilegt við það? '
          }
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore make web strict
          link={'https://www.ungmennavefur.is/'}
          image={
            'https://www.ungmennavefur.is/static/6a919a1211fd86e8e1a1b3e5d34609bd/b4490/Ahrif-Thingpallar.png'
          }
          size="default"
        /> */}
      </>
    </Box>
  )
}

export default NavigationSidebar
