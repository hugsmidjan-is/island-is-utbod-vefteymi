import React from 'react'
import { LinkV2, Table as T, Text } from '@island.is/island-ui/core'
import { Locale } from '@island.is/shared/types'
import { OfficialJournalOfIcelandAdvertsResponse } from '@island.is/web/graphql/schema'
import { linkResolver, useLinkResolver } from '@island.is/web/hooks'
import { SearchItem } from '@island.is/web/utils/types'

interface ListViewProps {
  data: Array<SearchItem>
}

const ListView: React.FC<ListViewProps> = ({ data }) => {
  return (
    <T.Table>
      <T.Head>
        <T.Row>
          <T.HeadData width={'10%'}>Útgáfa</T.HeadData>
          <T.HeadData width={'10%'}>Deild</T.HeadData>
          <T.HeadData width={'10%'}>Númer</T.HeadData>
          <T.HeadData width={'40%'}>Heiti</T.HeadData>
          <T.HeadData width={'30%'}>Stofnun</T.HeadData>
        </T.Row>
      </T.Head>
      <T.Body>
        {data.map((item) => (
          <T.Row key={'1'}>
            <T.Data>
              <Text variant="small" whiteSpace="nowrap">
                {item.date}
              </Text>
            </T.Data>
            <T.Data>
              <Text variant="small" whiteSpace="nowrap">
                {item.title}
              </Text>
            </T.Data>
            <T.Data>
              <Text variant="small" whiteSpace="nowrap">
                {item.description}
              </Text>
            </T.Data>
            <T.Data>
              <Text variant="small" color="blue400">
                <LinkV2
                  href={item.link}
                  underline="normal"
                  color="blue400"
                  underlineVisibility="always"
                >
                  {'Sjá meira??'}
                </LinkV2>
              </Text>
            </T.Data>
            <T.Data>
              <Text variant="small">{'title'}</Text>
            </T.Data>
          </T.Row>
        ))}
      </T.Body>
    </T.Table>
  )
}

export default ListView
