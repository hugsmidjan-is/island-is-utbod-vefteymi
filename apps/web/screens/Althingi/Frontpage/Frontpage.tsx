import React from 'react'
import { useWindowSize } from 'react-use'

import {
  Box,
  Button,
  CategoryCard,
  Divider,
  GridColumn,
  GridContainer,
  GridRow,
  InfoCardGrid,
  LinkV2,
  Stack,
  Tag,
  Text,
} from '@island.is/island-ui/core'
import { theme } from '@island.is/island-ui/theme'
import { SLICE_SPACING } from '@island.is/web/constants'
import { CustomPageUniqueIdentifier } from '@island.is/web/graphql/schema'
import { withMainLayout } from '@island.is/web/layouts/main'
import {
  mockInfoCards,
  paths,
  videoTag,
  videoTranscript,
} from '@island.is/web/utils/mockData'

import {
  CustomScreen,
  withCustomPageWrapper,
} from '../../CustomPage/CustomPageWrapper'
import Layout from '../Layout'
import * as styles from './Frontpage.css'
import { useRouter } from 'next/router'
import { Screen } from '@island.is/web/types'
import { Video } from '../components/Video/Video'

const Frontpage: Screen<FrontpageProps> = ({ title }) => {
  const { width } = useWindowSize()
  const isMobile = width < theme.breakpoints.md
  const router = useRouter()
  return (
    <Layout
      title={title}
      mainLayout={
        <>
          {/* Á döfinni */}
          <Box
            className="rs_read"
            background="blue100"
            width="full"
            padding={6}
          >
            <Box width="full" display={'flex'} justifyContent={'spaceBetween'}>
              <Text variant="h4" as="h3">
                {'Á döfinni'}
              </Text>
              <Box display="flex" justifyContent="center">
                <LinkV2 href={'/s/althingi'}>
                  <Button
                    icon="arrowForward"
                    iconType="filled"
                    size="small"
                    type="button"
                    variant="text"
                    truncate
                  >
                    {'Sjá allt'}
                  </Button>
                </LinkV2>
              </Box>
            </Box>
            <Box
              display="flex"
              flexWrap={'wrap'}
              rowGap={1}
              columnGap={1}
              marginTop={3}
              marginBottom={3}
            >
              <Tag
                disabled={true}
                variant="blue"
                outlined={false}
                active
                href="/s/althingi"
              >
                {'Allt'}
              </Tag>
              <Tag
                variant="white"
                outlined={true}
                whiteBackground
                href="/s/althingi"
              >
                {'Tilkynningar'}
              </Tag>
              <Tag
                variant="white"
                outlined={true}
                whiteBackground
                href="/s/althingi"
              >
                {'Lög og ályktanir'}
              </Tag>
              <Tag
                variant="white"
                outlined={true}
                whiteBackground
                href={paths.thingfundir}
              >
                {'Ræður'}
              </Tag>
              <Tag
                variant="white"
                outlined={true}
                whiteBackground
                href="/s/althingi"
              >
                {'Þingskjöl'}
              </Tag>
              <Tag
                variant="white"
                outlined={true}
                whiteBackground
                href="/s/althingi"
              >
                {'Erindi'}
              </Tag>
            </Box>
            <Box>
              <InfoCardGrid
                cards={mockInfoCards}
                variant="detailed"
                columns={isMobile ? 1 : 3}
              />
            </Box>
          </Box>
          {/* Senda inn umsögn */}
          <Box>
            <GridContainer>
              <GridRow className={styles.gridRow}>
                <GridColumn
                  offset={['1/12', '1/12', '1/12']}
                  span={['9/12', '9/12', '3/12']}
                  paddingBottom={[3, 3, 0]}
                >
                  <Box
                    display={'flex'}
                    justifyContent={['center', 'center', 'flexStart']}
                  >
                    <img
                      src={'/assets/files.svg'}
                      alt={'Alþingi'}
                      width={100}
                      height={100}
                      className={styles.image}
                    />
                  </Box>
                </GridColumn>
                <GridColumn
                  offset={['1/12', '1/12', '0']}
                  span={['9/12', '7/12', '7/12']}
                >
                  <Box marginBottom={[4, 4, 2]}>
                    <Text variant="h2" as="h3" marginBottom={2}>
                      Senda inn umsögn
                    </Text>
                    <Text>
                      Etiam odio elementum eu libero velit quis. Semper turpis
                      suspendisse ultrices ut nibh hendrerit malesuada urna.
                      Duis praesent ut sem non et augue pretium turpis.
                    </Text>
                  </Box>
                  <Stack space={[3, 3, 2]}>
                    <Box>
                      <Button
                        variant="text"
                        icon="arrowForward"
                        iconType="outline"
                        size="medium"
                      >
                        Mál í umsagnarferli
                      </Button>
                    </Box>
                    <Box>
                      <Button
                        variant="text"
                        icon="arrowForward"
                        iconType="outline"
                        size="medium"
                      >
                        Leiðbeiningar um ritun umsagna
                      </Button>
                    </Box>
                  </Stack>
                </GridColumn>
              </GridRow>
            </GridContainer>
          </Box>
          {/* Tölfræði */}
          <Box>
            <GridContainer>
              <GridRow className={styles.gridRow}>
                <GridColumn
                  offset={['0', '0', '1/12']}
                  span={['12/12', '12/12', '4/12']}
                  paddingBottom={[3, 3, 0]}
                >
                  <Box>
                    <Text variant="eyebrow" color="purple400" marginBottom={2}>
                      Tölfræði
                    </Text>
                    <Text variant="h2" as="h3" marginBottom={2}>
                      Vissir þú...
                    </Text>
                    <Text>
                      Alþingi er eitt af elstu starfandi þingum heims og er
                      æðsti handhafi löggjafarvalds á Íslandi.
                    </Text>
                  </Box>
                </GridColumn>
                <GridColumn
                  offset={['0', '0', '0']}
                  span={['12/12', '3/12', '3/12']}
                >
                  <Box marginBottom={2} background="blue100" padding={3}>
                    <Text variant="eyebrow">Stofnár Alþingis</Text>
                    <Text variant="h1" color="blue400">
                      930
                    </Text>
                  </Box>
                  <Box marginBottom={2} background="blue100" padding={3}>
                    <Text variant="eyebrow">Þjóðkjörnir alþingismenn</Text>
                    <Text variant="h1" color="blue400">
                      63
                    </Text>
                  </Box>
                </GridColumn>
                <GridColumn
                  offset={['0', '0', '0']}
                  span={['12/12', '3/12', '3/12']}
                >
                  <Box marginBottom={2} background="blue100" padding={3}>
                    <Text variant="eyebrow">Kjörtímabil</Text>
                    <Text variant="h1" color="blue400">
                      4
                    </Text>
                  </Box>
                  <Box marginBottom={2} background="blue100" padding={3}>
                    <Text variant="eyebrow">Staðfest lög á ári</Text>
                    <Text variant="h1" color="blue400">
                      100
                    </Text>
                  </Box>
                  <Stack space={2}>
                    <Box></Box>
                    <Box></Box>
                  </Stack>
                </GridColumn>
              </GridRow>
            </GridContainer>
          </Box>
        </>
      }
    >
      <Stack space={SLICE_SPACING}>
        <section>
          <Box marginTop={2}>
            <Text variant="h1" as="h2">
              {title}
            </Text>
            <Text variant="intro" as="p" paddingTop={3} marginBottom={3}>
              Velkomin á vef Alþingis, æðsta handhafa löggjafarvalds á Íslandi.{' '}
            </Text>
            <Text variant="h4">Flýtileiðir</Text>
            <Box
              display="flex"
              flexWrap={'wrap'}
              rowGap={1}
              columnGap={1}
              marginTop={3}
            >
              <Tag variant="blue" outlined={false} href={paths.home}>
                {'Þingstörf'}
              </Tag>
              <Tag variant="blue" outlined={false} href={paths.home}>
                {'Þingmálalistar'}
              </Tag>
              <Tag variant="blue" outlined={false} href={paths.home}>
                {'Þingfundir og ræður'}
              </Tag>
              <Tag variant="blue" outlined={false} href={paths.home}>
                {'Upptökur'}
              </Tag>
              <Tag variant="blue" outlined={false} href={paths.home}>
                {'Handbækur'}
              </Tag>
              <Tag variant="blue" outlined={false} href={paths.home}>
                {'Í umsagnarferli'}
              </Tag>
              <Tag variant="blue" outlined={false} href={paths.home}>
                {'Nefndir'}
              </Tag>
              <Tag variant="blue" outlined={false} href={paths.home}>
                {'Þingmenn'}
              </Tag>
              <Tag variant="blue" outlined={false} href={paths.home}>
                {'Alþjóðastarf'}
              </Tag>
              <Tag variant="blue" outlined={false} href={paths.home}>
                {'Ályktanir Alþingis'}
              </Tag>
              <Tag variant="blue" outlined={false} href={paths.home}>
                {'Þingmálaskrá ríkisstjórnar'}
              </Tag>
            </Box>
          </Box>
        </section>
        <Divider />
        <section>
          <Box display="flex" justifyContent="spaceBetween" marginBottom={2}>
            <Text variant="h3" as="h3">
              Útsending
            </Text>
            <Box display="flex" flexDirection="row">
              <Button
                variant="text"
                icon="arrowForward"
                iconType="outline"
                size="small"
                onClick={() => router.push(paths.thingfundir)}
              >
                Sjá upptökur
              </Button>
            </Box>
          </Box>

          <Video
            url={
              'http://vod.althingi.is/player/?type=vod&width=512&height=288&icons=yes&file=20250506T131300&start=1004&duration=20669&autoplay=true'
            }
            tags={videoTag}
            transcript={{
              items: videoTranscript,
              contentLabel: 'Dagskrá 35. þingfundar',
              title: 'þriðjudaginn 6. maí kl. 13:30',
            }}
          />
        </section>
        <section>
          <Stack space={3}>
            <GridRow rowGap={3}>
              <GridColumn span={['1/1', '1/1', '1/1', '1/1', '1/2']}>
                <CategoryCard
                  heading={'Þingstörf'}
                  text={
                    'Starfsemi yfirstandandi þings; þingmál, umsagnir, skýrslur, þingfundir og ræður'
                  }
                  href={paths.thingstorf}
                />
              </GridColumn>
              <GridColumn span={['1/1', '1/1', '1/1', '1/1', '1/2']}>
                <CategoryCard
                  heading={'Þingmenn'}
                  text={
                    'Sitjandi aðal- og varaþingmenn, þingflokkar, hagsmunaskrá og sögulegar upplýsingar'
                  }
                  href={paths.thingmenn}
                />
              </GridColumn>
              <GridColumn span={['1/1', '1/1', '1/1', '1/1', '1/2']}>
                <CategoryCard
                  heading={'Lagasafn'}
                  text={
                    'Öll gildandi lög ásamt upplýsingum um lagabreytingar og brottfallin lög'
                  }
                  href={paths.home}
                />
              </GridColumn>
              <GridColumn span={['1/1', '1/1', '1/1', '1/1', '1/2']}>
                <CategoryCard
                  heading={'Um Alþingi'}
                  text={
                    'Upplýsingar um vinnustaðinn, ályktanir, alþjóðastarf og fræðsluefni'
                  }
                  href={paths.home}
                />
              </GridColumn>
            </GridRow>
          </Stack>
        </section>
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

export default withMainLayout(Frontpage, { showFooter: false })
