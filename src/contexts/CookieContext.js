import React, { createContext, useState } from 'react';

export const CookieContext = createContext();

const CookieContextProvider = (props) => {


  const [preferenceCookie, setPreferenceCookie] = useState({
    name: 'pref_cookie_consent',
    expiry: 40,
    enabled: true
  });

  const [marketingCookie, setMarketingCookie] = useState({
    name: 'marketing_cookie_consent',
    expiry: 7,
    enabled: true
  });

  const [statisticsCookie, setStatisticsCookie] = useState({
    name: 'statistics_cookie_consent',
    expiry: 7,
    enabled: true

  });



  return (
    <CookieContext.Provider value={{ preferenceCookie, setPreferenceCookie, marketingCookie, setMarketingCookie, statisticsCookie, setStatisticsCookie }}>
      {props.children}
    </CookieContext.Provider>
  )
}

export default CookieContextProvider;