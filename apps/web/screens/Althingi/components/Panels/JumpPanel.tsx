import React from 'react'

import { Box, Divider, Stack, Text } from '@island.is/island-ui/core'

interface JumpPanelProps {
  eyebrow?: string
  title?: string
  items: {
    label: string
    active?: boolean
    subItems?: string[]
  }[]
}

const JumpPanel: React.FC<JumpPanelProps> = ({ title, eyebrow, items }) => {
  const goToId = (id: string) => {
    if (window) {
      window.location.href = `#${id}`
    }
  }
  return (
    <Box background={'purple100'} padding={3} borderRadius="large">
      <Stack space={2}>
        {title && (
          <>
            <Box>
              {eyebrow && (
                <Text
                  variant="eyebrow"
                  color="foregroundBrandSecondaryContrast"
                >
                  {eyebrow}
                </Text>
              )}
              <Text variant="h4" color="foregroundBrandSecondaryContrast">
                {title}
              </Text>
            </Box>
            <Divider />
          </>
        )}
        {items.map((item, index) => (
          <Box key={`panel-item-${index}-${item.label}`}>
            <Text
              fontWeight={item.active ? 'semiBold' : 'regular'}
              color={
                item.active
                  ? 'foregroundBrandSecondary'
                  : 'foregroundBrandSecondaryContrast'
              }
              marginBottom={1}
            >
              {item.label}
            </Text>
            <Box
              paddingLeft={2}
              borderLeftWidth="standard"
              borderColor="purple200"
            >
              {item.subItems?.map((subItem, subIndex) => (
                <Box
                  as="span"
                  onClick={() => goToId(subItem)}
                  style={{ cursor: 'pointer' }}
                >
                  <Text
                    variant="medium"
                    key={`subitem-${subIndex}`}
                    color="foregroundBrandSecondaryContrast"
                    marginBottom={1}
                  >
                    {subItem}
                  </Text>
                </Box>
              ))}
            </Box>
          </Box>
        ))}
      </Stack>
    </Box>
  )
}

export default JumpPanel
