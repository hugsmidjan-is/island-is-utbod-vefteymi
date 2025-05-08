import React, { useEffect } from 'react'
import { useWindowSize } from 'react-use'
// eslint-disable-next-line @nx/enforce-module-boundaries
import { InfoCardItemProps } from 'libs/island-ui/core/src/lib/InfoCardGrid/InfoCardGrid'
import { useRouter } from 'next/router'

import {
  Box,
  Filter,
  FilterInput,
  FilterMultiChoice,
  InfoCardGrid,
  Stack,
  Text,
} from '@island.is/island-ui/core'
import { theme } from '@island.is/island-ui/theme'
import { withMainLayout } from '@island.is/web/layouts/main'
import { Screen } from '@island.is/web/types'
import { mockInfoStaffCards, paths } from '@island.is/web/utils/mockData'

import GoBack from '../components/GoBack/GoBack'
import NavigationSidebar from '../components/NavigationSidebar'
import Layout from '../Layout'

const Thingmenn: Screen<ThingmennProps> = ({ title }) => {
  const { width } = useWindowSize()
  const isMobile = width < theme.breakpoints.md
  const [searchInput, setSearchInput] = React.useState<string>('')
  const [filteredCards, setFilteredCards] = React.useState<
    Array<InfoCardItemProps> | undefined
  >(undefined)

  const router = useRouter()
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

  return (
    <Layout
      title={title}
      breadcrumbs={[
        {
          title: 'Þingmenn',
          href: paths.thingmenn,
          isCurrentPage: true,
        },
      ]}
      sidebar={
        <Stack space={2}>
          <GoBack />
          <NavigationSidebar
            title="Þingmenn"
            items={[
              {
                title: 'Alþingismenn',
                href: paths.thingmenn,
                accordion: true,
                items: [
                  { title: 'Þingmenn', href: paths.thingmenn, active: true },
                ],
                active: router.pathname === paths.thingmenn,
              },
              {
                title: 'Þingflokkar',
                href: paths.home,
                accordion: true,
                active: router.pathname === paths.thingfundir,
              },
              {
                title: 'Forsetar Alþingis',
                href: paths.home,
                accordion: true,
                active: router.pathname === paths.thingfundir,
              },
              {
                title: 'Ráðherrar og ríkisstjórn',
                href: paths.home,
                accordion: true,
                active: router.pathname === paths.thingfundir,
              },
              {
                title: 'Lagasafn',
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
                title: 'Þingtímabil',
                href: paths.home,
                accordion: true,
                active: router.pathname === paths.thingfundir,
              },
              {
                title: 'Kjördæmi',
                href: paths.home,
                accordion: true,
                active: router.pathname === paths.thingfundir,
              },
            ]}
          />
        </Stack>
      }
    >
      <Text variant="h1" marginBottom={3} marginTop={2}>
        Alþingismenn
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
            name={'Filter input'}
            value={searchInput}
            onChange={(e) => setSearchInput(e)}
            placeholder="Leitaðu að nafni"
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
              id: 'filter-category-1',
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
              id: 'filter-category-2',
              label: 'Kjördæmi',
              selected: [],
            },
            {
              filters: [
                { label: 'Alþingismenn', value: 'althingismenn' },
                { label: 'Ráðherrar', value: 'radherrar' },
              ],
              id: 'filter-category-3',
              label: 'Ráðuneyti',
              selected: [],
            },
          ]}
        />
      </Filter>
      <Box marginY={3} />
      <Box
        display="flex"
        alignItems={'flexEnd'}
        justifyContent="flexStart"
        marginBottom={2}
      >
        <Box marginRight={1}>
          <Text fontWeight="medium">{filteredCards?.length ?? 0}</Text>
        </Box>
        <Text>{' niðurstöður'}</Text>
      </Box>
      <InfoCardGrid
        cards={filteredCards ?? mockInfoStaffCards}
        cardsBorder="blue200"
        variant="detailed"
        columns={1}
      />
    </Layout>
  )
}

interface ThingmennProps {
  title: string
}

Thingmenn.getProps = async () => {
  return {
    title: 'Þingmenn',
  }
}

export default withMainLayout(Thingmenn, { showFooter: false })
