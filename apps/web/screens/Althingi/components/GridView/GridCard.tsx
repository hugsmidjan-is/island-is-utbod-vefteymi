import React from 'react'

import { Box, Icon, Inline, LinkV2, Tag, Text } from '@island.is/island-ui/core'
import { SearchItem } from '@island.is/web/utils/types'

interface GridCardProps {
  item: SearchItem
}

const GridCard: React.FC<GridCardProps> = ({ item }) => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      rowGap={1}
      background={'white'}
      padding={3}
      borderRadius="large"
    >
      <Box display="flex">
        <Text variant="eyebrow" color="blueberry400">
          {item.eyebrow}
        </Text>
      </Box>

      <Box>
        <Text variant="h3">{item.title}</Text>
      </Box>

      <Box>
        <Text>{item.description}</Text>
      </Box>

      <Box
        display="flex"
        flexWrap="wrap"
        justifyContent="spaceBetween"
        marginTop={2}
        rowGap={1}
      >
        <Box display="flex" rowGap={1} columnGap={1} flexWrap="wrap">
          {item.tags?.map((tag) => (
            <Tag
              key={tag.label}
              variant={tag.color}
              outlined={tag.outlined}
              disabled
            >
              {tag.label}
            </Tag>
          ))}
        </Box>

        <LinkV2
          href={item.link}
          color="blue400"
          underline="normal"
          underlineVisibility="always"
        >
          <Inline>
            <Text as="span" fontWeight="medium" variant="small">
              {'Skoða nánar'}
            </Text>
            <Box
              marginLeft={1}
              display="flex"
              alignItems="center"
              justifyContent="center"
              height="full"
            >
              <Icon icon="arrowForward" type="outline" size="small" />
            </Box>
          </Inline>
        </LinkV2>
      </Box>
    </Box>
  )
}

export default GridCard
