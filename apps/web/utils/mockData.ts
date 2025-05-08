import { IconMapIcon, IconProps, TagVariant } from '@island.is/island-ui/core'
import { ActionCardProps } from '@island.is/island-ui/core/types'

import { Organization } from '../graphql/schema'
import { SearchItem } from './types'

export const paths = {
  home: '/s/althingi',

  thingstorf: '/s/althingi/thingstorf',
  thingmal: '/s/althingi/thingstorf/thingmal',
  thingmalLagafrumvarp: '/s/althingi/thingstorf/thingmal?type=lagafrumvarp',
  thingmalDetail: '/s/althingi/thingstorf/thingmal/1',
  thingmalSkjal: '/s/althingi/thingstorf/thingmal/1/skjal/1',
  thingfundir: '/s/althingi/thingstorf/thingfundir-og-raedur',
  thingfundur: '/s/althingi/thingstorf/thingfundir-og-raedur/1',
  upptokur: '/s/althingi/thingstorf/thingfundir-og-raedur/upptokur',

  thingmenn: '/s/althingi/thingmenn',
  thingmennDetail: '/s/althingi/thingmenn/logi-einarsson',

  umAlthingi: '/s/althingi/um-althingi',
  umAlthingiEN: '/s/althingi/um-althingi/en',
  utgefidEfni: '/s/althingi/um-althingi/utgefid-efni',
  handbaekur: '/s/althingi/um-althingi/utgefid-efni?query=handbók',
  handbok: '/s/althingi/um-althingi/utgefid-efni/1',
  handbokKafli: '/s/althingi/um-althingi/utgefid-efni/1/1',
}

export const searchItems: Array<SearchItem> = [
  {
    id: '1',
    eyebrow: 'Félags- og húsnæðismálaráðherra',
    title:
      'Almannatryggingar og endurskoðun örorkulífeyriskerfis almannatrygginga',
    description: '(aldursviðbót, launavísitala og tölfræðiupplýsingar)',
    tags: [
      { label: '3. umræða', color: 'purple', outlined: false },
      { label: 'Lagafrumvarp', color: 'blue', outlined: true },
    ],
    info: '315. mál lagafrumvarp',
    date: '26. mars 2025',
    link: '/thingmal/1',
  },
  {
    id: '2',
    eyebrow: 'Félags- og húsnæðismálaráðherra',
    title: 'Afurðasjóður Grindavíkurbæjar',
    description: '(framlenging)',
    tags: [
      { label: '3. umræða', color: 'purple', outlined: false },
      { label: 'Lagafrumvarp', color: 'blue', outlined: true },
    ],
    info: '315. mál lagafrumvarp',
    date: '12. mars 2025',
    link: '/thingmal/2',
  },
  {
    id: '2',
    eyebrow: 'Félags- og húsnæðismálaráðherra',
    title: 'Afurðasjóður Grindavíkurbæjar',
    description: '(framlenging)',
    tags: [
      { label: '3. umræða', color: 'purple', outlined: false },
      { label: 'Lagafrumvarp', color: 'blue', outlined: true },
    ],
    info: '315. mál lagafrumvarp',
    date: '12. mars 2025',
    link: '/thingmal/2',
  },
  {
    id: '2',
    eyebrow: 'Félags- og húsnæðismálaráðherra',
    title: 'Afurðasjóður Grindavíkurbæjar',
    description: '(framlenging)',
    tags: [
      { label: '3. umræða', color: 'purple', outlined: false },
      { label: 'Lagafrumvarp', color: 'blue', outlined: true },
    ],
    info: '315. mál lagafrumvarp',
    date: '12. mars 2025',
    link: '/thingmal/2',
  },
  {
    id: '2',
    eyebrow: 'Félags- og húsnæðismálaráðherra',
    title: 'Afurðasjóður Grindavíkurbæjar',
    description: '(framlenging)',
    tags: [
      { label: '3. umræða', color: 'purple', outlined: false },
      { label: 'Lagafrumvarp', color: 'blue', outlined: true },
    ],
    info: '315. mál lagafrumvarp',
    date: '12. mars 2025',
    link: '/thingmal/2',
  },
  {
    id: '2',
    eyebrow: 'Félags- og húsnæðismálaráðherra',
    title: 'Afurðasjóður Grindavíkurbæjar',
    description: '(framlenging)',
    tags: [
      { label: '3. umræða', color: 'purple', outlined: false },
      { label: 'Lagafrumvarp', color: 'blue', outlined: true },
    ],
    info: '315. mál lagafrumvarp',
    date: '12. mars 2025',
    link: '/thingmal/2',
  },
  {
    id: '2',
    eyebrow: 'Félags- og húsnæðismálaráðherra',
    title: 'Afurðasjóður Grindavíkurbæjar',
    description: '(framlenging)',
    tags: [
      { label: '3. umræða', color: 'purple', outlined: false },
      { label: 'Lagafrumvarp', color: 'blue', outlined: true },
    ],
    info: '315. mál lagafrumvarp',
    date: '12. mars 2025',
    link: '/thingmal/2',
  },
]

