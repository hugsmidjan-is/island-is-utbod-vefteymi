import { useState } from 'react'
import Head from 'next/head'
import NextLink from 'next/link'

import {
  Box,
  Breadcrumbs,
  Button,
  GridColumn,
  GridContainer,
  GridRow,
  LinkV2,
  Select,
  Stack,
  Text,
  ToggleSwitchCheckbox,
} from '@island.is/island-ui/core'
import { type Locale } from '@island.is/shared/types'
import { Webreader } from '@island.is/web/components'
import * as hooks from '@island.is/web/hooks'
import { withMainLayout } from '@island.is/web/layouts/main'
import { Screen } from '@island.is/web/types'

import { FrumvarpHTML } from './mocks/frumvarp'
import { HTMLBox } from './HTMLBox'
import * as styles from './Frumvarp.css'
import Layout from '../Layout'
import DetailPanel from '../components/Panels/DetailPanel'
import { paths } from '@island.is/web/utils/mockData'
import GoBack from '../components/GoBack/GoBack'

interface FrumvarpProps {
  locale: Locale
}
const Frumvarp: Screen<FrumvarpProps> = ({ locale }) => {
  const { linkResolver } = hooks.useLinkResolver()

  const breadcrumbItems = [
    { title: 'Ísland.is', href: linkResolver('homepage', [], locale).href },
  ]

  const [documentId, setDocumentId] = useState<string>('97')
  const [showDiff, setShowDiff] = useState<boolean>(false)

  const data = documentId ? FrumvarpHTML(documentId) : null

  console.log(documentId)

  return (
    <>
      <Head>
        <title>Frumvarp | Ísland.is</title>
      </Head>
      <Layout
        title={'Frumvarp | Ísland.is'}
        sidebar={
          <Stack space={2}>
            <GoBack />
            <DetailPanel
              backgroundColor={'blue100'}
              items={[
                {
                  label: 'Þingsnúmer',
                  value: '156. löggjafarþing 2025',
                },
                {
                  label: 'Tegund',
                  value: '97. mál, lagafrumvarp RSS þjónusta',
                },
                {
                  label: 'Útbýtingadagur',
                  value: '02.05.2025',
                },
              ]}
              title="Upplýsingar um lagafrumvarp"
            />
            <DetailPanel
              backgroundColor={'purple100'}
              items={[
                {
                  label: '584/2020',
                  value:
                    'Lorem ipsum dolor sit amet consectetur. Purus nunc vivamus facilisis et vestibulum.',
                },
                {
                  label: '380/2020',
                  value:
                    'Lorem ipsum dolor sit amet consectetur. Purus nunc vivamus facilisis et vestibulum.',
                },
                {
                  label: '449/2019',
                  value:
                    'Lorem ipsum dolor sit amet consectetur. Purus nunc vivamus facilisis et vestibulum',
                },
              ]}
              title="Breytingasaga frumvarps"
            />
            <Button variant="utility" fluid icon="download" iconType="outline">
              Sækja sem PDF
            </Button>
            <Button variant="utility" fluid icon="link" iconType="outline">
              Afrita hlekk
            </Button>
          </Stack>
        }
      >
        <GridContainer>
          <GridRow marginTop={6}>
            <GridColumn span={'6/12'}>
              <Select
                label="Veldu önnur skjöl málsins"
                size="xs"
                backgroundColor="blue"
                value={{
                  label:
                    '97 stjórnarfrumvarp, mennta- og barnamálaráðherra, Ásthildur Lóa Þórsdóttir',
                  value: '97',
                }}
                onChange={(opt) => setDocumentId(opt?.value || '97')}
                options={[
                  {
                    label:
                      '97 stjórnarfrumvarp, mennta- og barnamálaráðherra, Ásthildur Lóa Þórsdóttir',
                    value: '97',
                  },
                  {
                    label: 'test',
                    value: '98',
                  },
                  {
                    label: 'test 2',
                    value: '99',
                  },
                ]}
              />
            </GridColumn>
          </GridRow>
          <GridRow>
            <GridColumn span={'12/12'}>
              {data && (
                <Box
                  marginTop={5}
                  paddingTop={5}
                  paddingX={5}
                  borderRadius="large"
                  border="standard"
                  borderWidth="large"
                >
                  <Box display="flex" justifyContent="spaceBetween">
                    <Box display="flex" alignItems={'center'}>
                      <Box className={styles.dot} marginRight={2} />
                      <Text>Frumvarp- uppfært 02.05.2025</Text>
                    </Box>
                    {/*
                    wait until we can parse it
                  <ToggleSwitchCheckbox
                    className={styles.checkbox}
                    label={'Sýna breytingar'}
                    checked={showDiff}
                    onChange={() => setShowDiff(!showDiff)}
                  />
                  */}
                  </Box>
                  <HTMLBox html={data} />
                </Box>
              )}
            </GridColumn>
          </GridRow>
        </GridContainer>
      </Layout>
    </>
  )
}

Frumvarp.getProps = async ({ locale }) => {
  const lang: Locale = locale === 'en' ? 'en' : 'is'

  return {
    locale: lang,
  }
}

export default withMainLayout(Frumvarp, {
  showFooter: false,
})
