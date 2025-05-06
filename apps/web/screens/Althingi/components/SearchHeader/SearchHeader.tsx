import React from 'react'

import {
  Box,
  Breadcrumbs,
  Button,
  GridColumn,
  GridContainer,
  GridRow,
  Icon,
  LinkV2,
  Text,
} from '@island.is/island-ui/core'
import { Webreader } from '@island.is/web/components'

import * as styles from './SearchHeader.css'
import { paths } from '@island.is/web/utils/mockData'

interface SearchHeaderProps {
  title: string
  onSearch: (query: string) => void
}

const SearchHeader: React.FC<SearchHeaderProps> = ({ title, onSearch }) => {
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onSearch(event.target.value)
  }

  return (
    <Box paddingTop={[6, 6, 6, 8, 8]}>
      <GridContainer>
        <GridRow>
          <GridColumn span={['0', '0', '2/6', '3/12', '3/12']} hiddenBelow="md">
            <Box display="flex" height="full">
              {/* <img
                src={'/assets/files.svg'}
                className={styles.image}
                alt={'illustration of woman holding files'}
              /> */}

              <LinkV2 href={paths.home}>
                <Button
                  preTextIcon="arrowBack"
                  preTextIconType="filled"
                  size="small"
                  type="button"
                  variant="text"
                  truncate
                >
                  {'Til baka'}
                </Button>
              </LinkV2>
            </Box>
          </GridColumn>
          <GridColumn span={['1/1', '1/1', '4/6', '7/12', '7/12']}>
            <Breadcrumbs
              items={[
                { title: 'Ísland.is', href: '/' },
                { title: 'Alþingi', href: paths.home },
                {
                  title: 'Þingstörf',
                  href: paths.thingstorf,
                  isCurrentPage: true,
                },
              ]}
            />
            <Text as="h1" variant="h1" marginY={2}>
              {'Þingmál'}
            </Text>
            <Text variant="intro">
              {
                'Non scelerisque risus amet tincidunt. Sit sed quis cursus hendrerit nulla egestas interdum.'
              }
              <Webreader readId={undefined} readClass="rs_read" />
            </Text>
          </GridColumn>
        </GridRow>
      </GridContainer>
    </Box>
  )
}

export default SearchHeader
