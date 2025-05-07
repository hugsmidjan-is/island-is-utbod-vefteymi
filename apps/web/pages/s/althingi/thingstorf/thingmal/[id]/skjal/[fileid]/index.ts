import Frumvarp from '@island.is/web/screens/Althingi/Skjal/Frumvarp'
import { getServerSidePropsWrapper } from '@island.is/web/utils/getServerSidePropsWrapper'

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore make web strict
const Screen = Frumvarp

export const getServerSideProps = getServerSidePropsWrapper(Screen)
