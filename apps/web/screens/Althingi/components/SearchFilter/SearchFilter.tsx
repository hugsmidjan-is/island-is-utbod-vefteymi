import { useIntl } from 'react-intl'
import sortBy from 'lodash/sortBy'

import {
  Box,
  Filter,
  FilterMultiChoice,
  FilterProps,
} from '@island.is/island-ui/core'
import { isDefined } from '@island.is/shared/utils'
import { GenericTag } from '@island.is/web/graphql/schema'

export interface SearchState {
  status?: 'open' | 'closed' // Staða
  category?: Array<string> // Efnisflokkur
  type?: Array<string> // Tegund
  period?: Array<string> // Tímabil
}

interface Props {
  onSearchUpdate: (
    categoryId: keyof SearchState,
    values?: Array<string>,
  ) => void
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
        labelOpen={'Opna'}
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
            labelClear={'clearFilters'}
            onChange={({ categoryId, selected }) => {
              onSearchUpdate(
                categoryId as keyof SearchState,
                selected.length ? selected : undefined,
              )
            }}
            onClear={(categoryId) => {
              onSearchUpdate(categoryId as keyof SearchState, undefined)
            }}
            categories={[
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

              sortedFilters.categories
                ? {
                    id: 'type',
                    label: 'Tegund',
                    selected: searchState?.['type'] ?? [],
                    filters: [
                      {
                        value: 'type1',
                        label: 'Tegund 1',
                      },
                      {
                        value: 'type2',
                        label: 'Tegund 2',
                      },
                    ],
                  }
                : undefined,
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
