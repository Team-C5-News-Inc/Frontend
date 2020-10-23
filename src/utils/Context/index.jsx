// import react
import React from 'react';

// create context and export it
const Context = React.createContext()

// create context provider and export it
const ContextProvider = ({ children }) => {
  return (
    <Context.Provider>
      {children}
    </Context.Provider>
  )
}

export { Context, ContextProvider }