export const OrganizationMock: Organization = {
  email: 'althingi@althingi.is',
  slug: 'althingi',
  phone: '+354 123 4567',
  id: 'althingi',
  title: 'Alþingi',
  shortTitle: 'Alþingi',
  tag: [],
  publishedMaterialSearchFilterGenericTags: [],
  footerItems: [
    {
      title: 'Alþingi',
      id: '123',
      link: {
        text: 'Alþingi',
        id: '123',
        date: '123',
        url: 'https://www.althingi.is',
      },
    },
  ],
  logo: {
    url: '/assets/althingi-gold-logo.png',
    width: 120,
    height: 60,
    contentType: 'image/jpeg',
    id: 'logo-id',
    title: 'Alþingi Logo',
  },
}

export const mockEventList = [
  {
    id: '1',
    title: 'Event One',
    slug: 'event-one',
    startDate: '2023-12-01',
    time: {
      startTime: '10:00',
      endTime: '12:00',
    },
    location: {
      __typename: 'EventLocation',

      streetAddress: 'Reykjavik Street 1',

      floor: null,

      postalCode: '101',

      useFreeText: true,

      freeText: 'Reykjavik',
    },
    thumbnailImage: {
      url: 'https://via.placeholder.com/150',
    },
  },
  {
    id: '2',
    title: 'Event Two',
    slug: 'event-two',
    startDate: '2023-12-05',
    time: {
      startTime: '14:00',
      endTime: '16:00',
    },
    location: {
      __typename: 'EventLocation',

      streetAddress: 'Reykjavik Street 1',

      floor: null,

      postalCode: '101',

      useFreeText: true,

      freeText: 'Reykjavik',
    },
    thumbnailImage: {
      url: 'https://via.placeholder.com/150',
    },
  },
  {
    id: '3',
    title: 'Event Three',
    slug: 'event-three',
    startDate: '2023-12-10',
    time: {
      startTime: '09:00',
      endTime: '11:00',
    },
    location: {
      __typename: 'EventLocation',

      streetAddress: 'Reykjavik Street 1',

      floor: null,

      postalCode: '101',

      useFreeText: true,

      freeText: 'Reykjavik',
    },
    thumbnailImage: {
      url: 'https://via.placeholder.com/150',
    },
  },
]

