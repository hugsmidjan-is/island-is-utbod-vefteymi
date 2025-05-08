import { useState } from 'react'

import {
  Box,
  Button,
  CategoryCard,
  Divider,
  FilterInput,
  FocusableBox,
  LinkV2,
  Stack,
  Text,
} from '@island.is/island-ui/core'
import { type Locale } from '@island.is/shared/types'
import { SLICE_SPACING } from '@island.is/web/constants'
import { withMainLayout } from '@island.is/web/layouts/main'
import { Screen } from '@island.is/web/types'
import { mockHandbooks, paths } from '@island.is/web/utils/mockData'

import GoBack from '../components/GoBack/GoBack'
import DetailPanel from '../components/Panels/DetailPanel'
import Layout from '../Layout'
import * as styles from './Handbook.css'

interface HandbookProps {
  locale: Locale
}

const Handbook: Screen<HandbookProps> = ({ locale }) => {
  const [searchInput, setSearchInput] = useState<string>()

  const data = mockHandbooks[0]

  return (
    <Layout
      title={data.title}
      breadcrumbs={[
        { title: 'Um Alþingi', href: paths.umAlthingi },
        { title: 'Útgefið efni', href: paths.utgefidEfni },
      ]}
      sidebar={
        <Stack space={2}>
          <GoBack />
          <DetailPanel
            backgroundColor={'blue100'}
            items={[
              {
                label: 'Útgefið',
                value: 'Desember 2024',
              },
              {
                label: 'Útgáfa',
                value: '3. útgáfa',
              },
              {
                label: 'Útgefið af',
                value: 'Alþingi',
              },
            ]}
            title="Handbók"
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
            <Text variant="h1">{'Háttvirtur þingmaður 2024'}</Text>
            <Text as="p" paddingTop={3} marginBottom={3}>
              {data.description}
            </Text>
            <Box width="half">
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
        {data.textSlices.map((slice, index) => (
          <section key={`${slice.label}-${index}`}>
            <Stack space={2}>
              <Box marginBottom={1}>
                <Text variant="h3" as="h3">
                  {slice.label}
                </Text>
              </Box>
              {slice.lines.map((line, index) => (
                <Text key={`${line}-${index}`}>{line}</Text>
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
                <CategoryCard
                  key={`${chapter.title}-${index}`}
                  heading={chapter.title}
                  text={chapter.text}
                  href={paths.handbokKafli}
                />
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
