import About from '@island.is/web/screens/Althingi/About/About'
import { getServerSidePropsWrapper } from '@island.is/web/utils/getServerSidePropsWrapper'

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore make web strict
const Screen = About

export default Screen

export const getServerSideProps = getServerSidePropsWrapper(Screen)