export const mockInfoCards: Array<{
  id: string
  title: string
  description: string
  link: { label: string; href: string }
  detailLines?: Array<{
    icon: IconMapIcon
    text: string
  }>
  tags?: Array<ActionCardProps['tag']>
  eyebrow: string
}> = [
  {
    id: '1',
    title:
      'Skipulögð glæpastarfsemi – fyrirspurn, Nanna Margrét Gunnlaugsdóttir',
    description: '(aldursviðbót, launavísitala og tölfræðiupplýsingar)',
    link: { label: 'Info Card One', href: '/info-card/1' },
    detailLines: [
      {
        icon: 'informationCircle',
        text: 'Þingskjal 442',
      },
      {
        icon: 'calendar',
        text: '5. maí 2025',
      },
    ],
    tags: [{ label: 'Þingskjöl' }],
    eyebrow: '',
  },
  {
    id: '2',
    title: 'Mannréttindastofnun Íslands tekin til starfa',
    description:
      'Mannréttindastofnun Íslands tók til starfa 1. maí sl. og starfar hún á vegum Alþingis samkvæmt lögum nr. 88/2024. Vefsíða embættisins er www.mannrettindi.is en hún er enn í vinnslu.',
    link: { label: 'Info Card Two', href: '/info-card/2' },
    detailLines: [
      {
        icon: 'calendar',
        text: '5. maí 2025',
      },
    ],
    tags: [{ label: 'Tilkynningar' }],
    eyebrow: '',
  },

  {
    id: '5',
    title:
      'Tekjustofnar sveitarfélaga (niðurfelling fasteignaskatta í Grindavíkurbæ).',
    description: '(aldursviðbót, launavísitala og tölfræðiupplýsingar)',
    link: { label: 'Info Card Five', href: '/info-card/5' },
    detailLines: [
      {
        icon: 'informationCircle',
        text: 'Þingskjal 392, 156. löggjafarþing 98. mál',
      },
      {
        icon: 'calendar',
        text: '23. maí 2025',
      },
    ],
    tags: [{ label: 'Lög og ályktanir' }],
    eyebrow: '',
  },
]

export const mockInfoStaffCards: Array<{
  id: string
  title: string
  description: string
  link: { label: string; href: string }
  detailLines?: Array<{
    icon: IconMapIcon
    text: string
  }>
  tags?: Array<ActionCardProps['tag']>
  eyebrow: string
}> = [
  {
    id: '1',
    title: 'Logi Einarsson',
    description: 'Menningar-, nýsköpunar- og háskólaráðherra',
    link: {
      label: 'Skoða nánar',
      href: '/s/althingi/thingmenn/logi-einarsson',
    },
    detailLines: [
      {
        icon: 'mail',
        text: 'logi.einarsson@althingi.is',
      },
      {
        icon: 'call',
        text: '862-7881',
      },
      {
        icon: 'facebook',
        text: '/logi.einarsson',
      },
    ],
    tags: [{ label: 'Samfylkingin' }, { label: 'Norðausturkjördæmi' }],
    eyebrow: '',
  },
  {
    id: '1',
    title: 'Áslaug Arna Sigurbjörnsdóttir',
    description: 'Alþingismaður',
    link: {
      label: 'Skoða nánar',
      href: '/s/althingi/thingmenn/aslaug-arna-sigurbjornsdottir',
    },
    detailLines: [
      {
        icon: 'mail',
        text: 'aslaug.arna@althingi.is',
      },
      {
        icon: 'call',
        text: '687-9000',
      },
      {
        icon: 'facebook',
        text: '/aslaug.arna',
      },
    ],
    tags: [
      { label: 'Sjálfstæðisflokkurinn' },
      { label: 'Reykjavíkurkjördæmi suður' },
    ],
    eyebrow: '',
  },
  {
    id: '1',
    title: 'Alma D. Möller',
    description: 'Heilbrigðisráðherra',
    link: {
      label: 'Skoða nánar',
      href: '/s/althingi/thingmenn/alma-moller',
    },
    detailLines: [
      {
        icon: 'mail',
        text: 'alma.moller@althingi.is',
      },
      {
        icon: 'call',
        text: '774-2343',
      },
      {
        icon: 'facebook',
        text: '/alma.moller',
      },
    ],
    tags: [{ label: 'Samfylkingin' }, { label: 'Suðvesturkjördæmi' }],
    eyebrow: '',
  },
]

