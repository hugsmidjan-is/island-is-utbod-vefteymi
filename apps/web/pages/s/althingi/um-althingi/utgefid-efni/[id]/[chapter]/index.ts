import withApollo from '@island.is/web/graphql/withApollo'
import { withLocale } from '@island.is/web/i18n'
import Chapter from '@island.is/web/screens/Althingi/Handbooks/Chapter'
import Handbook from '@island.is/web/screens/Althingi/Handbooks/Handbook'
import { getServerSidePropsWrapper } from '@island.is/web/utils/getServerSidePropsWrapper'

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore make web strict
const Screen = Chapter

export default Screen

export const getServerSideProps = getServerSidePropsWrapper(Screen)
