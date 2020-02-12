import React, { createContext, useState } from 'react';

export const DialogContext = createContext();

const DialogContextProvider = (props) => {

  const [isDialogOpen, setDialogState] = useState(false);

  // const [preferenceCookies, setPreferenceCookies] = useState(true);
  // const [marketingCookies, setMarketingCookies] = useState(true);


  return (
    <DialogContext.Provider value={{isDialogOpen, setDialogState}}>
      {props.children}
    </DialogContext.Provider>
  )
}

export default DialogContextProvider;