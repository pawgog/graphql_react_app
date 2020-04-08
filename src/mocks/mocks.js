import { MockList } from 'graphql-tools'
import casual from 'casual-browserify'

const mocks = {
  RootQuery: () => ({
    profileInfos: (root, { size }) => new MockList(size)
  }),

  profileInfo: () => ({
    name: casual.full_name,
    age: casual.integer(10, 100),
    city: casual.city,
    country: casual.country,
    phone: casual.phone,
    website: casual.url,
  })
}

export default mocks