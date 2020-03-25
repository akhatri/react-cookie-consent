import React, { createContext, useState } from 'react';

export const CookieContext = createContext();

const CookieContextProvider = (props) => {

  const [isDialogOpen, setDialogState] = useState(false);
  const [isBannerOpen, setBannerState] = useState(false);

  // const [preferenceCookies, setPreferenceCookies] = useState(true);
  // const [marketingCookies, setMarketingCookies] = useState(true);


  return (
    <CookieContext.Provider value={{isDialogOpen, setDialogState, isBannerOpen, setBannerState}}>
      {props.children}
    </CookieContext.Provider>
  )
}

export default CookieContextProvider;