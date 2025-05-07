import { useState } from 'react'
import { useWindowSize } from 'react-use'

import {
  Box,
  Filter,
  FilterInput,
  FilterMultiChoice,
  FocusableBox,
  Icon,
  LinkV2,
  Stack,
  Tag,
  Text,
} from '@island.is/island-ui/core'
import { theme } from '@island.is/island-ui/theme'
import { type Locale } from '@island.is/shared/types'
import { SLICE_SPACING } from '@island.is/web/constants'
import { withMainLayout } from '@island.is/web/layouts/main'
import { Screen } from '@island.is/web/types'
import { mockHandbooks, paths } from '@island.is/web/utils/mockData'

import Layout from '../Layout'

interface UtgefidEfniProps {
  title: string
  locale: Locale
}

const UtgefidEfni: Screen<UtgefidEfniProps> = ({ title }) => {
  const { width } = useWindowSize()

  const isMobile = width < theme.breakpoints.md

  const [searchInput, setSearchInput] = useState<string>()

  const [hideTag, setHideTag] = useState<boolean>(false)

  const data = mockHandbooks

  return (
    <Layout
      title={title}
      mainLayout={
        <Box className="rs_read" background="blue100" width="full" padding={6}>
          bleble
        </Box>
      }
    >
      <Stack space={SLICE_SPACING}>
        <section>
          <Box marginTop={2}>
            <Text variant="h1">{title}</Text>
            <Text variant="intro" as="p" paddingTop={3} marginBottom={3}>
              Hér má finna handbækur og skýrslur Alþingis
            </Text>
            <Filter
              reverse
              resultCount={123}
              labelClear={'Hreinsa síu'}
              labelClearAll={'Hreinsa allar síur'}
              labelOpen={'Sía niðurstöður'}
              labelClose={'Loka síu'}
              labelResult={'Skoða niðurstöður'}
              labelTitle={'Sía niðurstöður'}
              variant={isMobile ? 'dialog' : 'popover'}
              onFilterClear={() => {
                console.log('clearing all filters')
              }}
              filterInput={
                <FilterInput
                  backgroundColor={'blue'}
                  name={'Filter input'}
                  value={searchInput ?? ''}
                  onChange={(e) => setSearchInput(e)}
                  placeholder="Leita eftir nafni"
                />
              }
            >
              <FilterMultiChoice
                labelClear={'Hreinsa val'}
                onChange={({ categoryId, selected }) => {
                  console.log('changing', categoryId, selected)
                }}
                onClear={(categoryId) => {
                  console.log('clearing', categoryId)
                }}
                categories={[
                  {
                    filters: [
                      { label: 'Samfylking', value: 'althingismenn' },
                      { label: 'Sjálfstæðisflokkur', value: 'radherrar' },
                    ],
                    id: '??',
                    label: 'Þingflokkur',
                    selected: [],
                  },
                  {
                    filters: [
                      { label: 'Reykjavík norður', value: 'rvk-nordur' },
                      { label: 'Reykjavík suður', value: 'rvk-sudur' },
                      { label: 'Suðvesturkjördæmi', value: 'sudvestur' },
                      { label: 'Suðurkjördæmi', value: 'sudur' },
                      { label: 'Norðausturkjördæmi', value: 'nordaustur' },
                      { label: 'Norðvesturkjördæmi', value: 'nordvestur' },
                    ],
                    id: '??',
                    label: 'Kjördæmi',
                    selected: [],
                  },
                  {
                    filters: [
                      { label: 'Alþingismenn', value: 'althingismenn' },
                      { label: 'Ráðherrar', value: 'radherrar' },
                    ],
                    id: '??',
                    label: 'Ráðuneyti',
                    selected: [],
                  },
                ]}
              />
            </Filter>
            {!hideTag && (
              <Box marginTop={2}>
                <Tag onClick={() => setHideTag(true)}>
                  <Box display="flex" alignItems="center">
                    <Box marginRight={1} as="span">
                      Háttvirtur þingmaður - handbók um þingstörfin
                    </Box>
                    <Icon icon="close" size="small" />
                  </Box>
                </Tag>
              </Box>
            )}
          </Box>
        </section>
        <section>
          <Stack space={2}>
            {data.map((t, index) => (
              <FocusableBox
                key={`${t.title}-${index}`}
                component={LinkV2}
                href={paths.handbaekur}
                paddingY={2}
                paddingX={3}
                background="blue100"
                borderRadius="large"
              >
                <Text fontWeight="semiBold" variant="medium" color="blue400">
                  {t.title}
                </Text>
              </FocusableBox>
            ))}
          </Stack>
        </section>
      </Stack>
    </Layout>
  )
}

UtgefidEfni.getProps = async ({ locale }) => {
  const lang: Locale = locale === 'en' ? 'en' : 'is'

  return {
    title: 'Útgefið efni',
    locale: lang,
  }
}

export default withMainLayout(UtgefidEfni, { showFooter: false })
