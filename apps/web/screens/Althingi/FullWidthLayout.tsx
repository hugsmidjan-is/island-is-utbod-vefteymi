import React from 'react'
import { useWindowSize } from 'react-use'
import { useRouter } from 'next/router'

import {
  Box,
  BreadCrumbItem,
  Breadcrumbs,
  GridColumn,
  GridContainer,
  GridRow,
  Stack,
  Tag,
  Text,
} from '@island.is/island-ui/core'
import { theme } from '@island.is/island-ui/theme'
import {
  DefaultHeader,
  HeadWithSocialSharing,
  OrganizationFooter,
} from '@island.is/web/components'
import { SLICE_SPACING } from '@island.is/web/constants'

import { OrganizationMock, paths } from '../../utils/mockData'

interface LayoutProps {
  title: string
  description: string
  image?: string
  children: React.ReactNode
  tags?: Array<{ label: string; href: string }>
  breadcrumbs?: BreadCrumbItem[]
}

const FullWidthLayout: React.FC<LayoutProps> = ({
  title,
  description,
  children,
  image,
  tags,
  breadcrumbs = [],
}) => {
  const router = useRouter()
  const { width } = useWindowSize()

  const isMobile = width < theme.breakpoints.md

  return (
    <>
      <HeadWithSocialSharing
        title={title}
        description={'Alþingi - vefsíða'}
        imageUrl={'https://www.althingi.is/skin/basic9k/i/sitelogo-new.svg'}
        imageContentType={'svg'}
        imageWidth={'300'}
        imageHeight={'300'}
      />
      <Box>
        <DefaultHeader
          title={'Alþingi'}
          titleColor="white"
          image={image}
          logoAltText="Alþingi logo"
          background="linear-gradient(180deg, #3D6BA2 0%, #315584 100%)"
          imagePadding="20px"
          logoHref="/s/althingi"
          isSubpage={isMobile ? true : router.pathname !== paths.home}
          logo="https://www.althingi.is/skin/basic9k/i/sitelogo-new.svg"
        />
      </Box>
      <Box marginTop={8} marginBottom={SLICE_SPACING}>
        <GridContainer>
          <GridRow>
            <GridColumn span="6/12" offset={['0', '0', '1/12']}>
              <Stack space={2}>
                <Box display="flex" justifyContent="spaceBetween">
                  <Breadcrumbs
                    items={[
                      {
                        title: 'Ísland.is',
                        href: '/',
                      },
                      {
                        title: 'Alþingi',
                        href: paths.home,
                        isCurrentPage: true,
                      },
                      ...breadcrumbs,
                    ]}
                  />
                </Box>

                <Text variant="h1" as="h2">
                  {title}
                </Text>
                <Text variant="h3" as="p" fontWeight="light">
                  Alþingi Íslands fer með löggjafarvald og gegnir lykilhlutverki
                  í íslenskri stjórnsýslu.
                </Text>
                <Text marginTop={4} color="purple400" variant="eyebrow">
                  Flýtileiðir
                </Text>
                <Box
                  display="flex"
                  flexWrap={'wrap'}
                  rowGap={1}
                  columnGap={1}
                  marginTop={1}
                >
                  {tags?.map((tag, index) => (
                    <Tag
                      key={`${tag.label}-${index}`}
                      variant="blue"
                      outlined={false}
                      href={tag.href}
                    >
                      {tag.label}
                    </Tag>
                  ))}
                </Box>
              </Stack>
            </GridColumn>
            <GridColumn span="5/12">
              <Box
                display="flex"
                height="full"
                justifyContent="flexEnd"
                alignItems="center"
                flexDirection="column"
              >
                <img
                  src={'/assets/frontpage-1.png'}
                  alt={
                    'Stytta af Ingibjörgu H. Bjarnason, eftir Ragnhildi Stefánsdóttur myndhöggvara, fyrir utan Alþingishúsið.'
                  }
                />
                <Text fontWeight="light" variant="medium" marginTop={1}>
                  Stytta af Ingibjörgu H. Bjarnason, eftir Ragnhildi
                  Stefánsdóttur myndhöggvara, fyrir utan Alþingishúsið.
                </Text>
              </Box>
            </GridColumn>
          </GridRow>
        </GridContainer>
      </Box>

      <Box className="rs_read" width="full">
        {children}
      </Box>

      <Box className="rs_read" marginTop="auto">
        <OrganizationFooter
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore make web strict
          organizations={[OrganizationMock]}
          force={true}
        />
      </Box>
    </>
  )
}

export default FullWidthLayout
