import React from 'react'
import { useRouter } from 'next/router'

import { Box, Button } from '@island.is/island-ui/core'

interface GoBackProps {
  href?: string
  title?: string
}

const GoBack: React.FC<GoBackProps> = ({ href, title }) => {
  const router = useRouter()

  const handleGoBack = () => {
    href
      ? router.push(href) // If href is provided, navigate to that URL
      : router.back()
  }

  return (
    <Box display="flex" height="full" marginBottom={1}>
      <Button
        preTextIcon="arrowBack"
        preTextIconType="filled"
        size="small"
        type="button"
        variant="text"
        onClick={handleGoBack}
      >
        {title ?? 'Til baka'}
      </Button>
    </Box>
  )
}

export default GoBack
