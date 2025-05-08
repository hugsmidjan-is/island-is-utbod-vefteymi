import AboutEN from '@island.is/web/screens/Althingi/About/AboutEN'
import { getServerSidePropsWrapper } from '@island.is/web/utils/getServerSidePropsWrapper'

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore make web strict
const Screen = AboutEN

export default Screen

export const getServerSideProps = getServerSidePropsWrapper(Screen)
