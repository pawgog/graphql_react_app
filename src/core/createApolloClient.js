import { ApolloClient, InMemoryCache } from 'apollo-boost'
import createMockLink from '../mocks/mockLink'

export default function createApolloClient() {
  const apolloCache = new InMemoryCache()
  const link = createMockLink()
  return new ApolloClient({
    cache: apolloCache,
    link,
  })
}