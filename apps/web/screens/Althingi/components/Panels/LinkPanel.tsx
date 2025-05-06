import React from 'react'
import { useRouter } from 'next/router'

import { Box, Button, IconProps, Stack } from '@island.is/island-ui/core'

interface DetailPanelProps {
  backgroundColor: 'blue100' | 'purple100'
  links: {
    label: string
    href?: string
    action?: () => void
    external?: boolean
    icon: IconProps['icon']
  }[]
}

const LinkPanel: React.FC<DetailPanelProps> = ({ links, backgroundColor }) => {
  const router = useRouter()
  return (
    <Box
      background={backgroundColor}
      padding={3}
      borderRadius="large"
      marginBottom={3}
    >
      <Stack space={2}>
        {links.map((link, index) => (
          <Box key={`panel-link-${index}-${link.label}`}>
            <Button
              type="text"
              variant="text"
              size="small"
              icon={link.icon}
              iconType="outline"
              onClick={() =>
                link.external ? link.action : router.push(link.href ?? '/')
              }
            >
              {link.label}
            </Button>
          </Box>
        ))}
      </Stack>
    </Box>
  )
}

export default LinkPanel
