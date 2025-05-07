import {
  Box,
  Button,
  Divider,
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

interface TranscriptItem {
  id: string
  title: string
  contentLines?: Array<string>
  links?: Array<TranscriptLink>
}
interface Transcript {
  icon?: IconMapIcon
  title: string
  contentLabel?: string
  items: Array<TranscriptItem>
}

interface Props {
  url: string
  title?: string
  tags?: Array<TagProps>
  transcript?: Transcript
}

export const Video = ({ url, title, tags, transcript }: Props) => {
  return (
    <section>
      {title && (
        <Box display="flex" justifyContent="spaceBetween" marginBottom={2}>
          <Text variant="h3">{title}</Text>
          <Box display="flex" flexDirection="row">
            <Button
              variant="text"
              icon="arrowForward"
              iconType="outline"
              size="small"
            >
              Sjá upptökur
            </Button>
          </Box>
        </Box>
      )}
      <Box
        padding={3}
        border="standard"
        borderColor="blue200"
        borderRadius="standard"
      >
        <iframe
          className={styles.video}
          width="560"
          height="315"
          src={url}
          title="althingi video player"
          allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
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
        {transcript && (
          <>
            <Box marginY={3}>
              <Box display="flex" justifyContent="spaceBetween">
                <Box display="flex">
                  <Box marginRight={2}>
                    <Icon
                      color="blue400"
                      icon={transcript.icon ?? 'hammer'}
                      type="outline"
                    />
                  </Box>
                  <Text variant="h4" as="h4">
                    {transcript.title}
                  </Text>
                </Box>
                <Text variant="h4" as="h4">
                  {transcript.contentLabel}
                </Text>
              </Box>
            </Box>

            {transcript.items.length > 0 && (
              <Stack space={1}>
                {transcript.items.map((transcript) => (
                  <>
                    <Divider />
                    <Box display="flex">
                      <Box marginX={2} className={styles.timestamp}>
                        <Text fontWeight="semiBold" variant="small">
                          {transcript.id}
                        </Text>
                      </Box>
                      <Box>
                        <Text variant="medium" fontWeight="semiBold">
                          {transcript.title}
                        </Text>
                        {transcript.contentLines?.map((cl) => (
                          <Text variant="small"> {cl}</Text>
                        ))}
                        {transcript.links && (
                          <Box marginY={1}>
                            <Inline space={1}>
                              {transcript.links.map((l, index) => (
                                <LinkV2
                                  newTab
                                  key={`transcript-link-${index}`}
                                  className={styles.link}
                                  href={l.href}
                                >
                                  <Button
                                    variant="text"
                                    size="small"
                                    unfocusable
                                    as="span"
                                    icon={l.icon ?? 'arrowForward'}
                                  >
                                    {l.label}
                                  </Button>
                                </LinkV2>
                              ))}
                            </Inline>
                          </Box>
                        )}
                      </Box>
                    </Box>
                  </>
                ))}
              </Stack>
            )}
          </>
        )}
      </Box>
    </section>
  )
}
