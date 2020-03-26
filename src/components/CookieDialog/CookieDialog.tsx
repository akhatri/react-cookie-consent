import React, { useContext, useEffect } from 'react';
import { CookieContext } from '../../contexts/CookieContext';

import Cookies from 'js-cookie';
import './cookie-dialog.scss';

const CookieDialog = (props: any) => {

  const { isDialogOpen, setDialogState } = useContext(CookieContext);

  useEffect(() => {
  }, [])



  // Events
  //--------

  const closeDialog = (e: any) => {

    e.preventDefault();
    setDialogState(false);

  }



  // Functions
  //----------

  return (

    <>
      <div className={`cookie-preference-dialog ${isDialogOpen ? 'is-visible' : ''} ${props.cssClass}`}>
        <div className="container">
          <h1>{props.title}</h1>
          <p>{props.message}</p>
          {props.children}

          <div className="button-actions">
            <button onClick={closeDialog}>{props.confirmText}</button>
            <button onClick={closeDialog}>{props.cancelText}</button>
          </div>

        </div>
      </div>
      <div className={`body-overlay ${isDialogOpen ? 'is-visible' : ''}`}></div>

    </>
  );
}

CookieDialog.defaultProps = {
  title: 'Your privacy options',
  message: 'Please review and manage your privacy settings below',
  cssClass: 'css',
  confirmText: 'Save Preferences',
  cancelText: 'Cancel'
}



export default CookieDialog;