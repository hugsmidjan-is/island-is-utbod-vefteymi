import {
  Box,
  Divider,
  FormStepper,
  FormStepperThemes,
  FormStepperV2,
  Section,
  Stack,
  Text,
} from '@island.is/island-ui/core'
import React from 'react'

interface TimelinePanelProps {
  backgroundColor: 'blue100' | 'purple100'
  title?: string
  items: {
    label: string
    complete: boolean
    active?: boolean
  }[]
}

const TimelinePanel: React.FC<TimelinePanelProps> = ({
  title,
  items,
  backgroundColor = 'blue100',
}) => {
  return (
    <Box
      background={backgroundColor}
      padding={3}
      borderRadius="large"
      marginBottom={3}
    >
      <Stack space={2}>
        {title && (
          <>
            <Box>
              <Text
                variant="h4"
                color={
                  backgroundColor === 'blue100' ? 'blue600' : 'blueberry600'
                }
              >
                {title}
              </Text>
            </Box>
            <Divider />
          </>
        )}
        <FormStepperV2
          sections={items.map((item, index) => (
            <Section
              key={`stepper-panel-item-${index}-${item.label}`}
              isComplete={item.complete}
              isActive={item.active}
              isLast={index === items.length - 1}
              section={item.label}
              theme={FormStepperThemes.PURPLE}
              sectionIndex={index}
            />
          ))}
        />
      </Stack>
    </Box>
  )
}

export default TimelinePanel
