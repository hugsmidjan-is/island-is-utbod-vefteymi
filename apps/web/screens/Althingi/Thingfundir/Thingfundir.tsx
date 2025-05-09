import React, { useEffect, useState } from 'react'
import { useWindowSize } from 'react-use'
import format from 'date-fns/format'
// eslint-disable-next-line @nx/enforce-module-boundaries
import { InfoCardItemProps } from 'libs/island-ui/core/src/lib/InfoCardGrid/InfoCardGrid'
import { useRouter } from 'next/router'

import {
  Box,
  Button,
  GridColumn,
  GridContainer,
  GridRow,
  Inline,
  LinkV2,
  Pagination,
  Select,
  Stack,
  Table as T,
  Tag,
  Text,
} from '@island.is/island-ui/core'
import { theme } from '@island.is/island-ui/theme'
import { type Locale } from '@island.is/shared/types'
import * as hooks from '@island.is/web/hooks'
import { withMainLayout } from '@island.is/web/layouts/main'
import { Screen } from '@island.is/web/types'
import { mockInfoStaffCards, paths } from '@island.is/web/utils/mockData'

import GoBack from '../components/GoBack/GoBack'
import NavigationSidebar from '../components/NavigationSidebar'
import Layout from '../Layout'

type Fundur =
  | {
      isPassed: true
      id: string
      name: string
      startTime: string
      url: string
      streamUrl: string
    }
  | {
      isPassed: false
      id: string
      name: string
      advertisedStartTime: string
      url: string
    }

interface Thing {
  name: string
  fundir: Array<Fundur>
}

interface ThingfundirProps {
  locale: Locale
  thingList?: Array<Thing>
}

const Thingfundir: Screen<ThingfundirProps> = ({ locale, thingList }) => {
  const { width } = useWindowSize()
  const isMobile = width < theme.breakpoints.md
  const [searchInput, setSearchInput] = React.useState<string>('')
  const [filteredCards, setFilteredCards] = React.useState<
    Array<InfoCardItemProps> | undefined
  >(undefined)

  const MAX_ROWS_PER_PAGE = 11

  useEffect(() => {
    if (!searchInput) {
      setFilteredCards(mockInfoStaffCards)
    } else {
      setFilteredCards(
        mockInfoStaffCards.filter((card) =>
          card.title.toLowerCase().includes(searchInput.toLowerCase()),
        ),
      )
    }
  }, [searchInput])
  const { linkResolver } = hooks.useLinkResolver()

  const [chosenThing, setChosenThing] = useState<Thing | undefined>(
    thingList?.[0],
  )

  useEffect(() => {
    setChosenThing(thingList?.[0])
  }, [thingList])

  const [page, setPage] = useState(1)
  const router = useRouter()

  const totalPages = chosenThing
    ? chosenThing.fundir.length > 0
      ? Math.ceil(chosenThing.fundir.length / MAX_ROWS_PER_PAGE)
      : 0
    : undefined

  return (
    <Layout
      title={'Alþingi'}
      breadcrumbs={[
        {
          title: 'Þingstörf',
          href: paths.thingstorf,
          isCurrentPage: false,
        },
        {
          title: 'Þingfundir og ræður',
          href: paths.thingfundir,
          isCurrentPage: true,
        },
      ]}
      sidebar={
        <Stack space={2}>
          <GoBack />
          <NavigationSidebar
            title="Þingstörf"
            items={[
              {
                title: 'Þingmál',
                href: paths.thingmal,
                accordion: true,
                active: false,
              },
              {
                title: 'Þingfundir og ræður',
                href: paths.thingfundir,
                active: true,
                accordion: true,
                items: [
                  {
                    title: 'Fundargerðir og upptökur',
                    href: paths.upptokur,
                    active: true,
                  },
                  {
                    title: 'Ræður',
                    href: 'https://mbl.is',
                  },
                  {
                    title: 'Dagskrá þingfundar',
                    href: '/',
                  },
                  {
                    title: 'Starfsáætlun Alþingis',
                    href: '/',
                  },
                  {
                    title: 'Mælendaskrá',
                    href: '/',
                  },
                ],
              },
              {
                title: 'Yfirlit og úttektir',
                href: '/',
              },
              {
                title: 'Tilkynningar',
                href: '/',
              },
            ]}
          />
        </Stack>
      }
    >
      <Text variant="h1" marginBottom={3} marginTop={2}>
        Fundargerðir og upptökur{' '}
      </Text>
      <Text marginBottom={3}>
        Yfirlit yfir þingfundi og ræður, þar með taldar dagskrár funda. Athugið
        að myndupptökur af fundum eru aðgengilegar á vef í lok fundar eða í
        fundarhléum, í síðasta lagi í lok fundardags en hljóðupptökur strax að
        lokinni ræðu.
      </Text>

      <GridContainer>
        <GridRow>
          <GridColumn span={['8/12', '4/12']}>
            <Box marginTop={2}>
              <Select
                id="react-select"
                size="xs"
                backgroundColor="blue"
                label="Veldu þing"
                onChange={(option) => {
                  if (option?.value) {
                    setChosenThing(option.value)
                  }
                }}
                value={
                  chosenThing
                    ? { label: chosenThing?.name, value: chosenThing }
                    : undefined
                }
                options={
                  thingList?.map((b) => ({
                    label: b.name,
                    value: b,
                  })) ?? []
                }
              />
            </Box>
          </GridColumn>
        </GridRow>
        <GridRow>
          <GridColumn span="11/12">
            <Box marginTop={4}>
              <T.Table>
                <T.Head>
                  <T.Row>
                    <T.HeadData>
                      <Text variant="medium" fontWeight="semiBold">
                        Fundarnúmer
                      </Text>
                    </T.HeadData>
                    <T.HeadData>
                      <Text variant="medium" fontWeight="semiBold">
                        Fundur hefst
                      </Text>
                    </T.HeadData>
                    <T.HeadData />
                  </T.Row>
                </T.Head>
                <T.Body>
                  {chosenThing?.fundir.map((b, index) => {
                    let formattedDate: string
                    if (b.isPassed) {
                      formattedDate = format(
                        Date.parse(b.startTime),
                        'dd.MM.yyyy (HH:mm)',
                      )
                    } else {
                      formattedDate = `${format(
                        Date.parse(b.advertisedStartTime),
                        'dd.MM.yyyy',
                      )} (boðaður kl. ${format(
                        Date.parse(b.advertisedStartTime),
                        'HH:mm',
                      )})`
                    }
                    return (
                      <T.Row key={`${b.id}-${index}`}>
                        <T.Data span={6}>
                          <LinkV2 newTab href={b.url}>
                            <Button
                              unfocusable
                              variant="text"
                              size="small"
                              as="span"
                            >
                              {b.name}
                            </Button>
                          </LinkV2>
                        </T.Data>
                        <T.Data>
                          <Text variant="small">{formattedDate}</Text>
                        </T.Data>
                        <T.Data align="right">
                          {b.isPassed ? (
                            <LinkV2 href={b.streamUrl}>
                              <Button
                                variant="text"
                                size="small"
                                unfocusable
                                as="span"
                                icon="arrowForward"
                              >
                                Horfa
                              </Button>
                            </LinkV2>
                          ) : (
                            ''
                          )}
                        </T.Data>
                      </T.Row>
                    )
                  })}
                </T.Body>
              </T.Table>
            </Box>
            {chosenThing && totalPages && totalPages > 1 && (
              <Box marginTop={3}>
                <Pagination
                  page={page}
                  totalPages={totalPages}
                  renderLink={(page, className, children) => (
                    <button
                      className={className}
                      onClick={() => {
                        setPage(page)
                      }}
                    >
                      {children}
                    </button>
                  )}
                />
              </Box>
            )}
          </GridColumn>
        </GridRow>
      </GridContainer>
    </Layout>
  )
}

