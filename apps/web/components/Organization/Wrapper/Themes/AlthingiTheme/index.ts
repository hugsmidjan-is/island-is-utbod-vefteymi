import dynamic from 'next/dynamic'

export const AlthingiFooter = dynamic(() => import('./AlthingiFooter'), {
  ssr: true,
})
