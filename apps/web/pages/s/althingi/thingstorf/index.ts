import withApollo from '@island.is/web/graphql/withApollo'
import { withLocale } from '@island.is/web/i18n'
import Thingstorf from '@island.is/web/screens/Althingi/Thingstorf/Thingstorf'
import { getServerSidePropsWrapper } from '@island.is/web/utils/getServerSidePropsWrapper'
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore make web strict
const Screen = Thingstorf

export default Screen

export const getServerSideProps = getServerSidePropsWrapper(Screen)
