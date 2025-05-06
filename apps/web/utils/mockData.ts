import { Organization } from '../graphql/schema'
import { SearchItem } from './types'

export const searchItems: Array<SearchItem> = [
  {
    id: '1',
    eyebrow: 'Félags- og húsnæðismálaráðherra',
    title:
      'Almannatryggingar og endurskoðun örorkulífeyriskerfis almannatrygginga',
    description: '(aldursviðbót, launavísitala og tölfræðiupplýsingar)',
    tags: ['Lagafrumvarp'],
    info: '315. mál lagafrumvarp',
    date: '26. mars 2025',
    link: '/thingmal/1',
  },
  {
    id: '2',
    eyebrow: 'Félags- og húsnæðismálaráðherra',
    title: 'Afurðasjóður Grindavíkurbæjar',
    description: '(framlenging)',
    tags: ['Lagafrumvarp'],
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
    url: 'https://www.althingi.is/media/uncategorized/medium/utsendingar.jpg',
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
  eyebrow: string
}> = [
  {
    id: '1',
    title: 'Info Card One',
    description: 'Description for info card one.',
    link: { label: 'Info Card One', href: '/info-card/1' },
    eyebrow: '',
  },
  {
    id: '2',
    title: 'Info Card Two',
    description: 'Description for info card two.',
    link: { label: 'Info Card Two', href: '/info-card/2' },
    eyebrow: '',
  },

  {
    id: '5',
    title: 'Info Card Five',
    description: 'Description for info card five.',
    link: { label: 'Info Card Five', href: '/info-card/5' },
    eyebrow: '',
  },
]
