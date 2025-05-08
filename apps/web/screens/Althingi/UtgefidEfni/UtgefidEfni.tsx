import { useEffect, useState } from 'react'
import { useWindowSize } from 'react-use'
import { useRouter } from 'next/router'
import { useQueryState } from 'next-usequerystate'

import {
  Box,
  Filter,
  FilterInput,
  FilterMultiChoice,
  FocusableBox,
  LinkV2,
  Stack,
  Text,
} from '@island.is/island-ui/core'
import { theme } from '@island.is/island-ui/theme'
import { type Locale } from '@island.is/shared/types'
import { SLICE_SPACING } from '@island.is/web/constants'
import { withMainLayout } from '@island.is/web/layouts/main'
import { Screen } from '@island.is/web/types'
import {
  MockHandbook,
  mockHandbooks,
  paths,
} from '@island.is/web/utils/mockData'

import GoBack from '../components/GoBack/GoBack'
import NavigationSidebar from '../components/NavigationSidebar'
import Layout from '../Layout'

interface UtgefidEfniProps {
  title: string
  locale: Locale
}

const UtgefidEfni: Screen<UtgefidEfniProps> = ({ title }) => {
  const { width } = useWindowSize()
  const isMobile = width < theme.breakpoints.md
  const [query, setQuery] = useQueryState('query')
  const [filteredData, setFilteredData] = useState<MockHandbook[]>([])
  const [redirect, setRedirect] = useState(false)

  const data = mockHandbooks
  const router = useRouter()

  useEffect(() => {
    const handleRouteChange = () => {
      setRedirect(true)
    }

    router.events.on('routeChangeStart', handleRouteChange)
    return () => {
      router.events.off('routeChangeStart', handleRouteChange)
    }
  }, [router])

  useEffect(() => {
    if (!query && !redirect) {
      setFilteredData(data)
    } else if (query) {
      setFilteredData(
        data.filter((item) =>
          item.title.toLowerCase().includes(query.toLowerCase()),
        ),
      )
    }
  }, [query, redirect])

  return (
    <Layout
      title={title}
      breadcrumbs={[
        {
          title: 'Um Alþingi',
          href: paths.umAlthingi,
          isCurrentPage: true,
        },
      ]}
      sidebar={
        <Stack space={2}>
          <GoBack />
          <NavigationSidebar
            title="Um Alþingi"
            items={[
              {
                title: 'Upplýsingar um Alþingi',
                href: paths.umAlthingi,
                accordion: true,
                active: router.pathname === paths.umAlthingi,
              },
              {
                title: 'Skrifstofa Alþingis',
                href: paths.home,
                accordion: true,
                active: router.pathname === paths.thingfundir,
              },
              {
                title: 'Ályktanir Alþingis',
                href: paths.home,
                accordion: true,
                active: router.pathname === paths.thingfundir,
              },
              {
                title: 'Útgefið efni',
                href: paths.utgefidEfni,
                accordion: true,
                active: router.pathname === paths.utgefidEfni,
              },
              {
                title: 'Stofnanir, stjórnir og nefndir',
                href: paths.home,
                accordion: true,
                active: router.pathname === paths.thingfundir,
              },
              {
                title: 'Alþjóðastarf',
                href: paths.home,
                accordion: true,
                active: router.pathname === paths.thingfundir,
              },
              {
                title: 'Fræðslu- og kynningarefni',
                href: paths.home,
                accordion: true,
                active: router.pathname === paths.thingfundir,
              },
              {
                title: 'Heimsóknir í Alþingishúsið',
                href: paths.home,
                accordion: true,
                active: router.pathname === paths.thingfundir,
              },
            ]}
          />
        </Stack>
      }
    >
      <Stack space={SLICE_SPACING}>
        <section>
          <Box marginTop={2}>
            <Text variant="h1">{title}</Text>
            <Text variant="intro" as="p" paddingTop={3} marginBottom={3}>
              Hér má finna handbækur og skýrslur Alþingis
            </Text>
            <Filter
              reverse
              resultCount={123}
              labelClear={'Hreinsa síu'}
              labelClearAll={'Hreinsa allar síur'}
              labelOpen={'Sía niðurstöður'}
              labelClose={'Loka síu'}
              labelResult={'Skoða niðurstöður'}
              labelTitle={'Sía niðurstöður'}
              variant={isMobile ? 'dialog' : 'popover'}
              onFilterClear={() => {
                console.log('clearing all filters')
              }}
              filterInput={
                <FilterInput
                  backgroundColor={'blue'}
                  name={'Filter input'}
                  value={query ?? ''}
                  onChange={(e) => setQuery(e)}
                  placeholder="Leita eftir nafni"
                />
              }
            >
              <FilterMultiChoice
                labelClear={'Hreinsa val'}
                onChange={({ categoryId, selected }) => {
                  console.log('changing', categoryId, selected)
                }}
                onClear={(categoryId) => {
                  console.log('clearing', categoryId)
                }}
                categories={[
                  {
                    filters: [
                      { label: 'Samfylking', value: 'althingismenn' },
                      { label: 'Sjálfstæðisflokkur', value: 'radherrar' },
                    ],
                    id: '??',
                    label: 'Þingflokkur',
                    selected: [],
                  },
                  {
                    filters: [
                      { label: 'Reykjavík norður', value: 'rvk-nordur' },
                      { label: 'Reykjavík suður', value: 'rvk-sudur' },
                      { label: 'Suðvesturkjördæmi', value: 'sudvestur' },
                      { label: 'Suðurkjördæmi', value: 'sudur' },
                      { label: 'Norðausturkjördæmi', value: 'nordaustur' },
                      { label: 'Norðvesturkjördæmi', value: 'nordvestur' },
                    ],
                    id: '??',
                    label: 'Kjördæmi',
                    selected: [],
                  },
                  {
                    filters: [
                      { label: 'Alþingismenn', value: 'althingismenn' },
                      { label: 'Ráðherrar', value: 'radherrar' },
                    ],
                    id: '??',
                    label: 'Ráðuneyti',
                    selected: [],
                  },
                ]}
              />
            </Filter>
          </Box>
        </section>
        <section>
          <Stack space={2}>
            <Box
              display="flex"
              alignItems={'flexEnd'}
              justifyContent="flexStart"
            >
              <Box marginRight={1}>
                <Text fontWeight="medium">{filteredData.length}</Text>
              </Box>
              <Text>{' niðurstöður'}</Text>
            </Box>
            {filteredData.map((t, index) => (
              <FocusableBox
                key={`${t.title}-${index}`}
                component={LinkV2}
                href={paths.handbok}
                paddingY={2}
                paddingX={3}
                background="blue100"
                borderRadius="large"
              >
                <Text fontWeight="semiBold" variant="medium" color="blue400">
                  {t.title}
                </Text>
              </FocusableBox>
            ))}
          </Stack>
        </section>
      </Stack>
    </Layout>
  )
}

UtgefidEfni.getProps = async ({ locale }) => {
  const lang: Locale = locale === 'en' ? 'en' : 'is'

  return {
    title: 'Útgefið efni',
    locale: lang,
  }
}

export default withMainLayout(UtgefidEfni, { showFooter: false })
