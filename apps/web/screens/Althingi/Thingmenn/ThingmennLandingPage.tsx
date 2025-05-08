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
import { mockThingmennLanding, paths } from '@island.is/web/utils/mockData'

import GoBack from '../components/GoBack/GoBack'
import NavigationSidebar from '../components/NavigationSidebar'
import Layout from '../Layout'
import * as styles from './Thingmenn.css'

const ThingmennLandingPage: Screen<ThingmennLandingPageProps> = ({ title }) => {
  const router = useRouter()

  const data = mockThingmennLanding

  return (
    <Layout
      title={title}
      sidebar={
        <Stack space={2}>
          <GoBack />

          <NavigationSidebar
            title="Þingmenn"
            items={[
              {
                title: 'Alþingismenn',
                href: paths.thingmenn,
                accordion: true,
                items: [{ title: 'Þingmenn', href: paths.thingmenn }],
                active: router.pathname === paths.thingmenn,
              },
              {
                title: 'Þingflokkar',
                href: paths.home,
                accordion: true,
                active: router.pathname === paths.thingfundir,
              },
              {
                title: 'Forsetar Alþingis',
                href: paths.home,
                accordion: true,
                active: router.pathname === paths.thingfundir,
              },
              {
                title: 'Ráðherrar og ríkisstjórn',
                href: paths.home,
                accordion: true,
                active: router.pathname === paths.thingfundir,
              },
              {
                title: 'Lagasafn',
                href: paths.home,
                accordion: true,
                active: router.pathname === paths.thingfundir,
              },
              {
                title: 'Ályktanir Alþingis',
                href: paths.home,
                accordion: true,
                active: router.pathname === paths.thingfundir,
              },
              {
                title: 'Þingtímabil',
                href: paths.home,
                accordion: true,
                active: router.pathname === paths.thingfundir,
              },
              {
                title: 'Kjördæmi',
                href: paths.home,
                accordion: true,
                active: router.pathname === paths.thingfundir,
              },
            ]}
          />
        </Stack>
      }
      breadcrumbs={[
        {
          title: 'Þingmenn',
          href: paths.thingmennLanding,
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
              Hér má finna lista yfir þingmenn,upplýsingar um þingflokka og
              kjördæmi. Hagsmunaskráningu, málalista, ræðulista og atkvæðaskrá
              þingmanna.
            </Text>
          </Box>
          <Box
            display="flex"
            height="full"
            justifyContent="center"
            alignItems="flexStart"
            flexDirection={'column'}
          >
            <img
              src={'/assets/thingmenn.jpg'}
              className={styles.image}
              alt={'Alþingissalurinn.'}
            />
            <Text variant="medium" fontWeight="light" marginTop={1}>
              Alþingissalurinn.
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
                <Text variant="h3" marginBottom={1}>
                  Á Alþingi
                </Text>
                <Text>Á 156. þingi, 2025</Text>
              </Box>
              <Icon icon="arrowForward" type="outline" color="blue400" />
            </Box>
            <GridRow>
              <GridColumn span={['4/12']}>
                <Box
                  borderRightWidth="standard"
                  borderColor="blue200"
                  padding={3}
                  paddingLeft={0}
                >
                  <Text variant="small">Alþingismenn</Text>
                  <Text variant="h3" as="p">
                    63
                  </Text>
                </Box>
              </GridColumn>
              <GridColumn span={['4/12']}>
                <Box
                  borderRightWidth="standard"
                  borderColor="blue200"
                  padding={3}
                  paddingLeft={0}
                >
                  <Text variant="small">Ráðherrar</Text>
                  <Text variant="h3" as="p">
                    11
                  </Text>
                </Box>
              </GridColumn>
              <GridColumn span={['4/12']}>
                <Box borderColor="blue200" padding={3} paddingLeft={0}>
                  <Text variant="small">Varaþingmenn</Text>
                  <Text variant="h3" as="p">
                    7
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

interface ThingmennLandingPageProps {
  title: string
}

ThingmennLandingPage.getProps = async () => {
  return {
    title: 'Þingmenn',
  }
}

export default withMainLayout(ThingmennLandingPage, { showFooter: false })
