import React from 'react'

import { Stack } from '@island.is/island-ui/core'
import { SearchItem } from '@island.is/web/utils/types'

import GridCard from './GridCard'

interface GridViewProps {
  data: Array<SearchItem>
}

const GridView: React.FC<GridViewProps> = ({ data }) => {
  return (
    <Stack space={2}>
      {data.map((item) => (
        <GridCard item={item} />
      ))}
    </Stack>
  )
}

export default GridView
