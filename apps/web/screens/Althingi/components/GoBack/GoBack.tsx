import React from 'react'
import { useRouter } from 'next/router'

import { Box, Button } from '@island.is/island-ui/core'

const GoBack: React.FC = () => {
  const router = useRouter()

  const handleGoBack = () => {
    router.back()
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
        {'Til baka'}
      </Button>
    </Box>
  )
}

export default GoBack
