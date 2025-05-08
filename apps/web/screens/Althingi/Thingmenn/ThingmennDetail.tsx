import React from 'react'
import { useWindowSize } from 'react-use'

import { Box, Stack, Tag, Text } from '@island.is/island-ui/core'
import { theme } from '@island.is/island-ui/theme'
import { withMainLayout } from '@island.is/web/layouts/main'
import { Screen } from '@island.is/web/types'

import GoBack from '../components/GoBack/GoBack'
import Layout from '../Layout'
import ProfileCard from './ProfileCard'

const ThingmennDetail: Screen<ThingmennDetailProps> = ({ title }) => {
  return (
    <Layout
      title={'Logi Einarsson'}
      breadcrumbs={[
        {
          title: 'Alþingismenn',
          href: '/s/althingi/thingmenn',
        },
      ]}
      sidebar={
        <Stack space={2}>
          <GoBack />
          <ProfileCard />
        </Stack>
      }
    >
      <Text variant="h1" marginBottom={2} marginTop={2}>
        Logi Einarsson
      </Text>
      <Text marginBottom={5}>Menningar-, nýsköpunar- og háskólaráðherra</Text>
      <Text variant="h3">Þingstörf og hagsmunaskrá</Text>
      <Box
        display="flex"
        flexWrap={'wrap'}
        rowGap={1}
        columnGap={1}
        marginTop={3}
        marginBottom={3}
      >
        <Tag disabled={true} variant="blue" outlined={false} href="/s/althingi">
          {'Hagsmunaskrá'}
        </Tag>
        <Tag variant="blue" outlined={false} href="/s/althingi">
          {'Laun og kostnaðargreiðslur'}
        </Tag>
        <Tag variant="blue" outlined={false} href="/s/althingi">
          {'Tillögur'}
        </Tag>
        <Tag variant="blue" outlined={false} href="/s/althingi">
          {'Önnur þingskjöl'}
        </Tag>
        <Tag variant="blue" outlined={false} href="/s/althingi">
          {'Atkvæðaskrá'}
        </Tag>
        <Tag variant="blue" outlined={false} href="/s/althingi">
          {'Nefndarseta'}
        </Tag>
        <Tag variant="blue" outlined={false} href="/s/althingi">
          {'Hagsmunaskrá ráðherra'}
        </Tag>
        <Tag variant="blue" outlined={false} href="/s/althingi">
          {'Frumvörp'}
        </Tag>
        <Tag variant="blue" outlined={false} href="/s/althingi">
          {'Fyrirspurnir og skýrslur'}
        </Tag>
        <Tag variant="blue" outlined={false} href="/s/althingi">
          {'Ræður'}
        </Tag>
        <Tag variant="blue" outlined={false} href="/s/althingi">
          {'Þingseta'}
        </Tag>
        <Tag variant="blue" outlined={false} href="/s/althingi">
          {'Framsögumaður'}
        </Tag>
      </Box>
      <Text variant="h3" marginBottom={2}>
        Þingseta
      </Text>
      <Text marginBottom={5}>
        Alþingismaður Norðausturkjördæmis síðan 2016 (Samfylkingin).
        <br />
        <br />
        Varaþingmaður Norðausturkjördæmis október 2010, apríl, október og
        desember 2011 og janúar–mars 2013 (Samfylkingin).
        <br />
        <br />
        Menningar-, nýsköpunar- og háskólaráðherra og samstarfsráðherra
        Norðurlanda síðan 2024.
        <br />
        <br />
        Formaður þingflokks Samfylkingarinnar 2022–2025.
      </Text>
      <Text variant="h3" marginBottom={2}>
        Æviágrip
      </Text>
      <Text marginBottom={5}>
        Fæddur á Akureyri 21. ágúst 1964. Foreldrar: Einar Helgason (fæddur 11.
        október 1932, dáinn 15. desember 2013) myndlistarmaður og kennari og
        Ásdís Karlsdóttir (fædd 6. júní 1935) íþróttakennari. Maki: Arnbjörg
        Sigurðardóttir (fædd 10. janúar 1973) héraðsdómari. Foreldrar: Sigurður
        Óli Brynjólfsson og Hólmfríður Kristjánsdóttir. Börn: Úlfur (1997),
        Hrefna (2004).
        <br />
        <br />
        Stúdentspróf MA 1985. Próf í arkitektúr frá Arkitekthøgskolen í Ósló
        1992.
        <br />
        <br />
        Arkitekt hjá H.J. teiknistofu 1992–1994, skipulagsdeild Akureyrarbæjar
        1994–1996, Teiknistofunni Form 1996–1997, Úti og inni arkitektastofu
        1997–2003, Arkitektúr.is arkitektastofu 2003–2004 og Kollgátu
        arkitektastofu 2003–2016. Stundakennari við HR 2010–2012. Menningar-,
        nýsköpunar- og háskólaráðherra síðan 21. desember 2024.
        Samstarfsráðherra Norðurlanda síðan 23. desember 2024.
        <br />
        <br />
        Varabæjarfulltrúi á Akureyri 2010–2012, bæjarfulltrúi 2012–2016.
        Formaður Akureyrarstofu 2014–2015, formaður skólanefndar 2015–2016. Í
        stjórn Arkitektafélags Íslands 2010–2013, formaður 2010–2012.
        Varaformaður Samfylkingarinnar 2016, formaður 2016–2022.
        <br />
        <br />
        Alþingismaður Norðausturkjördæmis síðan 2016 (Samfylkingin).
        <br />
        <br />
        Varaþingmaður Norðausturkjördæmis október 2010, apríl, október og
        desember 2011 og janúar–mars 2013 (Samfylkingin).
        <br />
        <br />
        Menningar-, nýsköpunar- og háskólaráðherra og samstarfsráðherra
        Norðurlanda síðan 2024.
        <br />
        <br />
        Formaður þingflokks Samfylkingarinnar 2022–2025.
        <br />
        <br />
        Efnahags- og viðskiptanefnd 2016–2017, atvinnuveganefnd 2017,
        utanríkismálanefnd 2017–2021 og 2021–2024, allsherjar- og
        menntamálanefnd 2021–2022, framtíðarnefnd 2021–2024 (formaður
        2022–2023).
        <br />
        <br />
        Þingmannanefnd Íslands og ESB 2018–2021 og 2022–2024.
      </Text>
    </Layout>
  )
}

interface ThingmennDetailProps {
  title: string
}

ThingmennDetail.getProps = async () => {
  return {
    title: 'Þingmenn',
  }
}

export default withMainLayout(ThingmennDetail, { showFooter: false })