Thingfundir.getProps = async ({ locale }) => {
  const lang: Locale = locale === 'en' ? 'en' : 'is'

  const content: Array<Array<Fundur>> = [
    [
      {
        isPassed: false,
        id: '1',
        name: '36.fundur',
        advertisedStartTime: '2023-10-01T12:00:00Z',
        url: paths.thingfundur,
      },
      {
        isPassed: true,
        id: '2',
        name: '35.fundur',
        startTime: '2023-10-01T12:00:00Z',
        url: paths.thingfundur,
        streamUrl: paths.thingfundur,
      },
      {
        isPassed: true,
        id: '3',
        name: '34.fundur',
        startTime: '2023-10-01T12:00:00Z',
        url: paths.thingfundur,
        streamUrl: paths.thingfundur,
      },
      {
        isPassed: true,
        id: '14',
        name: '33.fundur',
        startTime: '2023-10-01T12:00:00Z',
        url: paths.thingfundur,
        streamUrl: paths.thingfundur,
      },
    ],
    [
      {
        isPassed: false,
        id: '6',
        name: '32.fundur',
        advertisedStartTime: '2023-10-01T12:00:00Z',
        url: paths.thingfundur,
      },
      {
        isPassed: true,
        id: '7',
        name: '31.fundur',
        startTime: '2023-10-01T12:00:00Z',
        url: paths.thingfundur,
        streamUrl: paths.thingfundur,
      },
      {
        isPassed: true,
        id: '8',
        name: '30.fundur',
        startTime: '2023-10-01T12:00:00Z',
        url: paths.thingfundur,
        streamUrl: paths.thingfundur,
      },
      {
        isPassed: true,
        id: '125',
        name: '29.fundur',
        startTime: '2023-10-01T12:00:00Z',
        url: paths.thingfundur,
        streamUrl: paths.thingfundur,
      },
    ],
  ]
  const thingList: Array<Thing> = Array.from(Array(35).keys()).map((index) => ({
    name: `15${index}:2025`,
    fundir:
      index % 2 === 0
        ? [...content[0], ...content[0], ...content[0], ...content[0]]
        : content[1],
  }))

  return {
    locale: lang,
    thingList,
  }
}

export default withMainLayout(Thingfundir, { showFooter: false })
