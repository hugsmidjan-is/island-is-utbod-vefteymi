import React from 'react'
import { useRouter } from 'next/router'

import { ActionCard, Box, Stack, Text } from '@island.is/island-ui/core'
import { SLICE_SPACING } from '@island.is/web/constants'
import { withMainLayout } from '@island.is/web/layouts/main'
import { Screen } from '@island.is/web/types'
import {
  mockAboutArticles,
  mockAboutArticlesEN,
  paths,
} from '@island.is/web/utils/mockData'

import GoBack from '../components/GoBack/GoBack'
import NavigationSidebar from '../components/NavigationSidebar'
import Layout from '../Layout'
import * as styles from './About.css'

const AboutEN: Screen<AboutENProps> = ({ title }) => {
  const router = useRouter()

  const data = mockAboutArticlesEN

  return (
    <Layout
      title={title}
      sidebar={
        <Stack space={2}>
          <GoBack title="Back" />
          <NavigationSidebar
            title="About Alþingi"
            items={[
              {
                title: 'About the parliament',
                href: paths.umAlthingiEN,
                accordion: true,
                active: router.pathname === paths.umAlthingiEN,
              },
              {
                title: 'Office of the Parliament',
                href: paths.home,
                accordion: true,
                active: router.pathname === paths.thingfundir,
              },
              {
                title: 'Resolutions',
                href: paths.home,
                accordion: true,
                active: router.pathname === paths.thingfundir,
              },
              {
                title: 'Published material',
                href: paths.utgefidEfni,
                accordion: true,
                active: router.pathname === paths.utgefidEfni,
              },
              {
                title: 'Boards and committees',
                href: paths.home,
                accordion: true,
                active: router.pathname === paths.thingfundir,
              },
              {
                title: 'International relations',
                href: paths.home,
                accordion: true,
                active: router.pathname === paths.thingfundir,
              },
              {
                title: 'Educational material',
                href: paths.home,
                accordion: true,
                active: router.pathname === paths.thingfundir,
              },
              {
                title: 'Visits to the Parliament',
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
          title: 'About Alþingi',
          href: paths.umAlthingi,
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
              The Parliament (Alþingi) is the highest authority of the
              legislative power in Iceland, and according to the principle of
              parliamentary democracy, ministers are responsible to the Alþingi,
              and the government must have the support of the majority in
              Parliament.{' '}
            </Text>
            <Box
              display="flex"
              height="full"
              justifyContent="center"
              alignItems="flexStart"
              flexDirection={'column'}
            >
              <img
                src={'/assets/althingi-hus.png'}
                className={styles.image}
                alt={'Alþingishúsið'}
              />
              <Text variant="medium" fontWeight="light" marginTop={1}>
                The Parliament House, which stands on Austurvöllur square, was
                built in 1880–81.
              </Text>
            </Box>
          </Box>
        </section>
        <section>
          <Stack space={3}>
            {data.map((article) => (
              <ActionCard
                heading={article.title}
                text={article.description}
                cta={{
                  label: 'More',
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

interface AboutENProps {
  title: string
}

AboutEN.getProps = async () => {
  return {
    title: 'About Alþingi',
  }
}

export default withMainLayout(AboutEN, { showFooter: false })
