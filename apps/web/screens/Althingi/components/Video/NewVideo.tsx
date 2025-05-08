import {
  Box,
  Button,
  Divider,
  GridColumn,
  GridContainer,
  GridRow,
  Icon,
  IconMapIcon,
  Inline,
  LinkV2,
  Stack,
  Tag,
  TagProps,
  Text,
} from '@island.is/island-ui/core'

import * as styles from './Video.css'

interface TranscriptLink {
  href: string
  label: string
  icon?: IconMapIcon
}

interface Transcript {
  title: string
  subtitle?: string
  chapters: Array<{
    timestamp?: string
    label: string
    link?: string
  }>
}

interface Props {
  url: string
  title?: string
  icon?: IconMapIcon
  tags?: Array<TagProps>
  transcript?: Transcript
  link?: {
    label: string
    url: string
  }
}

export const NewVideo = ({
  url,
  title,
  tags,
  icon,
  transcript,
  link,
}: Props) => {
  if (transcript) {
    return (
      <section>
        <Box marginBottom={2} display="flex" justifyContent="spaceBetween">
          <Box display="flex">
            <Box marginRight={2}>
              <Icon color="blue400" icon={icon ?? 'hammer'} type="outline" />
            </Box>
            <Text variant="h4" as="h4">
              {title}
            </Text>
          </Box>

          {link && (
            <LinkV2 href={link.url}>
              <Button
                icon="arrowForward"
                iconType="filled"
                size="small"
                type="button"
                variant="text"
                truncate
              >
                {link.label}
              </Button>
            </LinkV2>
          )}
        </Box>

        <Box
          paddingY={3}
          display="flex"
          border="standard"
          borderColor="blue200"
          borderRadius="large"
        >
          <GridContainer>
            <GridRow>
              <GridColumn span={'5/12'}>
                <Box>
                  <Text variant="h5" as="h5">
                    {transcript.title}
                  </Text>
                  <Text variant="small" marginBottom={2}>
                    {transcript.subtitle}
                  </Text>
                  {transcript.chapters?.length > 0 && (
                    <Box marginTop={2}>
                      <Stack space={1}>
                        {transcript.chapters.map((chapter) => (
                          <Box>
                            <Divider />
                            <Box marginTop={1} paddingTop={2} display="flex">
                              <Box
                                background={
                                  chapter.link ? 'blue100' : 'dark100'
                                }
                                marginX={2}
                                className={styles.newVideoTimestamp}
                              >
                                <Text
                                  color={chapter.link ? 'blue400' : 'black'}
                                  fontWeight="semiBold"
                                  variant="small"
                                >
                                  {chapter.timestamp ?? 'Næst'}
                                </Text>
                              </Box>
                              <Box
                                display="flex"
                                alignItems="center"
                                justifyContent="spaceBetween"
                                width="full"
                                marginRight={1}
                              >
                                <Text
                                  color={chapter.link ? 'blue400' : 'black'}
                                  variant="medium"
                                  fontWeight="semiBold"
                                >
                                  {chapter.label}
                                </Text>
                                {chapter.link && (
                                  <LinkV2
                                    newTab
                                    className={styles.link}
                                    href={chapter.link}
                                  >
                                    <Button
                                      variant="text"
                                      size="small"
                                      unfocusable
                                      as="span"
                                      icon={'arrowForward'}
                                    />
                                  </LinkV2>
                                )}
                              </Box>
                            </Box>
                          </Box>
                        ))}
                      </Stack>
                    </Box>
                  )}
                </Box>
              </GridColumn>
              <GridColumn span={'7/12'}>
                <iframe
                  className={styles.newVideo}
                  width="560"
                  height="315"
                  src={url}
                  title="althingi video player"
                  allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                ></iframe>
              </GridColumn>
            </GridRow>
          </GridContainer>
        </Box>

        {tags && (
          <Box
            display="flex"
            flexWrap={'wrap'}
            rowGap={1}
            columnGap={1}
            marginTop={3}
          >
            {tags?.map((t) => (
              <Tag {...t} />
            ))}
          </Box>
        )}
      </section>
    )
  }
}
