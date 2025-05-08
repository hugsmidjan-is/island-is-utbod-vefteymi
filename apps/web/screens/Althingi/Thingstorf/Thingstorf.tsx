import React from 'react'
import { useRouter } from 'next/router'

import { ActionCard, Box, Stack, Text } from '@island.is/island-ui/core'
import { SLICE_SPACING } from '@island.is/web/constants'
import { withMainLayout } from '@island.is/web/layouts/main'
import { Screen } from '@island.is/web/types'
import {
  mockAboutArticles,
  mockThingstorfArticles,
  paths,
} from '@island.is/web/utils/mockData'

import GoBack from '../components/GoBack/GoBack'
import NavigationSidebar from '../components/NavigationSidebar'
import Layout from '../Layout'

const Thingstorf: Screen<ThingstorfProps> = ({ title }) => {
  const router = useRouter()

  const data = mockThingstorfArticles

  return (
    <Layout
      title={title}
      sidebar={
        <Stack space={2}>
          <GoBack />
          <NavigationSidebar
            title="Þingstörf"
            items={[
              {
                title: 'Þingmál',
                href: paths.thingmal,
                accordion: true,
                active: false,
              },
              {
                title: 'Þingfundir og ræður',
                href: paths.thingfundir,
                active: router.pathname === paths.thingfundir,
                items: [
                  {
                    title: 'Fundargerðir og upptökur',
                    href: paths.upptokur,
                    active: router.pathname === paths.upptokur,
                  },
                  {
                    title: 'Ræður',
                    href: 'https://mbl.is',
                  },
                  {
                    title: 'Dagskrá þingfundar',
                    href: '/',
                  },
                  {
                    title: 'Starfsáætlun Alþingis',
                    href: '/',
                  },
                  {
                    title: 'Mælendaskrá',
                    href: '/',
                  },
                ],
              },
              {
                title: 'Yfirlit og úttektir',
                href: '/',
              },
              {
                title: 'Tilkynningar',
                href: '/',
              },
            ]}
          />
        </Stack>
      }
      breadcrumbs={[
        {
          title: 'Þingstörf',
          href: paths.thingstorf,
          isCurrentPage: true,
        },
      ]}
    >
      <Stack space={SLICE_SPACING}>
        <section>
          <Box marginTop={2}>
            <Text variant="h1" as="h2">
              {title}
            </Text>
            <Text variant="intro" as="p" paddingTop={3} marginBottom={3}>
              Samkvæmt stjórnarskrá Íslands verða lagafrumvörp að fara í gegnum
              þrjár umræður á þingi áður en þau eru samþykkt eða felld þar.
              Frumvarpið hlýtur svo endanlega gildi ef forseti Íslands skrifar
              undir það. Fyrst er frumvarp lagt fram og rætt almennt, síðan fara
              þau í umsögn til þingnefnda.
            </Text>
          </Box>
        </section>
        <section>
          <Stack space={3}>
            {data.map((article) => (
              <ActionCard
                heading={article.title}
                text={article.description}
                cta={{
                  label: 'Nánar',
                  onClick: () => router.push(article.url),
                  variant: 'text',
                }}
              />
            ))}
          </Stack>
        </section>
      </Stack>
    </Layout>
  )
}

interface ThingstorfProps {
  title: string
}

Thingstorf.getProps = async () => {
  return {
    title: 'Þingstörf',
  }
}

export default withMainLayout(Thingstorf, { showFooter: false })
