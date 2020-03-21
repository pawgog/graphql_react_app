import React, { Component } from 'react';
import { ApolloProvider } from '@apollo/react-hooks'
import createApolloClient from './core/createApolloClient'
import UsersProfile from './components/userProfile'
import './styles/_index.scss';

const client = createApolloClient()

class App extends Component {
 render() {
   return (
     <ApolloProvider client={client}>
       <>
         <UsersProfile />
       </>
     </ApolloProvider>
   );
 }
}
export default App
