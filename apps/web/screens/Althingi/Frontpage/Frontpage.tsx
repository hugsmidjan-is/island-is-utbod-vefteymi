import React from 'react'

import {
  ActionCard,
  Box,
  Divider,
  Stack,
  Text,
} from '@island.is/island-ui/core'
import { SLICE_SPACING } from '@island.is/web/constants'
import { CustomPageUniqueIdentifier } from '@island.is/web/graphql/schema'
import { withMainLayout } from '@island.is/web/layouts/main'

import {
  CustomScreen,
  withCustomPageWrapper,
} from '../../CustomPage/CustomPageWrapper'
import { CTA } from '../components/CTA'
import Layout from '../Layout'

const Frontpage: CustomScreen<FrontpageProps> = ({ title }) => {
  return (
    <Layout title={title}>
      <Stack space={SLICE_SPACING}>
        <section>
          <Box marginTop={2}>
            <Text variant="h1">{title}</Text>
            <Text variant="intro" as="p" paddingTop={3}>
              Þetta er ótrúlega flottur texti um Alþingi. Þetta er ótrúlega
              flottur texti um Alþingi. Þetta er ótrúlega flottur texti um
              Alþingi. Þetta er ótrúlega flottur texti um Alþingi. Þetta er
              ótrúlega flottur texti um Alþingi. Þetta er ótrúlega flottur texti
              um Alþingi.{' '}
            </Text>
          </Box>
        </section>
        <Divider />
        <section>
          <CTA
            title="CTA"
            content="Cta texti"
            image={{
              url: 'https://www.althingi.is/media/uncategorized/medium/utsendingar.jpg',
            }}
          />
          <CTA
            title="CTA"
            content="Cta texti"
            reverse
            image={{
              url: 'https://www.althingi.is/media/uncategorized/medium/utsendingar.jpg',
            }}
          />
        </section>
        <section>
          <ActionCard
            cta={{
              label: 'Hérna er smá texti',
              iconType: 'outline',
              variant: 'text',
            }}
            text="Hérna er smá texti"
            heading="Hérna er smá texti"
            eyebrow="Hérna er smá texti"
            children={<Box>Börn?</Box>}
          />
        </section>
        <section></section>
      </Stack>
    </Layout>
  )
}

interface FrontpageProps {
  title: string
}

Frontpage.getProps = async () => {
  return {
    title: 'Alþingi',
  }
}

export default withMainLayout(
  withCustomPageWrapper(
    CustomPageUniqueIdentifier.OfficialJournalOfIceland,
    Frontpage,
  ),
  { showFooter: false },
)
