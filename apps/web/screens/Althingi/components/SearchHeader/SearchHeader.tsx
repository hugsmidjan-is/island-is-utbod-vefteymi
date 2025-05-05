import {
  GridContainer,
  GridRow,
  GridColumn,
  Box,
  Text,
  Inline,
  Input,
  Tag,
  Breadcrumbs,
} from '@island.is/island-ui/core'
import { Webreader } from '@island.is/web/components'
import React from 'react'
import * as styles from './SearchHeader.css'

interface SearchHeaderProps {
  title: string
  onSearch: (query: string) => void
}

const SearchHeader: React.FC<SearchHeaderProps> = ({ title, onSearch }) => {
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onSearch(event.target.value)
  }

  return (
    <Box>
      <GridContainer>
        <GridRow>
          <GridColumn span={['0', '0', '2/6', '3/12', '3/12']} hiddenBelow="md">
            <Box
              display="flex"
              height="full"
              justifyContent="center"
              alignItems="center"
            >
              <img
                src={'/assets/files.svg'}
                className={styles.image}
                alt={'illustration of woman holding files'}
              />
            </Box>
          </GridColumn>
          <GridColumn
            paddingTop={[6, 6, 6, 8, 8]}
            span={['1/1', '1/1', '4/6', '7/12', '7/12']}
          >
            <Breadcrumbs
              items={[
                { title: 'Ísland.is', href: '/' },
                { title: 'Alþingi', href: '/s/althingi' },
                { title: 'Þingmál', href: '/s/althingi/thingmal' },
              ]}
            />
            <Text as="h1" variant="h1" marginY={2}>
              {'Titill'}
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
