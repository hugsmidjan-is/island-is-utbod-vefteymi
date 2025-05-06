import React, { ReactNode } from 'react'
import { BLOCKS } from '@contentful/rich-text-types'

import { SliceType } from '@island.is/island-ui/contentful'
import {
  Box,
  GridColumn,
  GridContainer,
  GridRow,
  Text,
} from '@island.is/island-ui/core'
import { FooterItem } from '@island.is/web/graphql/schema'
import { webRichText } from '@island.is/web/utils/richText'

import * as styles from './AlthingiFooter.css'

interface FooterProps {
  footerItems: Array<FooterItem>
  organizationSlug: string
}

const AlthingiFooter: React.FC<React.PropsWithChildren<FooterProps>> = ({
  footerItems,
}) => {
  const isServiceWeb = true

  return (
    <footer>
      <Box className={styles.footerBg} color="white" paddingTop={5}>
        <GridContainer>
          <Box paddingTop={[2, 2, 0]} paddingBottom={[0, 0, 4]}>
            <Box
              display="flex"
              flexDirection="row"
              alignItems="center"
              paddingBottom={4}
              marginBottom={4}
            >
              <Box marginRight={4}>LOGO</Box>
            </Box>
            <GridRow>
              {isServiceWeb && (
                <GridColumn
                  paddingBottom={[3, 3, 0]}
                  span={['7/12']}
                  offset={'1/12'}
                >
                  <GridRow>
                    <GridColumn span={['2/7']}>
                      <Box>
                        <Text fontWeight="semiBold">Heimilisfang</Text>

                        <Text>101 Reykjavík</Text>
                      </Box>
                    </GridColumn>
                    <GridColumn span={['2/7']}>
                      <Box>
                        <Text fontWeight="semiBold">Opnunartími</Text>
                        <Text>
                          Skiptiborðið er opið virka daga frá 9:00 til 16:00
                        </Text>
                      </Box>
                    </GridColumn>
                    <GridColumn span={['3/7']}>
                      <Box>
                        <Text fontWeight="semiBold">Hafðu samband</Text>
                        <Text>Sími: 563 0500</Text>
                        <Text>
                          Netfang:{' '}
                          <a href="mailto:althingi@althingi.is">
                            althingi@althingi.is
                          </a>
                        </Text>
                      </Box>
                    </GridColumn>
                  </GridRow>
                </GridColumn>
              )}
              {!isServiceWeb &&
                footerItems.slice(0, 4).map((item, index) => (
                  <GridColumn
                    span={['12/12', '12/12', '6/12', '3/12']}
                    key={`footer-main-row-column-${index}`}
                  >
                    <Box>
                      <Box marginBottom={2}>
                        {webRichText(item.content as SliceType[])}
                      </Box>
                    </Box>
                  </GridColumn>
                ))}
            </GridRow>
          </Box>
          <Box
            display="flex"
            flexDirection="row"
            alignItems="center"
            paddingTop={4}
            paddingBottom={4}
          >
            <GridContainer>
              <GridRow>
                <GridColumn
                  span={['12/12', '12/12', '6/12', '3/12']}
                  className={styles.footerSecondRow}
                >
                  SECOND LOGO
                </GridColumn>
                <GridColumn
                  span={['12/12', '12/12', '6/12', '3/12']}
                  className={styles.footerSecondRow}
                >
                  <Box>
                    {webRichText(
                      (footerItems?.[4]?.[
                        isServiceWeb ? 'serviceWebContent' : 'content'
                      ] ?? []) as SliceType[],
                      {
                        renderNode: {
                          [BLOCKS.PARAGRAPH]: (
                            _node: never,
                            children: ReactNode,
                          ) => (
                            <Text variant="small" color="dark400" marginY={1}>
                              {children}
                            </Text>
                          ),
                        },
                      },
                    )}
                  </Box>
                </GridColumn>
                {footerItems.slice(5, 7).map((item, index) => (
                  <GridColumn
                    span={['12/12', '12/12', '6/12', '3/12']}
                    className={styles.footerSecondRow}
                    key={`footer-secondary-row-column-${index}`}
                  >
                    <Box>
                      {webRichText(
                        item[
                          isServiceWeb ? 'serviceWebContent' : 'content'
                        ] as SliceType[],
                        {
                          renderNode: {
                            [BLOCKS.PARAGRAPH]: (
                              _node: never,
                              children: ReactNode,
                            ) => (
                              <Text variant="small" color="dark400" marginY={1}>
                                {children}
                              </Text>
                            ),
                          },
                        },
                      )}
                    </Box>
                  </GridColumn>
                ))}
              </GridRow>
            </GridContainer>
          </Box>
        </GridContainer>
      </Box>
    </footer>
  )
}

export default AlthingiFooter
