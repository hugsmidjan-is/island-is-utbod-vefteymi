import React from 'react'

import { SliceType } from '@island.is/island-ui/contentful'
import {
  Box,
  GridColumn,
  GridContainer,
  GridRow,
  Icon,
  Inline,
  Link,
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
      <Box
        className={styles.footerBg}
        color="white"
        paddingTop={5}
        paddingBottom={8}
      >
        <Box
          paddingTop={[2, 2, 0]}
          paddingBottom={[0, 0, 4]}
          marginLeft={[3, 3, 10]}
          marginTop={[4, 4, 8]}
        >
          <GridContainer>
            <GridRow rowGap={0}>
              <GridColumn span={['12/12', '12/12', '2/12']}>
                <Box
                  marginRight={[0, 0, 4]}
                  marginBottom={[5, 5, 0]}
                  width="full"
                  className={styles.logoStyle}
                  display={['flex', 'flex', 'block']}
                  alignItems={['center', 'center', 'center']}
                  justifyContent={['center', 'center', 'flexStart']}
                >
                  <img
                    alt="althingi-footer-logo"
                    src="/assets/althingi-gold-logo.png"
                  />
                </Box>
              </GridColumn>
              <GridColumn
                paddingTop={3}
                paddingBottom={[3, 3, 0]}
                span={['12/12', '12/12', '2/12']}
              >
                <Box marginX={3}>
                  <Text fontWeight="semiBold">Heimilisfang</Text>
                  <Text>101 Reykjavík</Text>
                </Box>
              </GridColumn>
              <GridColumn
                paddingTop={3}
                span={['12/12', '12/12', '2/12']}
                paddingBottom={[3, 3, 0]}
              >
                <Box marginX={3}>
                  <Text fontWeight="semiBold">Opnunartími</Text>
                  <Text>
                    Skiptiborðið er opið virka daga frá 9:00 til 16:00
                  </Text>
                </Box>
              </GridColumn>
              <GridColumn
                paddingTop={3}
                span={['12/12', '12/12', '2/12']}
                paddingBottom={[3, 3, 0]}
              >
                <Box marginX={3}>
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
              <GridColumn
                paddingTop={3}
                span={['12/12', '12/12', '2/12']}
                paddingBottom={[3, 3, 0]}
              >
                <Box marginX={3}>
                  <Inline space={1} alignY="center">
                    <Icon size="small" icon="facebook" color="white" />
                    <Text variant="h5" color="blue600" fontWeight="light">
                      <Link href="https://www.facebook.com/islandid">
                        Facebook
                      </Link>
                    </Text>
                  </Inline>
                  <Inline space={1} alignY="center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="17"
                      viewBox="0 0 16 17"
                      fill="none"
                    >
                      <path
                        d="M8.00312 4.90586C6.01562 4.90586 4.41249 6.50898 4.41249 8.49648C4.41249 10.484 6.01562 12.0871 8.00312 12.0871C9.99062 12.0871 11.5937 10.484 11.5937 8.49648C11.5937 6.50898 9.99062 4.90586 8.00312 4.90586ZM8.00312 10.8309C6.71874 10.8309 5.66874 9.78398 5.66874 8.49648C5.66874 7.20898 6.71562 6.16211 8.00312 6.16211C9.29062 6.16211 10.3375 7.20898 10.3375 8.49648C10.3375 9.78398 9.28749 10.8309 8.00312 10.8309ZM12.5781 4.75898C12.5781 5.22461 12.2031 5.59648 11.7406 5.59648C11.275 5.59648 10.9031 5.22148 10.9031 4.75898C10.9031 4.29648 11.2781 3.92148 11.7406 3.92148C12.2031 3.92148 12.5781 4.29648 12.5781 4.75898ZM14.9562 5.60898C14.9031 4.48711 14.6469 3.49336 13.825 2.67461C13.0062 1.85586 12.0125 1.59961 10.8906 1.54336C9.73437 1.47773 6.26874 1.47773 5.11249 1.54336C3.99374 1.59648 2.99999 1.85273 2.17812 2.67148C1.35624 3.49023 1.10312 4.48398 1.04687 5.60586C0.981244 6.76211 0.981244 10.2277 1.04687 11.384C1.09999 12.5059 1.35624 13.4996 2.17812 14.3184C2.99999 15.1371 3.99062 15.3934 5.11249 15.4496C6.26874 15.5152 9.73437 15.5152 10.8906 15.4496C12.0125 15.3965 13.0062 15.1402 13.825 14.3184C14.6437 13.4996 14.9 12.5059 14.9562 11.384C15.0219 10.2277 15.0219 6.76523 14.9562 5.60898ZM13.4625 12.6246C13.2187 13.2371 12.7469 13.709 12.1312 13.9559C11.2094 14.3215 9.02187 14.2371 8.00312 14.2371C6.98437 14.2371 4.79374 14.3184 3.87499 13.9559C3.26249 13.7121 2.79062 13.2402 2.54374 12.6246C2.17812 11.7027 2.26249 9.51523 2.26249 8.49648C2.26249 7.47773 2.18124 5.28711 2.54374 4.36836C2.78749 3.75586 3.25937 3.28398 3.87499 3.03711C4.79687 2.67148 6.98437 2.75586 8.00312 2.75586C9.02187 2.75586 11.2125 2.67461 12.1312 3.03711C12.7437 3.28086 13.2156 3.75273 13.4625 4.36836C13.8281 5.29023 13.7437 7.47773 13.7437 8.49648C13.7437 9.51523 13.8281 11.7059 13.4625 12.6246Z"
                        fill="white"
                      />
                    </svg>
                    <Text variant="h5" color="blue600" fontWeight="light">
                      <Link href="https://www.facebook.com/islandid">
                        {' Instagram'}
                      </Link>
                    </Text>
                  </Inline>
                  <Inline space={1} alignY="center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="17"
                      viewBox="0 0 16 17"
                      fill="none"
                    >
                      <g clip-path="url(#clip0_144_21906)">
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M0.37201 0.874399C0.496976 0.644272 0.737849 0.500977 0.999718 0.500977H4.63631C4.85682 0.500977 5.06498 0.602826 5.20029 0.776937C6.49524 2.44312 7.76394 4.12625 9.00723 5.82797L13.1741 0.947426C13.4814 0.587402 14.0224 0.544718 14.3824 0.852089C14.7425 1.15946 14.7851 1.70049 14.4778 2.06052L10.0417 7.25644C11.9543 9.92068 13.8059 12.6311 15.5997 15.3939C15.7423 15.6136 15.7533 15.8937 15.6283 16.1237C15.5033 16.3539 15.2625 16.4972 15.0006 16.4972H11.364C11.1435 16.4972 10.9353 16.3953 10.8 16.2212C9.45822 14.4947 8.14459 12.7501 6.85822 10.9854L2.53364 16.0507C2.22627 16.4108 1.68524 16.4535 1.32522 16.1461C0.965191 15.8387 0.922507 15.2977 1.22988 14.9377L5.82499 9.55543C3.95974 6.95115 2.15259 4.3027 0.400623 1.60422C0.258024 1.38459 0.247045 1.10453 0.37201 0.874399ZM2.32003 1.92955C5.28859 6.43953 8.41514 10.8098 11.7138 15.0687H13.6803C10.7117 10.5586 7.58517 6.18834 4.28644 1.92955H2.32003Z"
                          fill="white"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_144_21906">
                          <rect
                            width="16"
                            height="16"
                            fill="white"
                            transform="translate(0 0.5)"
                          />
                        </clipPath>
                      </defs>
                    </svg>
                    <Text variant="h5" color="blue600" fontWeight="light">
                      <Link href="https://www.facebook.com/islandid">X</Link>
                    </Text>
                  </Inline>
                </Box>
              </GridColumn>
            </GridRow>
          </GridContainer>
        </Box>
      </Box>
    </footer>
  )
}

export default AlthingiFooter
