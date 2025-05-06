import React from 'react'
import { useWindowSize } from 'react-use'

import { Box, Hidden, IconProps, Text } from '@island.is/island-ui/core'
import { theme } from '@island.is/island-ui/theme'
import { withMainLayout } from '@island.is/web/layouts/main'
import { Screen } from '@island.is/web/types'

import Layout from '../Layout'
import { Video } from '../components/Video/Video'
import { paths } from '@island.is/web/utils/mockData'
import DetailPanel from '../components/Panels/DetailPanel'
import LinkPanel from '../components/Panels/LinkPanel'

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
        <Box>
          <DetailPanel
            backgroundColor={'blue100'}
            items={detailPanelData}
            title="Upptaka"
          />
          <LinkPanel backgroundColor="purple100" links={linkPanelData} />
        </Box>
      }
    >
      <Text variant="h1" marginBottom={2} marginTop={2}>
        Þingfundur 34
      </Text>
      <Video
        url={'https://www.youtube.com/embed/fw7yXuwc2bE?si=2kx6pEzmDP6OjTqR'}
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
