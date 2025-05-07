import React, { useEffect, useState } from 'react'
import { useWindowSize } from 'react-use'
// eslint-disable-next-line @nx/enforce-module-boundaries
import { InfoCardItemProps } from 'libs/island-ui/core/src/lib/InfoCardGrid/InfoCardGrid'
import { useRouter } from 'next/router'
import { parseAsInteger, useQueryState } from 'next-usequerystate'

import {
  Box,
  Button,
  FilterInput,
  Hidden,
  InfoCardGrid,
  Pagination,
  Stack,
  Text,
} from '@island.is/island-ui/core'
import { theme } from '@island.is/island-ui/theme'
import { AlthingiFooter, DefaultHeader } from '@island.is/web/components'
import { withMainLayout } from '@island.is/web/layouts/main'
import { Screen } from '@island.is/web/types'
import {
  InfoCaseCards,
  mockInfoCaseCards,
  OrganizationMock,
  searchItems,
} from '@island.is/web/utils/mockData'

import SidebarLayout from '../../Layouts/SidebarLayout'
import ListView from '../components/ListView/ListView'
import { SearchFilter } from '../components/SearchFilter/SearchFilter'
import SearchHeader from '../components/SearchHeader/SearchHeader'

const Thingmal: Screen<ThingmalProps> = ({ data }) => {
  const { width } = useWindowSize()
  const [isGridLayout, setIsGridLayout] = useState(true)
  const [redirect, setRedirect] = useState(false)
  const [filteredCards, setFilteredCards] = React.useState<
    Array<InfoCardItemProps> | undefined
  >(undefined)

  const [page, setPage] = useQueryState('page', parseAsInteger.withDefault(1))
  const [query, setQuery] = useQueryState('query')
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

  const isTablet = width <= theme.breakpoints.lg

  useEffect(() => {
    if (!query && !redirect) {
      setFilteredCards(data)
    } else if (query) {
      setFilteredCards(
        data.filter((card) =>
          card.title.toLowerCase().includes(query.toLowerCase()),
        ),
      )
    }
  }, [query, redirect])

  const totalCards = filteredCards?.length ?? data.length

  return (
    <Box>
      <Box>
        <DefaultHeader
          title={'Alþingi'}
          titleColor="white"
          image={'/assets/althingi-new-logo.svg'}
          background="#174C97"
          imagePadding="20px"
          logoHref="/s/althingi"
          isSubpage
          logo="https://www.althingi.is/skin/basic9k/i/sitelogo-new.svg"
        />
      </Box>
      <SearchHeader
        title={''}
        onSearch={function (query: string): void {
          throw new Error('Function not implemented.')
        }}
      />
      <Box background="dark100" marginTop={isTablet ? 6 : 8} marginBottom={0}>
        {
          <SidebarLayout
            fullWidthContent={true}
            sidebarContent={
              <Stack space={3}>
                <Text variant="h4" as="h4" paddingY={1}>
                  {'Leit og síun'}
                </Text>
                <FilterInput
                  name="query"
                  placeholder={'Leit í þingmálum'}
                  value={query ?? ''}
                  onChange={(option) => setQuery(option)}
                />
                <SearchFilter
                  onSearchUpdate={(id) => {
                    if (id === 'all') {
                      setFilteredCards(data)
                    } else {
                      setFilteredCards(
                        data.filter((card) =>
                          card.tags?.some(
                            (tag) => tag?.label === 'Lagafrumvarp',
                          ),
                        ),
                      )
                    }
                  }}
                  searchState={{}}
                  onReset={() => setFilteredCards(data)}
                  tags={[]}
                  url={''}
                />
              </Stack>
            }
          >
            <Box marginLeft={[0, 0, 0, 7]} marginTop={[3, 3, 0]}>
              <Box
                marginBottom={3}
                display="flex"
                justifyContent="spaceBetween"
              >
                <Box display="flex" alignItems="center">
                  <Text fontWeight="medium">{filteredCards?.length}</Text>{' '}
                  <Box marginRight={1}></Box>
                  <Text>{'færslur fundust'}</Text>
                </Box>
                <Hidden above="sm">
                  <Box
                    display="flex"
                    justifyContent="flexEnd"
                    height="full"
                    alignItems={'center'}
                  >
                    <SearchFilter
                      variant="popover"
                      onSearchUpdate={() => {
                        setFilteredCards(
                          data.filter((card) =>
                            card.tags?.some(
                              (tag) => tag?.label === 'Lagafrumvarp',
                            ),
                          ),
                        )
                      }}
                      searchState={{}}
                      onReset={() => setFilteredCards(data)}
                      tags={[]}
                      url={''}
                    />
                  </Box>
                </Hidden>
                <Hidden below="md">
                  <Button
                    variant="utility"
                    icon={isGridLayout ? 'menu' : 'gridView'}
                    iconType="filled"
                    colorScheme="white"
                    size="small"
                    onClick={() => setIsGridLayout(!isGridLayout)}
                  >
                    {isGridLayout ? 'Sýna sem lista' : 'Sýna sem spjöld'}
                  </Button>
                </Hidden>
              </Box>
              {isGridLayout ? (
                <InfoCardGrid
                  columns={1}
                  cards={filteredCards ?? data}
                  variant="detailed"
                />
              ) : (
                <ListView data={searchItems} />
              )}
            </Box>

            <Box marginTop={2} marginBottom={0} hidden>
              <Pagination
                variant="purple"
                page={page}
                itemsPerPage={8}
                totalItems={totalCards}
                totalPages={totalCards / 8}
                renderLink={(page, className, children) => (
                  <Box
                    cursor="pointer"
                    className={className}
                    onClick={() => {
                      setPage(page)
                    }}
                  >
                    {children}
                  </Box>
                )}
              />
            </Box>
          </SidebarLayout>
        }
      </Box>
      <AlthingiFooter
        footerItems={OrganizationMock.footerItems}
        organizationSlug={OrganizationMock.slug}
      />
    </Box>
  )
}

interface ThingmalProps {
  title: string
  data: Array<InfoCaseCards>
}

Thingmal.getProps = async () => {
  return {
    title: 'Alþingi',
    data: mockInfoCaseCards,
  }
}
export default withMainLayout(Thingmal, { showFooter: false, showHeader: true })
