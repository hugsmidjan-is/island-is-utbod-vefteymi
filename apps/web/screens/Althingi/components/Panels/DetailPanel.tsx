import React from 'react'

import { Box, Divider, Stack, Text } from '@island.is/island-ui/core'

interface DetailPanelProps {
  backgroundColor: 'blue100' | 'purple100'
  title?: string
  subtitle?: string
  items: {
    label: string
    value: string
  }[]
}

const DetailPanel: React.FC<DetailPanelProps> = ({
  title,
  items,
  subtitle,
  backgroundColor,
}) => {
  return (
    <Box background={backgroundColor} padding={3} borderRadius="large">
      <Stack space={2}>
        {title && (
          <>
            <Box>
              <Text variant="h4" color="blueberry600">
                {title}
              </Text>
            </Box>
            <Divider />
          </>
        )}
        {subtitle && (
          <Text variant="eyebrow" color="blueberry600">
            {subtitle}
          </Text>
        )}
        {items.map((item, index) => (
          <Box key={`panel-item-${index}-${item.label}`}>
            <Text fontWeight="semiBold" color="blueberry600">
              {item.label}
            </Text>
            <Text
              variant="medium"
              color="blueberry600"
              fontWeight={item.label === '' ? 'light' : 'regular'}
            >
              {item.value}
            </Text>
          </Box>
        ))}
      </Stack>
    </Box>
  )
}

export default DetailPanel
