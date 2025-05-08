import React from 'react'

// eslint-disable-next-line @nx/enforce-module-boundaries
import {
  Box,
  Button,
  Link,
  LinkV2,
  Stack,
  Tag,
  Text,
} from '@island.is/island-ui/core'
import { withMainLayout } from '@island.is/web/layouts/main'
import { Screen } from '@island.is/web/types'
import {
  paths,
  secondTableData,
  tabledata,
} from '@island.is/web/utils/mockData'

import GoBack from '../components/GoBack/GoBack'
import DetailPanel from '../components/Panels/DetailPanel'
import TimelinePanel from '../components/Panels/TimelinePanel'
import ThingmalTable from '../components/ThingmalTable/ThingmalTable'
import Layout from '../Layout'

const ThingmalDetail: Screen<ThingmalDetailProps> = ({ title }) => {
  const detailPanelData = [
    { label: 'Þingsnúmer', value: '156.löggjafarþing 2025' },
    {
      label: 'Málsnúmer',
      value: '97.mál',
    },
    {
      label: 'Staða',
      value: '3. umræða',
    },
    {
      label: 'Útbýtingadagur',
      value: '12.febrúar 2025, kl 14:00',
    },
    {
      label: 'Flutningsmaður',
      value: 'Mennta- og barnamálaráðherra',
    },
  ]

  const stepperPanelData = [
    { label: 'Stjórnarfrumvarp', complete: true },
    {
      label: '1.Umræða',
      complete: true,
    },
    {
      label: 'Nefndarálit',
      complete: true,
    },
    {
      label: '2.Umræða',
      complete: false,
      active: true,
    },
    {
      label: 'Frumvarp',
      complete: false,
    },
    {
      label: '3.Umræða',
      complete: false,
    },
    {
      label: 'Lög',
      complete: false,
    },
  ]
  return (
    <Layout
      title={title}
      breadcrumbs={[
        {
          title: 'Þingstörf',
          href: paths.thingstorf,
          isCurrentPage: false,
        },
        {
          title: 'Þingmálaskrá',
          href: paths.thingmal,
          isCurrentPage: false,
        },
      ]}
      sidebar={
        <Stack space={2}>
          <GoBack />
          <DetailPanel
            title="Lagafrumvarp"
            backgroundColor="blue100"
            items={detailPanelData}
          />
          <TimelinePanel
            title="Ferill málsins"
            backgroundColor="purple100"
            items={stepperPanelData}
          />
          <Button variant="utility" fluid icon="link" iconType="outline">
            RSS áskrift
          </Button>
          <Button variant="utility" fluid icon="link" iconType="outline">
            RSS hlaðvarp
          </Button>
          <Button variant="utility" fluid icon="link" iconType="outline">
            XML áskrift
          </Button>
        </Stack>
      }
    >
      <Text variant="h1" marginBottom={1} marginTop={2}>
        Grunnskólar
      </Text>
      <Text>
        Frumvarpið er endurflutt, sjá 272. mál á 155. þingi - grunnskólar.
      </Text>

      <Box
        background={'purple100'}
        paddingY={3}
        paddingX={4}
        display="flex"
        justifyContent={'spaceBetween'}
        marginBottom={2}
        marginTop={6}
      >
        <Box marginRight={4}>
          <Text variant="eyebrow" marginBottom={'p2'} color="purple600">
            Í hnotskurn
          </Text>
          <Text marginBottom={3}>
            Þetta frumvarp snýr að breytingu á lögum nr. 91/2008, Nýjasta útgáfa
            þess er í þingskjali 253. Frumvarpið bíður þess nú að verða tekið
            fyrir í 3. umræðu.
          </Text>
        </Box>
      </Box>
      <Box marginY={6}>
        <Text variant="eyebrow" marginBottom={2} color="purple600">
          Tengt efni
        </Text>
        <Box display="flex" flexWrap={'wrap'} rowGap={1} columnGap={1}>
          <Tag variant="blue" outlined={false} href={paths.home}>
            {'Umsagnabeiðnir'}
          </Tag>
          <Tag variant="blue" outlined={false} href={paths.home}>
            {'Innsend erindi og umsagnir'}
          </Tag>
          <Tag variant="blue" outlined={false} href={paths.home}>
            {'Tengd mál og efnisorð'}
          </Tag>
        </Box>
      </Box>
      <Box
        background={'blue100'}
        borderRadius="large"
        paddingY={3}
        paddingX={4}
        display="flex"
        justifyContent={'spaceBetween'}
      >
        <Box marginRight={4}>
          <Text variant="h4" marginBottom={'p2'}>
            Viltu senda inn umsögn?
          </Text>
          <Text marginBottom={3}>
            Öllum er frjálst að senda nefnd skriflega umsögn um þingmál að eigin
            frumkvæði og hefur slík umsögn sömu stöðu og þær sem berast samkvæmt
            beiðni nefndar.{' '}
          </Text>
          <Button variant="text" size="medium" icon="arrowForward">
            Leiðbeiningar um umsagnir
          </Button>
        </Box>
        <Box display={'flex'} alignItems={'flexStart'}>
          <Button size="small" icon="open" iconType="outline">
            Umsagnargátt
          </Button>
        </Box>
      </Box>

      <Box marginTop={[6]}>
        <Stack space={3}>
          <ThingmalTable
            data={tabledata}
            title={'1. umræða'}
            tag={{
              label: 'Lokið',
              color: 'purple',
            }}
            footnote={
              <Text variant="medium">
                Málið gekk til{' '}
                <LinkV2 newTab key={'id'} href={'/'} color="blue400">
                  allsherjar- og mennta­mála­nefndar
                </LinkV2>{' '}
                17.02.2025. Framsögumaður nefndarinnar: Kolbrún Áslaugar
                Baldursdóttur. Umsagnabeiðnir allsherjar- og menntamálanefndar
                sendar 18.02.2025, frestur til 04.03.2025 Umsagnabeiðnir
                allssherjar- og menntamálanefndar sendar 20.02.2025, frestur til
                04.03.2025"
              </Text>
            }
          />
          <ThingmalTable
            data={secondTableData}
            title={'2. umræða'}
            tag={{
              label: 'Í gangi',
              color: 'mint',
            }}
            footnote={
              <Text variant="medium">
                Málið gekk til{' '}
                <Link key={'id'} href={'/'} color="blue400">
                  allsherjar- og mennta­mála­nefndar
                </Link>{' '}
                17.02.2025. Framsögumaður nefndarinnar: Kolbrún Áslaugar
                Baldursdóttir.
              </Text>
            }
          />
        </Stack>
      </Box>
    </Layout>
  )
}

interface ThingmalDetailProps {
  title: string
}

ThingmalDetail.getProps = async () => {
  return {
    title: 'Þingmál',
  }
}

export default withMainLayout(ThingmalDetail, { showFooter: false })
