import React, { createContext, useState } from 'react';

export const CookieContext = createContext();

const CookieContextProvider = (props) => {

  const [baseCookie, setBaseCookie] = useState(true);

  return (
    <CookieContext.Provider value={{baseCookie, setBaseCookie}}>
      {props.children}
    </CookieContext.Provider>
  )
}

export default CookieContextProvider;