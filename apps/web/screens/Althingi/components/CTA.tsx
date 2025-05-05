import React, { FC } from 'react'
import slugify from '@sindresorhus/slugify'

import { Box, GridColumn, GridRow, Text } from '@island.is/island-ui/core'

import * as styles from './CTA.css'

export interface CTAProps {
  title: string
  image?: {
    url: string
  }
  content?: string
  variant?: 'default' | 'even'
  contain?: boolean
  reverse?: boolean
}

export const CTA: FC<React.PropsWithChildren<CTAProps>> = ({
  title,
  image,
  content = [],
  variant = 'default',
  contain = false,
  reverse = false,
}) => {
  if (!image && content.length > 0) {
    return (
      <>
        {title && (
          <Text
            id={title}
            variant="h2"
            as="h2"
            paddingTop={2}
            paddingBottom={2}
          >
            {title}
          </Text>
        )}
        <Text>{content}</Text>
      </>
    )
  }

  return (
    <Box
      className={styles.sectionOffset}
      marginBottom={[3, 3, 5]}
      marginTop={[3, 3, 5]}
    >
      <GridRow direction={reverse ? 'rowReverse' : 'row'}>
        {!!image && (
          <GridColumn
            span={[
              '12/12',
              '12/12',
              '12/12',
              variant === 'even' ? '6/12' : '3/9',
            ]}
          >
            <Box className={styles.imageContainer}>
              <img className={styles.image} src={image.url + '?w=600'} alt="" />
            </Box>
          </GridColumn>
        )}
        <GridColumn
          span={[
            '12/12',
            '12/12',
            '12/12',
            variant === 'even' ? '6/12' : '6/9',
          ]}
        >
          {title && (
            <Text id={slugify(title)} variant="h2" as="h2" paddingBottom={2}>
              {title}
            </Text>
          )}
          {content.length > 0 && <Text>{content}</Text>}
        </GridColumn>
      </GridRow>
    </Box>
  )
}
