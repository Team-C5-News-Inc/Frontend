// import react
import React from 'react';

// import useNews custom hooks
import useNews from '../custom hooks/useNews.jsx'

//import apolloclient
//import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

// create context and export it
const Context = React.createContext()


// Initialize Apollo Client
/*const client = new ApolloClient({
  uri: 'https://backend-platzi-news.herokuapp.com/search',
  cache: new InMemoryCache()
});*/


// create context provider and export it
const ContextProvider = ({ children }) => {
  const { news } = useNews()

  return (
    //<Context.Provider value={{ news, client}}>
    <Context.Provider value={{ news}}>
      {children}
    </Context.Provider>
  )
}

export { Context, ContextProvider }
