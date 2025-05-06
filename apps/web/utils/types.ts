import { TagVariant } from '@island.is/island-ui/core'

export interface SearchItem {
  id: string
  title: string
  link: string
  eyebrow?: string
  description?: string
  tags?: Array<{ label: string; color: TagVariant; outlined: boolean }>
  date?: string
  info?: string
}