export interface InfoCaseCards {
  id: string
  title: string
  description: string
  link: { label: string; href: string }
  detailLines?: Array<{
    icon: IconMapIcon
    text: string
  }>
  tags?: Array<ActionCardProps['tag']>
  eyebrow: string
  subEyebrow: string
}
export const mockInfoCaseCards: Array<InfoCaseCards> = [
  {
    id: '1',
    description: 'Aldursviðbót, launavísitala og tölfræðiupplýsingar.',
    eyebrow: 'Málsnúmer 259',
    title:
      'Almannatryggingar og endurskoðun örorkulífeyriskerfis almannatrygginga',
    link: {
      href: paths.thingmalDetail,
      label: 'Skoða mál',
    },
    subEyebrow: '156. löggjafarþing 2025',

    detailLines: [
      {
        icon: 'calendar',
        text: 'Útbýtingadagur: 26. mars 2025',
      },
      {
        icon: 'person',
        text: 'Félgag- og húsnæðismálaráðherra',
      },
      {
        icon: 'informationCircle',
        text: 'Umsagnir: 3',
      },
    ],
    tags: [
      {
        label: '3. umræða',
        outlined: false,

        variant: 'purple',
      },
      {
        label: 'Lagafrumvarp',
        outlined: true,
        variant: 'blue',
      },
    ],
  },
  {
    id: '1',
    description: 'Aldursviðbót, launavísitala og tölfræðiupplýsingar.',
    eyebrow: 'Málsnúmer 259',
    title:
      'Almannatryggingar og endurskoðun örorkulífeyriskerfis almannatrygginga',
    link: {
      href: paths.thingmalDetail,
      label: 'Skoða mál',
    },
    subEyebrow: '156. löggjafarþing 2025',

    detailLines: [
      {
        icon: 'calendar',
        text: 'Útbýtingadagur: 26. mars 2025',
      },
      {
        icon: 'person',
        text: 'Félgag- og húsnæðismálaráðherra',
      },
      {
        icon: 'informationCircle',
        text: 'Umsagnir: 3',
      },
    ],
    tags: [
      {
        label: '3. umræða',
        outlined: false,

        variant: 'purple',
      },
      {
        label: 'Lagafrumvarp',
        outlined: true,
        variant: 'blue',
      },
    ],
  },
  {
    id: '1',
    description: 'Aldursviðbót, launavísitala og tölfræðiupplýsingar.',
    eyebrow: 'Málsnúmer 259',
    title: 'Grunnskólar',
    link: {
      href: paths.thingmalDetail,
      label: 'Skoða mál',
    },
    subEyebrow: '97. löggjafarþing 2025',

    detailLines: [
      {
        icon: 'calendar',
        text: 'Útbýtingadagur: 4. febrúar 2025',
      },
      {
        icon: 'person',
        text: 'Mennta- og barnamálaráðherra',
      },
      {
        icon: 'informationCircle',
        text: 'Umsagnir: 2',
      },
    ],
    tags: [
      {
        label: '3. umræða',
        outlined: false,

        variant: 'purple',
      },
      {
        label: 'Lagafrumvarp',
        outlined: true,
        variant: 'blue',
      },
    ],
  },
  {
    id: '1',
    description: 'Aldursviðbót, launavísitala og tölfræðiupplýsingar.',
    eyebrow: 'Málsnúmer 259',
    title:
      'Almannatryggingar og endurskoðun örorkulífeyriskerfis almannatrygginga',
    link: {
      href: paths.thingmalDetail,
      label: 'Skoða mál',
    },
    subEyebrow: '156. löggjafarþing 2025',

    detailLines: [
      {
        icon: 'calendar',
        text: 'Útbýtingadagur: 26. mars 2025',
      },
      {
        icon: 'person',
        text: 'Félgag- og húsnæðismálaráðherra',
      },
      {
        icon: 'informationCircle',
        text: 'Umsagnir: 3',
      },
    ],
    tags: [
      {
        label: '3. umræða',
        outlined: false,

        variant: 'purple',
      },
    ],
  },
]

export interface MockHandbook {
  title: string
  description: string
  publicationDate: string
  publicationVersion: string
  publisher: string
  href: string
  textSlices: Array<{
    label: string
    lines: Array<string>
  }>
  chapters?: Array<{
    title: string
    text: string
  }>
  links?: Array<{
    label: string
    href: string
  }>
}

