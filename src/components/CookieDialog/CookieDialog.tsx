import React, { useContext, useState, useEffect } from 'react';
import { CookieContext } from '../../contexts/CookieContext';

import Cookies from 'js-cookie';
import './cookie-dialog.scss';

const CookieDialog = (props: any) => {

  const { isDialogOpen, setDialogState } = useContext(CookieContext);
  // const { preferenceCookie, setPreferenceCookie } = useContext(CookieContext);
  // const { marketingCookie, setMarketingCookie } = useContext(CookieContext);
  // const { statisticsCookie, setStatisticsCookie } = useContext(CookieContext);

  useEffect(() => {

    // Cookies.get(preferenceCookie.name) ? setPreferenceCookie({...preferenceCookie, enabled: true}) : setPreferenceCookie({...preferenceCookie, enabled: false});

    // console.log(Cookies.get(preferenceCookie))
    // console.log(Cookies.get(marketingCookie.name))

    // console.log(Cookies.get('pref_cookie'));
    // console.log(Cookies.get(preferenceCookie.name));

    // Cookies.get(preferenceCookie.name) ? setPreferenceCookie({...preferenceCookie, enabled: true}) : setPreferenceCookie({...preferenceCookie, enabled: false});

    // Cookies.get(marketingCookie.name) ? setMarketingCookie({...marketingCookie, enabled: true}) : setMarketingCookie({...marketingCookie, enabled: false});

    // Cookies.get(statisticsCookie.name) ? setStatisticsCookie({...statisticsCookie, enabled: true}) : setStatisticsCookie({...statisticsCookie, enabled: false});

  }, [])



  // Events
  //--------

  const closeDialog = (e: any) => {

    e.preventDefault();

    // if (preferenceCookie.enabled) {
    //   Cookies.set(preferenceCookie.name, preferenceCookie.enabled);
    // } else {
    //   Cookies.remove(preferenceCookie.name);
    // }

    // if (marketingCookie.enabled) {
    //   Cookies.set(marketingCookie.name, marketingCookie.enabled);
    // } else {
    //   Cookies.remove(marketingCookie.name);
    // }

    // if (statisticsCookie.enabled) {
    //   Cookies.set(statisticsCookie.name, statisticsCookie.enabled);
    // } else {
    //   Cookies.remove(statisticsCookie.name);
    // }

    setDialogState(false);
  }



  // Functions
  //----------

  // function toggleCookiePreferences(toggleOption, cookieName) {
  //   //consoleconsole.log('toggle value', toggleOption);

  //   if (toggleOption === false) {

  //     // set cookie with value of 0
  //     Cookies.set(cookieName, '0', {
  //       expires: 365,
  //       path: '/'
  //     });

  //   } else if (toggleOption === true) {

  //     // set cookie with value of 1
  //     Cookies.set(cookieName, '1', {
  //       expires: 365,
  //       path: '/'
  //     });

  //   }

  // }

  // function setInitialCookies(cookieName) {

  //   // if (!Cookies.get(cookieName)) {
  //   //   //console.log('no cookie set. initialise and set to 1');

  //   //   // set cookie with value of 1
  //   //   Cookies.set(cookieName, '1', {
  //   //     expires: 365,
  //   //     path: '/'
  //   //   });

  //   // } else {
  //   //   //console.log('cookie set dont initialise them');
  //   // }
  // }

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