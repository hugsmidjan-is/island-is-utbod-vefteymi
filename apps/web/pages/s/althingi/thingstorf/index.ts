import withApollo from '@island.is/web/graphql/withApollo'
import { withLocale } from '@island.is/web/i18n'
import Thingfundir from '@island.is/web/screens/Althingi/Thingfundir/Thingfundir'
import { getServerSidePropsWrapper } from '@island.is/web/utils/getServerSidePropsWrapper'
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore make web strict
const Screen = Thingfundir

export default Screen

export const getServerSideProps = getServerSidePropsWrapper(Screen)
