import ThingmennLandingPage from '@island.is/web/screens/Althingi/Thingmenn/ThingmennLandingPage'
import { getServerSidePropsWrapper } from '@island.is/web/utils/getServerSidePropsWrapper'
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore make web strict
const Screen = ThingmennLandingPage

export default Screen

export const getServerSideProps = getServerSidePropsWrapper(Screen)
