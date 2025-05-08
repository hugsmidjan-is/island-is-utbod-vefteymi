import React from 'react'
import { useRouter } from 'next/router'

import {
  ActionCard,
  Box,
  GridColumn,
  GridRow,
  Icon,
  Stack,
  Text,
} from '@island.is/island-ui/core'
import { SLICE_SPACING } from '@island.is/web/constants'
import { withMainLayout } from '@island.is/web/layouts/main'
import { Screen } from '@island.is/web/types'
import { mockThingstorfArticles, paths } from '@island.is/web/utils/mockData'

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
                items: [
                  {
                    title: 'Þingmálaskrá',
                    href: paths.thingmal,
                    active: router.pathname === paths.thingmal,
                  },
                  {
                    title: 'Lagafrumvörp',
                    href: paths.thingmalLagafrumvarp,
                  },
                  {
                    title: 'Þingsályktunartillöfur',
                    href: '/',
                  },
                  {
                    title: 'Fyrirspurnir',
                    href: '/',
                  },
                  {
                    title: 'Staða mála',
                    href: '/',
                  },
                ],
              },
              {
                title: 'Þingfundir og ræður',
                href: paths.thingfundir,
                active: router.pathname === paths.thingfundir,
                accordion: true,
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
                accordion: true,
                items: [
                  {
                    title: 'Yfirlit yfir þingstörf',
                    href: '/',
                  },
                  {
                    title: 'Samantektir',
                    href: '/',
                  },
                  {
                    title: 'Skýrslur',
                    href: '/',
                  },
                  {
                    title: 'Umsagnir',
                    href: '/',
                  },
                ],
              },
              {
                title: 'Tilkynningar',
                href: '/',
                accordion: true,
                items: [
                  {
                    title: 'Yfirlit yfir þingstörf',
                    href: '/',
                  },
                  {
                    title: 'Samantektir',
                    href: '/',
                  },
                  {
                    title: 'Skýrslur',
                    href: '/',
                  },
                  {
                    title: 'Umsagnir',
                    href: '/',
                  },
                ],
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
          <Box
            border="standard"
            borderColor="blue200"
            borderRadius="large"
            padding={3}
          >
            <Box
              display="flex"
              justifyContent="spaceBetween"
              alignItems={'center'}
              marginBottom={4}
            >
              <Box>
                <Text color="blue400" variant="h3" marginBottom={1}>
                  Staða mála
                </Text>
                <Text>Á 156. þingi, 2025</Text>
              </Box>
              <Icon icon="arrowForward" type="outline" color="blue400" />
            </Box>
            <GridRow>
              <GridColumn span={['3/12']}>
                <Box
                  borderRightWidth="standard"
                  borderColor="blue200"
                  padding={3}
                  paddingLeft={0}
                >
                  <Text variant="small">Samþykkt</Text>
                  <Text variant="h3" as="p">
                    4
                  </Text>
                </Box>
              </GridColumn>
              <GridColumn span={['3/12']}>
                <Box
                  borderRightWidth="standard"
                  borderColor="blue200"
                  padding={3}
                  paddingLeft={0}
                >
                  <Text variant="small">Bíða 1. umræðu</Text>
                  <Text variant="h3" as="p">
                    40
                  </Text>
                </Box>
              </GridColumn>
              <GridColumn span={['3/12']}>
                <Box
                  borderRightWidth="standard"
                  borderColor="blue200"
                  padding={3}
                  paddingLeft={0}
                >
                  <Text variant="small">Í nefnd</Text>
                  <Text variant="h3" as="p">
                    60
                  </Text>
                </Box>
              </GridColumn>
              <GridColumn span={['3/12']}>
                <Box borderColor="blue200" padding={3} paddingLeft={0}>
                  <Text variant="small">Bíða eftir 2.umræðu</Text>
                  <Text variant="h3" as="p">
                    12
                  </Text>
                </Box>
              </GridColumn>
            </GridRow>
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