const chapters = [
  {
    title: 'Alþingi og alþingismenn',
    text: 'Starfssemi yfirstandandi þings; þingmál, umsangir, skýrslur, þingfundir og ræður',
  },
  {
    title: 'Störf í þingsal',
    text: 'Sitjandi aðal- og varaþingmenn, þingflokkar, hagsmunaskrá og sögulegar upplýsingar',
  },
  {
    title: 'Nefndarstörf',
    text: 'Starfssemi yfirstandandi þings; þingmál, umsangir, skýrslur, þingfundir og ræður',
  },
  {
    title: 'Alþjóðastarf',
    text: 'Sitjandi aðal- og varaþingmenn, þingflokkar, hagsmunaskrá og sögulegar upplýsingar',
  },
  {
    title: 'Starfskjör',
    text: 'Starfssemi yfirstandandi þings; þingmál, umsangir, skýrslur, þingfundir og ræður',
  },
  {
    title: 'Hátterni og hagsmunaskráning',
    text: 'Sitjandi aðal- og varaþingmenn, þingflokkar, hagsmunaskrá og sögulegar upplýsingar',
  },
]

const links = [
  {
    label: 'Handbók Alþingis 2024',
    href: paths.handbaekur,
  },
  {
    label: 'Handbók Alþingis 2021',
    href: paths.handbaekur,
  },
  {
    label: 'Handbók Alþingis 2017',
    href: paths.handbaekur,
  },
]

