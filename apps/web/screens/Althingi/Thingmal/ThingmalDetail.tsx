import React, { useEffect, useMemo } from 'react'
import { useWindowSize } from 'react-use'
// eslint-disable-next-line @nx/enforce-module-boundaries
import { InfoCardItemProps } from 'libs/island-ui/core/src/lib/InfoCardGrid/InfoCardGrid'

import {
  Box,
  Filter,
  FilterInput,
  FilterMultiChoice,
  InfoCardGrid,
  Text,
} from '@island.is/island-ui/core'
import { theme } from '@island.is/island-ui/theme'
import { CustomPageUniqueIdentifier } from '@island.is/shared/types'
import { withMainLayout } from '@island.is/web/layouts/main'
import { mockInfoStaffCards, paths } from '@island.is/web/utils/mockData'

import {
  CustomScreen,
  withCustomPageWrapper,
} from '../../CustomPage/CustomPageWrapper'
import Layout from '../Layout'

const ThingmalDetail: CustomScreen<ThingmalDetailProps> = ({ title }) => {
  const { width } = useWindowSize()
  const isMobile = width < theme.breakpoints.md
  const [searchInput, setSearchInput] = React.useState<string>('')

  return (
    <Layout
      title={title}
      breadcrumbs={[
        {
          title: 'Þingstörf',
          href: paths.thingstorf,
          isCurrentPage: false,
        },
        {
          title: 'Þingmál',
          href: paths.thingmal,
          isCurrentPage: false,
        },
      ]}
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
    </Layout>
  )
}

interface ThingmalDetailProps {
  title: string
}

ThingmalDetail.getProps = async () => {
  return {
    title: 'Þingmál',
  }
}

export default withMainLayout(
  withCustomPageWrapper(
    CustomPageUniqueIdentifier.OfficialJournalOfIceland,
    ThingmalDetail,
  ),
)
