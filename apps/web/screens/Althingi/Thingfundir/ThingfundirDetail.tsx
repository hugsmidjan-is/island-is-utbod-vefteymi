import React from 'react'
import { useWindowSize } from 'react-use'

import {
  Box,
  Button,
  Hidden,
  IconProps,
  Stack,
  Tag,
  Text,
} from '@island.is/island-ui/core'
import { theme } from '@island.is/island-ui/theme'
import { withMainLayout } from '@island.is/web/layouts/main'
import { Screen } from '@island.is/web/types'

import Layout from '../Layout'
import { Video } from '../components/Video/Video'
import { paths, videoTag, videoTranscript } from '@island.is/web/utils/mockData'
import DetailPanel from '../components/Panels/DetailPanel'
import LinkPanel from '../components/Panels/LinkPanel'
import GoBack from '../components/GoBack/GoBack'

const ThingfundirDetail: Screen<ThingfundirDetailProps> = ({ title }) => {
  const { width } = useWindowSize()
  const isMobile = width < theme.breakpoints.md

  const detailPanelData = [
    { label: 'Þingsnúmer', value: '156.löggjafarþing 2025' },
    {
      label: 'Þingfundur',
      value: '34',
    },
    {
      label: 'Dagsetning',
      value: '12.febrúar 2025, kl 14:00',
    },
  ]
  const linkPanelData = [
    {
      label: 'Prenta síðu',
      action: () => window.print(),
      external: false,
      icon: 'print' as IconProps['icon'],
    },
    {
      label: 'Afrita hlekk',
      action: () => window.print(),
      external: false,
      icon: 'link' as IconProps['icon'],
    },
    {
      label: 'Hljóðskrá',
      action: () => window.print(),
      external: false,
      icon: 'link' as IconProps['icon'],
    },
    {
      label: 'Myndbandsskrá',
      action: () => window.print(),
      external: false,
      icon: 'link' as IconProps['icon'],
    },
  ]
  return (
    <Layout
      title={'Logi Einarsson'}
      breadcrumbs={[
        {
          title: 'Þingstörf',
          href: paths.thingstorf,
        },
        {
          title: 'Þingfundir og ræður',
          href: paths.thingfundir,
          isCurrentPage: true,
        },
      ]}
      sidebar={
        <Stack space={2}>
          <GoBack />
          <DetailPanel
            backgroundColor={'blue100'}
            items={detailPanelData}
            title="Upptaka"
          />
          <DetailPanel
            backgroundColor={'purple100'}
            subtitle="Tengt efni"
            items={[
              {
                label: '',
                value: 'Fundargerð',
              },
              {
                label: '',
                value: 'Dagsskrá',
              },
              {
                label: '',
                value: 'Ræður',
              },
            ]}
          />

          <Button variant="utility" fluid icon="download" iconType="outline">
            Hlaða niður vídeóskrá
          </Button>
          <Button variant="utility" fluid icon="download" iconType="outline">
            Hlaða niður hljóðskrá
          </Button>
          <Button variant="utility" fluid icon="link" iconType="outline">
            Sækja embed kóða
          </Button>
        </Stack>
      }
    >
      <Text variant="h1" marginBottom={2} marginTop={2}>
        34. þingfundur
      </Text>
      <Text marginBottom={3} marginTop={2}>
        34. þingfundur á 156. löggjafarþingi 2025.
      </Text>

      <Video
        url={'https://www.youtube.com/embed/fw7yXuwc2bE?si=2kx6pEzmDP6OjTqR'}
        transcript={{
          items: videoTranscript,
          contentLabel: 'Dagskrá 35. þingfundar',
          title: 'þriðjudaginn 6. maí kl. 13:30',
        }}
      />
      <Hidden above="sm">
        <Box marginTop={5} marginBottom={2}>
          <DetailPanel items={detailPanelData} backgroundColor="blue100" />
        </Box>
        <Box>
          <LinkPanel backgroundColor={'purple100'} links={linkPanelData} />
        </Box>
      </Hidden>
    </Layout>
  )
}

interface ThingfundirDetailProps {
  title: string
}

ThingfundirDetail.getProps = async () => {
  return {
    title: 'Þingmenn',
  }
}

export default withMainLayout(ThingfundirDetail, { showFooter: false })
