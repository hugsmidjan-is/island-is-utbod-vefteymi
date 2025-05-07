import { useState } from 'react'
import { useWindowSize } from 'react-use'

import {
  Box,
  Button,
  CategoryCard,
  Divider,
  FilterInput,
  FocusableBox,
  Hidden,
  LinkV2,
  Stack,
  Text,
} from '@island.is/island-ui/core'
import { theme } from '@island.is/island-ui/theme'
import { type Locale } from '@island.is/shared/types'
import { SLICE_SPACING } from '@island.is/web/constants'
import { withMainLayout } from '@island.is/web/layouts/main'
import { Screen } from '@island.is/web/types'
import { mockHandbooks, paths } from '@island.is/web/utils/mockData'

import Layout from '../Layout'
import * as styles from './Handbook.css'
import DetailPanel from '../components/Panels/DetailPanel'
import GoBack from '../components/GoBack/GoBack'
import JumpPanel from '../components/Panels/JumpPanel'

interface ChapterProps {
  locale: Locale
}

const Chapter: Screen<ChapterProps> = ({ locale }) => {
  const { width } = useWindowSize()
  const isMobile = width < theme.breakpoints.md

  const [searchInput, setSearchInput] = useState<string>()

  const data = mockHandbooks[0]
  const panelData = {
    eyebrow: 'Kafli',
    title: 'Hátterni, hagsmunaskráning o.fl',
    items: [
      {
        label: 'Siðareglur fyrir alþingismenn',
        active: true,
        subItems: ['Tilgangur', 'Eftirlit og málsmeðferð', 'Lyktir'],
      },
      {
        label: 'Stefna og viðbragðsáætlun gegn einelti, áreitni o.fl.',
        active: false,
      },
      {
        label: 'Hagsmunaskráning',
        active: false,
      },
    ],
  }
  return (
    <Layout
      title={data.title}
      sidebar={
        <Stack space={2}>
          <GoBack />
          <JumpPanel
            items={panelData.items}
            title={panelData.title}
            eyebrow={panelData.eyebrow}
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
      <Stack space={SLICE_SPACING}>
        <section>
          <Box marginTop={2}>
            <Text variant="h1" as="h1">
              {data.title}
            </Text>
            <Text as="p" paddingTop={3} marginBottom={3}>
              {data.description}
            </Text>
            <Hidden above="md">PANEL</Hidden>
            <Box width={isMobile ? 'full' : 'half'}>
              <FilterInput
                backgroundColor={'blue'}
                name={'Filter input'}
                value={searchInput ?? ''}
                onChange={(e) => setSearchInput(e)}
                placeholder="Leita í handbók"
              />
            </Box>
          </Box>
        </section>

        <Divider />

        <Box>
          <Text variant="h2" as="h2" marginBottom={3}>
            Hátterni, hagsmunaskráning o.fl
          </Text>
          <Text
            variant="h3"
            as="h3"
            marginBottom={2}
            id="Siðareglur fyrir alþingismenn"
          >
            Siðareglur fyrir alþingismenn
          </Text>
          <Text marginBottom={3}>
            Með vísan til 88. gr. þingskapa samþykkti Alþingi 16. mars 2016
            þingsályktun um siðareglur fyrir alþingismenn. Þeim var svo breytt
            með þingsályktun 5. júní 2018 sem fól í sér viðbrögð þingmanna við
            umræðu um kynferðisofbeldi og áreitni í samfélaginu. Reglurnar,
            ásamt reglum forsætisnefndar um meðferð erinda og málsmeðferð
            samkvæmt siðareglum fyrir alþingismenn, eru á vef Alþingis.{' '}
          </Text>
          <Text variant="h5" as="h4" marginBottom={2} id="Tilgangur">
            Tilgangur
          </Text>
          <Text marginBottom={3}>
            Siðareglur fyrir alþingismenn sækja viðmið sín í skráðar lagareglur,
            svo sem stjórnarskrána og þingsköp, og þær almennu kröfur sem gera
            verður til góðrar rækslu þingmannsstarfa eða hátternis þingmanna sem
            þjóðkjörinna fulltrúa. Tilgangur reglnanna er að efla gagnsæi í
            störfum alþingismanna og ábyrgðarskyldu þeirra, svo og tiltrú og
            traust almennings á Alþingi. Við upphaf þingsetu sinnar skulu
            þingmenn afhenda forseta Alþingis undirritaða yfirlýsingu um að þeir
            hafi kynnt sér siðareglurnar. Sama gildir um varaþingmenn. Í 5. gr.
            siðareglnanna er fyrst gerð grein fyrir þeim meginreglum sem taka
            til hátternis þingmanna og þeir skulu hafa að leiðarljósi við
            framkvæmd starfa sinna sem þjóðkjörnir fulltrúar. Þær koma síðan til
            sérstakrar athugunar þegar fjallað er um hátternisskyldur þingmanna,
            sbr. 7.–15. gr. reglnanna.
          </Text>
          <Text
            variant="h5"
            as="h4"
            marginBottom={2}
            id="Eftirlit og málsmeðferð"
          >
            Eftirlit og málsmeðferð
          </Text>
          <Text>
            Eftirlit með framkvæmd siðareglnanna er hjá forsætisnefnd Alþingis.
            Henni til ráðgjafar skipar hún sérstaka þriggja manna nefnd sem
            lætur í ljós álit sitt á því hvort þingmaður hafi með hátterni sínu
            brotið gegn hátternisskyldum sínum og meginreglum um hátterni
            þingmanna. 74 Háttvirtur þingmaður – handbók um þingstörfin
            Skrifstofa
          </Text>
          <Text>
            Einstaklingar og lögaðilar (félög og félagasamtök) geta lagt fram
            skrifleg og rökstudd erindi um meint brot á siðareglunum. Þá geta
            einstakir þingmenn einnig leitað álits forsætisnefndar á hátterni
            sínu samkvæmt reglunum.
          </Text>
          <Text marginBottom={3}>
            Í siðareglunum og málsmeðferðarreglum forsætisnefndar er nánar lýst
            meðferð einstakra mála, þ.m.t. umfjöllun um rétt þingmanns til þess
            að koma á framfæri sjónarmiðum sínum og athugasemdum á meðan mál
            hans er til meðferðar og um úrlausn einstakra mála.
          </Text>
          <Text variant="h5" as="h4" marginBottom={2} id="Lyktir">
            Lyktir
          </Text>
          <Text>
            Hafi mál ekki gefið nægilegt tilefni til skoðunar vísar
            forsætisnefnd málinu frá. Sama gildir ef málið varðar meint brot á
            lagareglum sem hægt er að bera undir stjórnvöld eða dómstóla til
            úrskurðar. Nefndin getur einnig látið mál falla niður að fengnum
            skýringum þingmanns. Öðrum málum lýkur með því að forsætisnefnd
            lætur í ljós álit sitt á því hvort athafnir þingmanns brjóti í bága
            við meginreglur um hátterni og hátternisskyldur hans.
          </Text>
          <Text marginBottom={3}>
            Niðurstaða forsætisnefndar er ávallt kynnt þeim sem hefur lagt fram
            erindi og hlutaðeigandi þingmanni. Nefndin getur jafnframt ákveðið,
            ef hún telur ástæðu til, að birta álit sitt á vef Alþingis.
          </Text>
        </Box>
      </Stack>
    </Layout>
  )
}

Chapter.getProps = async ({ locale }) => {
  const lang: Locale = locale === 'en' ? 'en' : 'is'

  return {
    locale: lang,
  }
}

export default withMainLayout(Chapter, { showFooter: false })
