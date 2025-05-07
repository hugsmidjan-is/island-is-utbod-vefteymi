import { useState } from 'react'
import sortBy from 'lodash/sortBy'

import {
  Box,
  Filter,
  FilterMultiChoice,
  FilterProps,
} from '@island.is/island-ui/core'
import { isDefined } from '@island.is/shared/utils'

export interface SearchState {
  status?: 'open' | 'closed' // Staða
  category?: Array<string> // Efnisflokkur
  type?: Array<string> // Tegund
  period?: Array<string> // Tímabil
}

interface Props {
  onSearchUpdate: (categoryId: string) => void
  onReset: () => void
  searchState?: SearchState
  tags: Array<{ title: string }>
  url: string
  variant?: FilterProps['variant']
  hits?: number
}

export const SearchFilter = ({
  onSearchUpdate,
  onReset,
  searchState,
  tags,
  url,
  variant = 'default',
  hits,
}: Props) => {
  const sortedFilters = {
    categories: sortBy(
      tags?.filter((t) => t.title === 'grant-category'),
      'category',
    ),
    types: sortBy(
      tags?.filter((t) => t.title === 'grant-type'),
      'type',
    ),
  }

  const [isChecked, setIsChecked] = useState(false)

  return (
    <Box
      component="form"
      borderRadius="large"
      action={url}
      onSubmit={(e) => {
        e.preventDefault()
      }}
    >
      <Filter
        labelClearAll={'Hreinsa allt'}
        labelOpen={'Leit og síun'}
        labelClose={'Loka'}
        labelClear={'Hreinsa'}
        labelTitle={'Sía'}
        labelResult={'Niðurstöður'}
        resultCount={hits}
        onFilterClear={onReset}
        variant={variant}
        align={'right'}
        usePopoverDiscloureButtonStyling
      >
        <Box background="white" borderRadius="large">
          <FilterMultiChoice
            labelClear={'Hreinsa síu'}
            singleExpand={false}
            onChange={() => {
              setIsChecked(true)
              onSearchUpdate('Lagafrumvarp')
            }}
            onClear={() => {
              setIsChecked(false)
              onSearchUpdate('all')
            }}
            categories={[
              {
                id: 'type',
                label: 'Tegund',
                selected: isChecked ? ['Lagafrumvarp'] : [],
                filters: [
                  {
                    value: 'Lagafrumvarp',
                    label: 'Lagafrumvörp',
                  },
                  {
                    value: 'type2',
                    label: 'Þingsályktunartillögur',
                  },
                  {
                    value: 'type2',
                    label: 'Fyrirspurnir',
                  },
                  {
                    value: 'type2',
                    label: 'Skýrslur, álit og beiðnir',
                  },
                  {
                    value: 'type2',
                    label: 'Sérstakar umræður',
                  },
                  {
                    value: 'type2',
                    label: 'Þingmál',
                  },
                ],
              },

              {
                id: 'status',
                label: 'Staða',
                singleOption: true,
                selected: searchState?.['status']
                  ? [searchState['status']]
                  : [],
                filters: [
                  {
                    value: 'open',
                    label: 'Opið',
                  },
                  {
                    value: 'closed',
                    label: 'Lokað',
                  },
                ],
              },
              {
                id: 'category',
                label: 'Efnisflokkar',

                selected: searchState?.['category'] ?? [],
                filters: [
                  {
                    value: 'efnisflokkur1',
                    label: 'Efnisflokkur 1',
                  },
                  {
                    value: 'efnisflokkur2',
                    label: 'Efnisflokkur 2',
                  },
                ],
              },
              {
                id: 'period',
                label: 'Tímabil',

                selected: searchState?.['period'] ?? [],
                filters: [
                  {
                    value: 'period1',
                    label: 'Tímabil 1',
                  },
                  {
                    value: 'period2',
                    label: 'Tímabil 2',
                  },
                ],
              },
            ].filter(isDefined)}
          />
        </Box>
      </Filter>
    </Box>
  )
}
