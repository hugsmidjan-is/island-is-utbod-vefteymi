import React, { useState } from 'react'
import { useWindowSize } from 'react-use'
import { parseAsInteger, useQueryState } from 'next-usequerystate'

import {
  Box,
  Button,
  FilterInput,
  InfoCardGrid,
  Pagination,
  Stack,
  Text,
} from '@island.is/island-ui/core'
import { theme } from '@island.is/island-ui/theme'
import { CustomPageUniqueIdentifier } from '@island.is/shared/types'
import { withMainLayout } from '@island.is/web/layouts/main'

import {
  CustomScreen,
  withCustomPageWrapper,
} from '../../CustomPage/CustomPageWrapper'
import SidebarLayout from '../../Layouts/SidebarLayout'
import {
  SearchFilter,
  SearchState,
} from '../components/SearchFilter/SearchFilter'
import SearchHeader from '../components/SearchHeader/SearchHeader'
import GridView from '../components/GridView/GridView'
import ListView from '../components/ListView/ListView'
import { searchItems } from '@island.is/web/utils/mockData'

const Thingmal: CustomScreen<ThingmalProps> = () => {
  const { width } = useWindowSize()
  const [isGridLayout, setIsGridLayout] = useState(true)

  const [page, setPage] = useQueryState('page', parseAsInteger.withDefault(1))
  const [query, setQuery] = useQueryState('query')
  const isTablet = width <= theme.breakpoints.lg
  return (
    <Box>
      <SearchHeader
        title={''}
        onSearch={function (query: string): void {
          throw new Error('Function not implemented.')
        }}
      />
      <Box background="blue100" marginY={isTablet ? 6 : 8}>
        {!isTablet && (
          <SidebarLayout
            fullWidthContent={true}
            sidebarContent={
              <Stack space={3}>
                <Text variant="h4" as="h4" paddingY={1}>
                  {'Leit'}
                </Text>
                <FilterInput
                  name="query"
                  placeholder={'Leit í þingmálum'}
                  value={query ?? ''}
                  onChange={(option) => setQuery(option)}
                />
                <SearchFilter
                  onSearchUpdate={function (
                    categoryId: keyof SearchState,
                    values?: Array<string>,
                  ): void {
                    throw new Error('Function not implemented.')
                  }}
                  onReset={function (): void {
                    throw new Error('Function not implemented.')
                  }}
                  tags={[]}
                  url={''}
                />
              </Stack>
            }
          >
            <Box marginLeft={7}>
              <Box
                marginBottom={3}
                display="flex"
                justifyContent="spaceBetween"
              >
                <Box display="flex" alignItems="center">
                  <Text>{'X færslur fundust'}</Text>
                </Box>
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
              </Box>
              {isGridLayout ? (
                <GridView data={searchItems} />
              ) : (
                <ListView data={searchItems} />
              )}
            </Box>

            <Box marginTop={2} marginBottom={0} hidden>
              <Pagination
                variant="purple"
                page={page}
                itemsPerPage={8}
                totalItems={200}
                totalPages={200 / 8}
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
        )}
        {isTablet && (
          <Box margin={3} paddingTop={3}>
            <Text fontWeight="semiBold">{'leita'}</Text>
            <Box marginTop={2} style={{ maxWidth: '475px' }}>
              <FilterInput
                name="query"
                placeholder={'placeholder'}
                value={query ?? ''}
                onChange={(option) => setQuery(option)}
                backgroundColor={'white'}
              />
            </Box>
            <Box
              marginTop={2}
              display="flex"
              justifyContent="spaceBetween"
              height="full"
              alignItems={'center'}
            >
              <Text>{'hitsMessage'}</Text>

              <SearchFilter
                onSearchUpdate={function (
                  categoryId: keyof SearchState,
                  values?: Array<string>,
                ): void {
                  throw new Error('Function not implemented.')
                }}
                onReset={function (): void {
                  throw new Error('Function not implemented.')
                }}
                tags={[]}
                url={''}
              />
            </Box>
            <Box marginTop={2}>
              <InfoCardGrid
                cards={[
                  {
                    id: '1',
                    eyebrow: 'Eyebrow',
                    title: 'Title',
                    description: 'Description',
                    link: {
                      href: '/link',
                      label: 'Link',
                    },
                    borderColor: 'blue200',
                  },
                ]}
              />
            </Box>
            <Box marginTop={2} paddingBottom={2} hidden={8 < 1}>
              <Pagination
                variant="purple"
                page={page}
                itemsPerPage={8}
                totalItems={200}
                totalPages={200 / 8}
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
          </Box>
        )}
      </Box>
    </Box>
  )
}

interface ThingmalProps {
  title: string
  list?: [{ title: string; date: string }]
  tags?: Array<string>
}

Thingmal.getProps = async () => {
  return {
    title: 'Alþingi',
  }
}

export default withMainLayout(
  withCustomPageWrapper(CustomPageUniqueIdentifier.Grants, Thingmal),
)
