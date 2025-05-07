import { useState } from 'react'
import { useWindowSize } from 'react-use'

import {
  Box,
  Divider,
  FilterInput,
  FocusableBox,
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

interface HandbookProps {
  locale: Locale
}

const Handbook: Screen<HandbookProps> = ({ locale }) => {
  const { width } = useWindowSize()
  const isMobile = width < theme.breakpoints.md

  const [searchInput, setSearchInput] = useState<string>()

  const data = mockHandbooks[0]

  return (
    <Layout
      title={data.title}
      mainLayout={
        <Box className="rs_read" background="blue100" width="full" padding={6}>
          bleble
        </Box>
      }
    >
      <Stack space={SLICE_SPACING}>
        <section>
          <Box marginTop={2}>
            <Text variant="h1">{data.title}</Text>
            <Text variant="intro" as="p" paddingTop={3} marginBottom={3}>
              {data.description}
            </Text>
            <FilterInput
              backgroundColor={'blue'}
              name={'Filter input'}
              value={searchInput ?? ''}
              onChange={(e) => setSearchInput(e)}
              placeholder="Leita í handbók"
            />
          </Box>
        </section>

        <Divider />
        {data.textSlices.map((slice) => (
          <section>
            <Stack space={2}>
              <Box marginBottom={1}>
                <Text variant="h3" as="h3">
                  {data.title}
                </Text>
              </Box>
              {slice.lines.map((line) => (
                <Text>{line}</Text>
              ))}
            </Stack>
          </section>
        ))}
        {data.chapters && (
          <section>
            <Box marginBottom={1}>
              <Text color="blue600" variant="eyebrow">
                Kaflar
              </Text>
            </Box>

            <Box className={styles.grid}>
              {data.chapters?.map((chapter, index) => (
                <Box
                  key={chapter.title}
                  padding={3}
                  border="standard"
                  borderRadius="large"
                >
                  <FocusableBox
                    display="block"
                    key={`${chapter.title}-${index}`}
                    component={LinkV2}
                    href={paths.handbokKafli}
                  >
                    <Stack space={1}>
                      <Text variant="h4" as="h4" color="blue400">
                        {chapter.title}
                      </Text>
                      <Text>{chapter.text}</Text>
                    </Stack>
                  </FocusableBox>
                </Box>
              ))}
            </Box>
          </section>
        )}
        {data.links && (
          <section>
            <Box marginBottom={1}>
              <Text color="blue600" variant="eyebrow">
                Tenglar
              </Text>
            </Box>

            <Stack space={1}>
              {data.links.map((link, index) => (
                <FocusableBox
                  key={`${link.label}-${index}`}
                  component={LinkV2}
                  href={paths.handbaekur}
                  paddingY={2}
                  paddingX={3}
                  background="blue100"
                  borderRadius="large"
                >
                  <Text fontWeight="semiBold" variant="medium" color="blue400">
                    {link.label}
                  </Text>
                </FocusableBox>
              ))}
            </Stack>
          </section>
        )}
      </Stack>
    </Layout>
  )
}

Handbook.getProps = async ({ locale }) => {
  const lang: Locale = locale === 'en' ? 'en' : 'is'

  return {
    locale: lang,
  }
}

export default withMainLayout(Handbook, { showFooter: false })
