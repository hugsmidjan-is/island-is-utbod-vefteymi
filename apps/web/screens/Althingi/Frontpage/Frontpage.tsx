import React from 'react'
import { useWindowSize } from 'react-use'
import { useRouter } from 'next/router'

import {
  Box,
  Button,
  CategoryCard,
  Divider,
  GridColumn,
  GridContainer,
  GridRow,
  Icon,
  InfoCardGrid,
  LinkV2,
  Stack,
  Tag,
  Text,
} from '@island.is/island-ui/core'
import { theme } from '@island.is/island-ui/theme'
import { SLICE_SPACING } from '@island.is/web/constants'
import { withMainLayout } from '@island.is/web/layouts/main'
import { Screen } from '@island.is/web/types'
import {
  fullWidthVideoTranscript,
  mockInfoCards,
  paths,
  videoTag,
} from '@island.is/web/utils/mockData'

import { NewVideo } from '../components/Video/NewVideo'
import FullWidthLayout from '../FullWidthLayout'
import * as styles from './Frontpage.css'

const FrontpageFullWidth: Screen<FrontpageProps> = ({ title }) => {
  const { width } = useWindowSize()
  const isMobile = width < theme.breakpoints.md

  return (
    <FullWidthLayout
      title={title}
      description={''}
      tags={[
        { label: 'Þingstörf', href: paths.home },
        { label: 'Þingmálalistar', href: paths.home },
        { label: 'Þingfundir og ræður', href: paths.home },
        { label: 'Upptökur', href: paths.home },
        { label: 'Handbækur', href: paths.home },
        { label: 'Í umsagnarferli', href: paths.home },
        { label: 'Nefndir', href: paths.home },
        { label: 'Þingmenn', href: paths.home },
        { label: 'Alþjóðastarf', href: paths.home },
        { label: 'Ályktanir Alþingis', href: paths.home },
        { label: 'Þingmálaskrá ríkisstjórnar', href: paths.home },
      ]}
    >
      <Stack space={SLICE_SPACING}>
        <section>
          <Box marginX={'auto'} paddingX={2} style={{ maxWidth: '1344px' }}>
            <NewVideo
              url={
                'https://www.youtube.com/embed/fw7yXuwc2bE?si=2kx6pEzmDP6OjTqR'
              }
              title="Beint streymi"
              tags={videoTag}
              link={{
                label: 'Sjá allar upptökur',
                url: paths.thingfundir,
              }}
              transcript={fullWidthVideoTranscript}
            />
          </Box>
        </section>
        <section>
          <Box paddingY={8}>
            <GridContainer>
              <GridRow>
                <GridColumn span="5/12">
                  <Box
                    display="flex"
                    height="full"
                    justifyContent="center"
                    alignItems="center"
                    flexDirection={'column'}
                  >
                    <img
                      src={'/assets/frontpage-cta-1.png'}
                      className={styles.image}
                      alt={''}
                    />
                  </Box>
                </GridColumn>
                <GridColumn offset="1/12" span="5/12">
                  <Text variant="h2" as="h2">
                    Þingmál
                  </Text>
                  <Text marginTop={1}>
                    Samkvæmt stjórnarskrá Íslands verða lagafrumvörp að fara í
                    gegnum þrjár umræður á þingi áður en þau eru samþykkt eða
                    felld þar. Frumvarpið hlýtur svo endanlega gildi ef forseti
                    Íslands skrifar undir það.
                  </Text>
                  <Box marginTop={6}>
                    <Stack space={3}>
                      <Box>
                        <Box
                          marginBottom={2}
                          display="flex"
                          justifyContent={'spaceBetween'}
                        >
                          <Text variant="h5" fontWeight="semiBold">
                            Lagasafn
                          </Text>
                          <LinkV2 href={paths.thingmal}>
                            <Icon
                              icon="arrowForward"
                              size="medium"
                              color="blue400"
                            />
                          </LinkV2>
                        </Box>
                        <Divider />
                      </Box>
                      <Box>
                        <Box
                          marginBottom={2}
                          display="flex"
                          justifyContent={'spaceBetween'}
                        >
                          <Text variant="h5" fontWeight="semiBold">
                            Lagafrumvörp
                          </Text>
                          <LinkV2 href={paths.thingmal}>
                            <Icon
                              icon="arrowForward"
                              size="medium"
                              color="blue400"
                            />
                          </LinkV2>
                        </Box>
                        <Divider />
                      </Box>
                      <Box>
                        <Box
                          marginBottom={2}
                          display="flex"
                          justifyContent={'spaceBetween'}
                        >
                          <Text variant="h5" fontWeight="semiBold">
                            Þingsályktarnir
                          </Text>

                          <LinkV2 href={paths.thingmal}>
                            <Icon
                              icon="arrowForward"
                              size="medium"
                              color="blue400"
                            />
                          </LinkV2>
                        </Box>
                        <Divider />
                      </Box>
                    </Stack>
                  </Box>
                </GridColumn>
              </GridRow>
            </GridContainer>
          </Box>
        </section>
        <section>
          <Box paddingY={8} background="blue100" paddingX={3}>
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
        </section>
        <section>
          <Box paddingY={8}>
            <GridContainer>
              <GridRow>
                <GridColumn offset="1/12" span="5/12">
                  <Text variant="h2" as="h2">
                    Viltu senda inn umsögn?
                  </Text>
                  <Text marginTop={1}>
                    Öllum er frjálst að senda nefnd skriflega umsögn um þingmál
                    að eigin frumkvæði og hefur slík umsögn sömu stöðu og þær
                    sem berast samkvæmt beiðni nefndar
                  </Text>
                  <Box marginTop={6}>
                    <Stack space={3}>
                      <Box>
                        <Box
                          marginBottom={2}
                          display="flex"
                          justifyContent={'spaceBetween'}
                        >
                          <Text variant="h5" fontWeight="semiBold">
                            Mál í umsagnarferli
                          </Text>
                          <LinkV2 href={paths.thingmal}>
                            <Icon
                              icon="arrowForward"
                              size="medium"
                              color="blue400"
                            />
                          </LinkV2>
                        </Box>
                        <Divider />
                      </Box>
                      <Box>
                        <Box
                          marginBottom={2}
                          display="flex"
                          justifyContent={'spaceBetween'}
                        >
                          <Text variant="h5" fontWeight="semiBold">
                            Leiðbeiningar um ritun umsagna
                          </Text>
                          <LinkV2 href={paths.thingmal}>
                            <Icon
                              icon="arrowForward"
                              size="medium"
                              color="blue400"
                            />
                          </LinkV2>
                        </Box>
                        <Divider />
                      </Box>
                      <Box>
                        <Box
                          marginBottom={2}
                          display="flex"
                          justifyContent={'spaceBetween'}
                        >
                          <Text variant="h5" fontWeight="semiBold">
                            Umsagnargátt
                          </Text>

                          <LinkV2 href={paths.thingmal}>
                            <Icon
                              icon="arrowForward"
                              size="medium"
                              color="blue400"
                            />
                          </LinkV2>
                        </Box>
                        <Divider />
                      </Box>
                    </Stack>
                  </Box>
                </GridColumn>
                <GridColumn offset="1/12" span="5/12">
                  <Box
                    display="flex"
                    height="full"
                    justifyContent="center"
                    alignItems="center"
                  >
                    <img
                      src={'/assets/frontpage-cta-2.png'}
                      className={styles.image}
                      alt={''}
                    />
                  </Box>
                </GridColumn>
              </GridRow>
            </GridContainer>
          </Box>
        </section>
        <section>
          <Box paddingY={10} background="dark100">
            <GridContainer>
              <GridRow>
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
                  <Box
                    marginBottom={2}
                    background="white"
                    padding={3}
                    borderRadius="large"
                  >
                    <Text variant="eyebrow">Stofnár Alþingis</Text>
                    <Text variant="h1" color="blue400">
                      930
                    </Text>
                  </Box>
                  <Box
                    marginBottom={2}
                    background="white"
                    padding={3}
                    borderRadius="large"
                  >
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
                  <Box
                    marginBottom={2}
                    background="white"
                    padding={3}
                    borderRadius="large"
                  >
                    <Text variant="eyebrow">Kjörtímabil</Text>
                    <Text variant="h1" color="blue400">
                      4
                    </Text>
                  </Box>
                  <Box
                    marginBottom={2}
                    background="white"
                    padding={3}
                    borderRadius="large"
                  >
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
        </section>
      </Stack>
    </FullWidthLayout>
  )
}

interface FrontpageProps {
  title: string
}

FrontpageFullWidth.getProps = async () => {
  return {
    title: 'Alþingi',
  }
}

export default withMainLayout(FrontpageFullWidth, { showFooter: false })