export const mockHandbooks: Array<MockHandbook> = [
  {
    title: 'Háttvirtur þingmaður - Handbók um þingstörfin 2024',
    description:
      'Upplýsingarit fyrir nýkjörna alþingismenn og varaþingmenn. Ritinu er einnig ætlað að gagnast þeim sem hafa áhuga á starfsemi Alþingis.',
    publicationDate: 'Desember 2024',
    publicationVersion: '3. útgáfa',
    publisher: 'Skrifstofa Alþingis',
    href: '2024',
    links,
    textSlices: [
      {
        label: 'Formálsorð',
        lines: [
          'Upplýsingaritið Háttvirtur þingmaður, sem skrifstofa Alþingis annast, kemur nú út í tíunda skipti. Venja hefur verið að gefa ritið út eftir hverjar alþingiskosningar. Efni ritsins hefur verið uppfært frá fyrri útgáfu.',
          'Ritið er einkum hugsað til leiðbeiningar fyrir nýkjörna alþingismenn, svo og varaþingmenn sem setjast á Alþingi á kjörtímabilinu. Þess er þó enn fremur vænst að ritið nýtist öllum alþingismönnum sem geta á einum stað nálgast ýmsar hagnýtar upplýsingar um starfsvenjur og starfskjör sín. Þá er einnig haft í huga að ritið komi að notum hjá þeim sem hafa samskipti við Alþingi sem og þeim sem hafa áhuga á hvernig Alþingi starfar og hvernig búið er að alþingismönnum',
        ],
      },
    ],
    chapters,
  },
  {
    title: 'Ársreikningur Alþingis 2024',
    description: 'Ársreikningur Alþingis 2024',
    publicationDate: 'Janúar 2025',
    publicationVersion: '1. útgáfa',
    publisher: 'Skrifstofa Alþingis',
    href: '2024',
    links,
    textSlices: [
      {
        label: 'Formálsorð',
        lines: [
          'Upplýsingaritið Háttvirtur þingmaður, sem skrifstofa Alþingis annast, kemur nú út í tíunda skipti. Venja hefur verið að gefa ritið út eftir hverjar alþingiskosningar. Efni ritsins hefur verið uppfært frá fyrri útgáfu.',
          'Ritið er einkum hugsað til leiðbeiningar fyrir nýkjörna alþingismenn, svo og varaþingmenn sem setjast á Alþingi á kjörtímabilinu. Þess er þó enn fremur vænst að ritið nýtist öllum alþingismönnum sem geta á einum stað nálgast ýmsar hagnýtar upplýsingar um starfsvenjur og starfskjör sín. Þá er einnig haft í huga að ritið komi að notum hjá þeim sem hafa samskipti við Alþingi sem og þeim sem hafa áhuga á hvernig Alþingi starfar og hvernig búið er að alþingismönnum',
        ],
      },
    ],
    chapters,
  },
  {
    title: 'Handbók Alþingis 2021',
    description: 'Handbók um þingstörfin',
    publicationDate: 'Desember 2024',
    publicationVersion: '3. útgáfa',
    publisher: 'Skrifstofa Alþingis',
    href: '2024',
    links,
    chapters,
    textSlices: [
      {
        label: 'Um handbókina',
        lines: [
          'Handbók alþingins kemur jafnan út á fyrsta reglulega þingi eftir kosningar. Sú fyrsta var gefin út.',
          'Handbækur eru til á rafrænu formi frá árinu 1999.',
          `Handbókin er uppflettirit um starfsemi þingsins og alþingismenn. Í
        henni eru upplýsingar um síðustu alþingiskosningar hverju sinni,
        upplýsingar um skipan þingsins og ýmsar skrár um alþingsmenn.
        Meðal annars má þar finna æviágrip þingmanna, ýmsa tölfræði,
        upplýsingar um þingflokka og nefndaskipan, svo eitthvað sé nefnt.
        Í viðaukum handbókar eru upplýsningar um starfsmenn skrifstofu
        Alþingis og starfsmenn þingflokka, auk starfsmanna þeirra
        stofnanna sem undir Alþingi heyra.`,
        ],
      },
    ],
  },
  {
    title: 'Ársreikningur Alþingis 2020',
    description: 'Ársreikningur Alþingis 2020',
    publicationDate: 'Janúar 2021',
    publicationVersion: '1. útgáfa',
    publisher: 'Skrifstofa Alþingis',
    href: '2021',
    links,
    textSlices: [
      {
        label: 'Formálsorð',
        lines: [
          'Upplýsingaritið Háttvirtur þingmaður, sem skrifstofa Alþingis annast, kemur nú út í tíunda skipti. Venja hefur verið að gefa ritið út eftir hverjar alþingiskosningar. Efni ritsins hefur verið uppfært frá fyrri útgáfu.',
          'Ritið er einkum hugsað til leiðbeiningar fyrir nýkjörna alþingismenn, svo og varaþingmenn sem setjast á Alþingi á kjörtímabilinu. Þess er þó enn fremur vænst að ritið nýtist öllum alþingismönnum sem geta á einum stað nálgast ýmsar hagnýtar upplýsingar um starfsvenjur og starfskjör sín. Þá er einnig haft í huga að ritið komi að notum hjá þeim sem hafa samskipti við Alþingi sem og þeim sem hafa áhuga á hvernig Alþingi starfar og hvernig búið er að alþingismönnum',
        ],
      },
    ],
    chapters,
  },
  {
    title: 'Handbók Alþingis 2017',
    description: 'Handbók um þingstörfin',
    publicationDate: 'Desember 2024',
    publicationVersion: '3. útgáfa',
    publisher: 'Skrifstofa Alþingis',
    href: '2024',
    chapters,
    links,
    textSlices: [
      {
        label: 'Um handbókina',
        lines: [
          'Handbók alþingins kemur jafnan út á fyrsta reglulega þingi eftir kosningar. Sú fyrsta var gefin út.',
          'Handbækur eru til á rafrænu formi frá árinu 1999.',
          `Handbókin er uppflettirit um starfsemi þingsins og alþingismenn. Í
        henni eru upplýsingar um síðustu alþingiskosningar hverju sinni,
        upplýsingar um skipan þingsins og ýmsar skrár um alþingsmenn.
        Meðal annars má þar finna æviágrip þingmanna, ýmsa tölfræði,
        upplýsingar um þingflokka og nefndaskipan, svo eitthvað sé nefnt.
        Í viðaukum handbókar eru upplýsningar um starfsmenn skrifstofu
        Alþingis og starfsmenn þingflokka, auk starfsmanna þeirra
        stofnanna sem undir Alþingi heyra.`,
        ],
      },
    ],
  },
]

export interface TableColumn {
  value: string
  isLink?: boolean
  icon?: IconProps['icon']
}

export interface TableItem {
  title: string
  headers: string[]
  columns: TableColumn[][]
  isLink?: boolean
}

