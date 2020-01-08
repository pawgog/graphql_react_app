import React, { Component } from 'react';
import { ApolloProvider } from 'react-apollo'
import createApolloClient from './core/createApolloClient'
import UsersProfile from './components/userProfile'

const client = createApolloClient()

class App extends Component {
 render() {
   return (
     <ApolloProvider client={client}>
       <div className="App">
         <UsersProfile />
       </div>
     </ApolloProvider>
   );
 }
}
export default App
