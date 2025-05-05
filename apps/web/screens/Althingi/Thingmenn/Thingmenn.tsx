import React from 'react'

import { Box } from '@island.is/island-ui/core'
import { CustomPageUniqueIdentifier } from '@island.is/shared/types'
import { withMainLayout } from '@island.is/web/layouts/main'

import {
  CustomScreen,
  withCustomPageWrapper,
} from '../../CustomPage/CustomPageWrapper'
import Layout from '../Layout'

const Thingmenn: CustomScreen<ThingmennProps> = ({ title }) => {
  return (
    <Layout title={title}>
      <Box>MAIN</Box>
    </Layout>
  )
}

interface ThingmennProps {
  title: string
}

Thingmenn.getProps = async () => {
  return {
    title: 'Þingmenn',
  }
}

export default withMainLayout(
  withCustomPageWrapper(
    CustomPageUniqueIdentifier.OfficialJournalOfIceland,
    Thingmenn,
  ),
)