export const tabledata: TableItem[] = [
  {
    title: 'Þingskjöl',
    headers: ['Útbýtingadagur', 'Þingskjal', 'Flutningamaður'],
    columns: [
      [
        { value: '31.10.2024' },
        { value: '97. stjórnarfrumvarp', isLink: true },
        { value: 'Mennta- og barnamálaráðherra', isLink: true },
      ],
    ],
  },
  {
    title: 'Umræða í þingsal',
    headers: [
      'Dags. umræðu',
      'Þingfundur',
      'Tegund umræðu',
      'Tími umræðu',
      ' ',
    ],
    columns: [
      [
        { value: '31.10.2024' },
        { value: '6.fundur', isLink: true },
        { value: '1. umræða - 2 atkvæðagreiðslur', isLink: true },
        {
          value: '10:50-11:30',
          isLink: true,
        },
        {
          value: 'Horfa',
          isLink: true,
          icon: 'arrowForward',
        },
      ],
    ],
  },
  {
    title: 'Umfjöllun í nefndum',
    headers: ['Dagsetning', 'Fundur', 'Nefnd'],
    columns: [
      [
        { value: '31.10.2024' },
        { value: '3.fundur', isLink: true },
        { value: 'Alls­herjar- og mennta­mála­nefnd' },
      ],
      [
        { value: '31.10.2024' },
        { value: '6.fundur', isLink: true },
        { value: 'Alls­herjar- og mennta­mála­nefnd' },
      ],
    ],
  },
]

export const secondTableData: TableItem[] = [
  {
    title: 'Þingskjöl',
    headers: ['Útbýtingadagur', 'Þingskjal', 'Flutningamaður'],
    columns: [
      [
        { value: '31.10.2024' },
        { value: '97. stjórnarfrumvarp', isLink: true },
        { value: 'Mennta- og barnamálaráðherra', isLink: true },
      ],
    ],
  },
  {
    title: 'Umræða í þingsal',
    headers: [
      'Dags. umræðu',
      'Þingfundur',
      'Tegund umræðu',
      'Tími umræðu',
      ' ',
    ],
    columns: [
      [
        { value: '31.10.2024' },
        { value: '6.fundur', isLink: true },
        { value: '1. umræða - 2 atkvæðagreiðslur', isLink: true },
        {
          value: '10:50-11:30',
          isLink: true,
        },
        {
          value: 'Horfa',
          isLink: true,
          icon: 'arrowForward',
        },
      ],
    ],
  },
  {
    title: 'Umfjöllun í nefndum',
    headers: ['Dagsetning', 'Fundur', 'Nefnd'],
    columns: [
      [
        { value: '31.10.2024' },
        { value: '3.fundur', isLink: true },
        { value: 'Alls­herjar- og mennta­mála­nefnd' },
      ],
      [
        { value: '31.10.2024' },
        { value: '6.fundur', isLink: true },
        { value: 'Alls­herjar- og mennta­mála­nefnd' },
      ],
    ],
  },
]

export const videoTag = [
  {
    variant: 'blue' as TagVariant,
    outlined: false,
    active: true,
    href: '/althingi/thingmal',
    children: 'Dagskrá þingfundar',
  },
  {
    variant: 'blue' as TagVariant,
    outlined: true,
    href: '/althingi/thingmal',
    children: 'Fundir og heimsóknir',
  },
]

export const videoTranscript = [
  {
    id: '1',
    title: 'Störf þingsins',
    contentLines: [
      '351. mál, lagafrumvarp atvinnuvegaráðherra. -Framhald 1. umræðu',
    ],
    links: [
      {
        href: 'example.com',
        label: 'Mælendaskrá',
      },
    ],
  },
  {
    id: '2',
    title: 'Veiðigjald (aflaverðmæti í reiknistofni)',
    links: [
      {
        href: 'example.com',
        label: 'Mælendaskrá',
      },
      {
        href: 'example.com',
        label: 'Nánar',
      },
    ],
  },
]

