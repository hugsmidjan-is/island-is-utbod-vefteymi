import React from 'react'

import {
  Box,
  Divider,
  Icon,
  Inline,
  LinkV2,
  Stack,
  Text,
} from '@island.is/island-ui/core'

const ProfileCard: React.FC = () => {
  return (
    <Box background="blue100" padding={3}>
      <Box>
        <Stack space={2}>
          <img src="/assets/logi.png" alt="Logi Einarsson" />
          <Box>
            <Text variant="medium" fontWeight="semiBold">
              Ráðuneyti
            </Text>
            <Text variant="medium" color="blue400">
              <LinkV2
                href="https://www.althingi.is/altext/cv/is/?nfaerslunr=200304"
                underline="normal"
              >
                Menningar-, nýsköpunar- og háskólaráðuneytið
              </LinkV2>
            </Text>
          </Box>
          <Box>
            <Text variant="medium" fontWeight="semiBold">
              Kjördæmi
            </Text>
            <Text variant="medium">Norðausturkjördæmis</Text>
          </Box>
          <Box>
            <Text variant="medium" fontWeight="semiBold">
              Þingflokkur
            </Text>
            <Text variant="medium" color="blue400">
              <LinkV2
                href="https://www.althingi.is/altext/cv/is/?nfaerslunr=200304"
                underline="normal"
              >
                Samfylkingin
              </LinkV2>
            </Text>
          </Box>
          <Divider />
          <Box>
            <Text variant="medium" fontWeight="semiBold">
              Netfang
            </Text>
            <Text variant="medium" color="blue400">
              <LinkV2
                href="https://www.althingi.is/altext/cv/is/?nfaerslunr=200304"
                underline="normal"
              >
                logi.einarsson@althingi.is
              </LinkV2>
            </Text>
          </Box>
          <Box>
            <Text variant="medium" fontWeight="semiBold">
              Símanúmer
            </Text>
            <Text variant="medium">5885522</Text>
          </Box>
          <Box>
            <Stack space={1}>
              <Text variant="medium" fontWeight="semiBold">
                Samfélagsmiðlar
              </Text>
              <Box display="flex" flexDirection={'row'} alignItems="center">
                <Icon
                  icon={'facebook'}
                  size="medium"
                  type="outline"
                  color="blue400"
                />
                <Box marginLeft={1}>
                  <Text variant="medium">{'/logi.einarsson'}</Text>
                </Box>
              </Box>
              <Inline>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                >
                  <g clip-path="url(#clip0_178_72373)">
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M0.37201 0.374399C0.496976 0.144272 0.737849 0.000976562 0.999718 0.000976562H4.63631C4.85682 0.000976562 5.06498 0.102826 5.20029 0.276937C6.49524 1.94312 7.76394 3.62625 9.00723 5.32797L13.1741 0.447426C13.4814 0.0874018 14.0224 0.044718 14.3824 0.352089C14.7425 0.659462 14.7851 1.20049 14.4778 1.56052L10.0417 6.75644C11.9543 9.42068 13.8059 12.1311 15.5997 14.8939C15.7423 15.1136 15.7533 15.3937 15.6283 15.6237C15.5033 15.8539 15.2625 15.9972 15.0006 15.9972H11.364C11.1435 15.9972 10.9353 15.8953 10.8 15.7212C9.45822 13.9947 8.14459 12.2501 6.85822 10.4854L2.53364 15.5507C2.22627 15.9108 1.68524 15.9535 1.32522 15.6461C0.965191 15.3387 0.922507 14.7977 1.22988 14.4377L5.82499 9.05543C3.95974 6.45115 2.15259 3.8027 0.400623 1.10422C0.258024 0.884585 0.247045 0.604526 0.37201 0.374399ZM2.32003 1.42955C5.28859 5.93953 8.41514 10.3098 11.7138 14.5687H13.6803C10.7117 10.0586 7.58517 5.68834 4.28644 1.42955H2.32003Z"
                      fill="#0061FF"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_178_72373">
                      <rect width="16" height="16" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
                <Box marginLeft={2}>
                  <Text variant="medium">{'@logi.einarsson'}</Text>
                </Box>
              </Inline>
            </Stack>
          </Box>
        </Stack>
      </Box>
    </Box>
  )
}

export default ProfileCard
