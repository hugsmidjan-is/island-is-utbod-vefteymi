import React from 'react'
import { useRouter } from 'next/router'

import { ActionCard, Box, Stack, Text } from '@island.is/island-ui/core'
import { SLICE_SPACING } from '@island.is/web/constants'
import { withMainLayout } from '@island.is/web/layouts/main'
import { Screen } from '@island.is/web/types'
import { mockAboutArticles, paths } from '@island.is/web/utils/mockData'

import GoBack from '../components/GoBack/GoBack'
import NavigationSidebar from '../components/NavigationSidebar'
import Layout from '../Layout'
import * as styles from './About.css'

const About: Screen<AboutProps> = ({ title }) => {
  const router = useRouter()

  const data = mockAboutArticles

  return (
    <Layout
      title={title}
      sidebar={
        <Stack space={2}>
          <GoBack />
          <NavigationSidebar
            title="Um Alþingi"
            items={[
              {
                title: 'Upplýsingar um Alþingi',
                href: paths.umAlthingi,
                accordion: true,
                active: router.pathname === paths.umAlthingi,
              },
              {
                title: 'Skrifstofa Alþingis',
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
                title: 'Útgefið efni',
                href: paths.utgefidEfni,
                accordion: true,
                active: router.pathname === paths.utgefidEfni,
              },
              {
                title: 'Stofnanir, stjórnir og nefndir',
                href: paths.home,
                accordion: true,
                active: router.pathname === paths.thingfundir,
              },
              {
                title: 'Alþjóðastarf',
                href: paths.home,
                accordion: true,
                active: router.pathname === paths.thingfundir,
              },
              {
                title: 'Fræðslu- og kynningarefni',
                href: paths.home,
                accordion: true,
                active: router.pathname === paths.thingfundir,
              },
              {
                title: 'Heimsóknir í Alþingishúsið',
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
          title: 'Um Alþingi',
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
              Alþingi er æðsti handhafi löggjafarvalds á Íslandi og samkvæmt
              þingræðisreglunni bera ráðherrar ábyrgð gagnvart Alþingi og
              ríkisstjórnin verður að njóta stuðnings meirihluta þingheims.
            </Text>
            <Box
              display="flex"
              height="full"
              justifyContent="center"
              alignItems="center"
            >
              <img
                src={'/assets/althingi-hus.png'}
                className={styles.image}
                alt={'Alþingishúsið'}
              />
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

interface AboutProps {
  title: string
}

About.getProps = async () => {
  return {
    title: 'Upplýsingar um Alþingi',
  }
}

export default withMainLayout(About, { showFooter: false })
