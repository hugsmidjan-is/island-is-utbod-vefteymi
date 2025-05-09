import { useContext } from 'react'

import { I18nContext } from './I18n'

export function useI18n() {
  const i18n = useContext(I18nContext)
  if (!i18n) {
    return null
  }
  return i18n
}

export default useI18n
