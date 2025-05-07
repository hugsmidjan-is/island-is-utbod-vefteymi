import React from 'react'

import {
  Box,
  Button,
  Divider,
  Icon,
  IconProps,
  Inline,
  LinkV2,
  Stack,
  Table as T,
  Tag,
  TagVariant,
  Text,
} from '@island.is/island-ui/core'
import { paths, TableItem } from '@island.is/web/utils/mockData'

export interface ThingmalTableProps {
  data: TableItem[]
  title: string
  tag?: { label: string; color: TagVariant }
  footnote: React.ReactNode
}
const ThingmalTable: React.FC<ThingmalTableProps> = ({
  data,
  title,
  tag,
  footnote,
}) => {
  return (
    <Box
      border="standard"
      borderRadius="large"
      borderColor="blue200"
      padding={3}
    >
      <Box>
        <Box display={'flex'} justifyContent={'spaceBetween'}>
          <Text variant="h3" as="h3">
            {title}
          </Text>
          {tag && (
            <Tag disabled variant={tag.color}>
              {tag.label}
            </Tag>
          )}
        </Box>
        <Box paddingY={3}>
          <Divider />
        </Box>
        <Stack space={3}>
          {data.map((table, index) => (
            <>
              <Text variant="h4" as="h4">
                {table.title}
              </Text>
              <T.Table key={`${table}-${index}`}>
                <T.Head>
                  <T.Row>
                    {table.headers?.map((header, index) => (
                      <T.HeadData key={`${header}-${index}`} align="left">
                        <Text variant="medium" fontWeight="semiBold">
                          {header}
                        </Text>
                      </T.HeadData>
                    ))}
                  </T.Row>
                </T.Head>
                <T.Body>
                  {table.columns?.map((column, index) => (
                    <T.Row key={`${column}-${index}`}>
                      {column.map((item, index) => (
                        <T.Data key={`${item}-${index}`}>
                          {item.isLink ? (
                            <LinkV2 color="blue400" href={paths.thingmalSkjal}>
                              <Box alignItems={'center'} display="flex">
                                {item.value}
                                {item.icon && (
                                  <Icon size="small" icon={item.icon} />
                                )}
                              </Box>
                            </LinkV2>
                          ) : (
                            <Text variant="small">{item.value}</Text>
                          )}
                        </T.Data>
                      ))}
                    </T.Row>
                  ))}
                </T.Body>
              </T.Table>
            </>
          ))}
          {footnote}
        </Stack>
      </Box>
    </Box>
  )
}

export default ThingmalTable

//   <LinkV2 newTab key={b.id} href={b.streamUrl}>
//     <Button
//       variant="text"
//       size="small"
//       unfocusable
//       as="span"
//       icon="arrowForward"
//     >
//       Horfa
//     </Button>
//   </LinkV2>
