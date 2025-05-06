import { IconMapIcon } from '@island.is/island-ui/core'
import { ActionCardProps } from '@island.is/island-ui/core/types'

import { Organization } from '../graphql/schema'
import { SearchItem } from './types'

export const paths = {
  home: '/s/althingi',

  thingstorf: '/s/althingi/thingstorf',
  thingmal: '/s/althingi/thingstorf/thingmal',
  thingmalDetail: '/s/althingi/thingstorf/thingmal/1',
  thingfundir: '/s/althingi/thingstorf/thingfundir-og-raedur',
  thingfundur: '/s/althingi/thingstorf/thingfundir-og-raedur/1',
  upptokur: '/s/althingi/thingstorf/thingfundir/upptokur',

  thingmenn: '/s/althingi/thingmenn',
  thingmennDetail: '/s/althingi/thingmenn/logi-einarsson',
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

export const mockInfoCaseCards: Array<{
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
}> = [
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