export const mockAboutArticles = [
  {
    title: 'Handbækur Alþingis',
    description:
      'Alþingi gefur út handbækur og upplýsingarit ætluð þingmönnum og starfsmönnum þingsins. Handbækurnar gagnast einnig þeim sem hafa samskipti við þingið eða vilja öðlast betri innsýn í störf þess og starfsreglur.',
    url: paths.handbaekur,
  },
  {
    title: 'Nýbygging á Alþingisreit',
    description:
      'Nýbygging Alþingis hefur hlotið mikla athygli fyrir arkitektúr. Að baki hennar eru Studio Granda, arkitetkarnir Margrét Harðardóttir og Steve Christer auk Kristinns E. Hrafnssonar sem er höfundur listskreytingar.',
    url: paths.umAlthingi,
  },
  {
    title: 'Heimsóknir í Alþingishúsið',
    description:
      'Boðið er upp á leiðsögn og fræðslu fyrir skóla og aðra hópa í námslegum tilgang. Ekki er boðið upp á leiðsögn fyrir almenna gesti.',
    url: paths.umAlthingi,
  },
]

export const mockAboutArticlesEN = [
  {
    title: 'Handbooks and manuals',
    description:
      'The Alþingi publishes manuals and informational materials intended for parliament members and parliamentary staff. These handbooks are also useful for those who communicate with the Parliament.',
    url: paths.handbaekur,
  },
  {
    title: 'New Parliament building',
    description:
      'The new Parliament building has received significant attention for its architecture. Behind it are Studio Granda, architects Margrét Harðardóttir and Steve Christer, along with Kristinn E. Hrafnsson, who is responsible for the artwork and decorations',
    url: paths.umAlthingi,
  },
  {
    title: 'Visits to the Parliament',
    description:
      'Guided tours and educational programs are available for schools and other groups for learning purposes. However, guided tours are not offered to general visitors.',
    url: paths.umAlthingi,
  },
]

export const mockThingstorfArticles = [
  {
    title: 'Þingmálaskrá',
    description:
      'Yfirlit yfir lagafrumvörp og önnur mál sem lögð hafa verið fram og stöðu þeirra.',
    url: paths.thingmal,
  },
  {
    title: 'Lagafrumvörp',
    description:
      'Yfirlit yfir lagafrumvörp og önnur mál sem lögð hafa verið fram og stöðu þeirra.',
    url: paths.thingmalLagafrumvarp,
  },
  {
    title: 'Fundargerðir og upptökur',
    description:
      'Hér má nálgast upptökur og fundargerðir af fundum Alþingis og hægt að skoða nánar ákveðnar umræður á þingi.',
    url: paths.thingfundir,
  },
  {
    title: 'Ræður',
    description:
      'Gervigreind skrifar upp ræður þingmanna og sérfræðingar í útgáfudeild lesa hann yfir. Bráðabirgðaútgáfa ræðutexta er aðgengileg á vefnum undir nafni ræðumanns jafnskjótt og hann hefur verið yfirlesinn.',
    url: paths.thingfundir,
  },
  {
    title: 'Dagskrá þingfundar',
    description: 'Upplýsingar um dagskrá þingfundar má nálgast hér',
    url: paths.thingfundir,
  },
]

interface FullWidthTranscript {
  title: string
  subtitle?: string
  chapters: Array<{
    timestamp?: string
    label: string
    link?: string
  }>
}

export const fullWidthVideoTranscript: FullWidthTranscript = {
  title: '34. þingfundur',
  subtitle: 'Mánudaginn 5. maí, kl. 15:00 síðdegis',
  chapters: [
    {
      timestamp: '15:00',
      label: 'Varamenn taka þingsæti',
      link: 'example.com',
    },
    {
      timestamp: '13:43',
      label: 'Drengskapaheit',
      link: 'example.com',
    },
    {
      timestamp: '15:03',
      label: 'Lengd þingfundar',
      link: 'example.com',
    },
    {
      timestamp: '15:40',
      label: 'Veiðigjald, 1. umr.',
      link: 'example.com',
    },
    {
      label: 'Óundirbúinn fyrirspurnatími',
    },
  ],
}
