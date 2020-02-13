import React, { createContext, useState } from 'react';

export const DialogContext = createContext();

const DialogContextProvider = (props) => {

  const [isDialogOpen, setDialogState] = useState(false);
  const [isBannerOpen, setBannerState] = useState(false);

  // const [preferenceCookies, setPreferenceCookies] = useState(true);
  // const [marketingCookies, setMarketingCookies] = useState(true);


  return (
    <DialogContext.Provider value={{isDialogOpen, setDialogState, isBannerOpen, setBannerState}}>
      {props.children}
    </DialogContext.Provider>
  )
}

export default DialogContextProvider;