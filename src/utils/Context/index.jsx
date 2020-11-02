// import react
import React from 'react';
// import useNews custom hooks
import useNews from '../custom hooks/useNews.jsx'

// create context and export it
const Context = React.createContext()

// create context provider and export it
const ContextProvider = ({ children }) => {
  const { news, setAction } = useNews()

  return (
    <Context.Provider value={{ news, setAction }}>
      {children}
    </Context.Provider>
  )
}

export { Context, ContextProvider }
