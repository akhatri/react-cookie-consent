import React, { useContext, useEffect, useCallback } from 'react';

import { DialogContext } from '../../contexts/DialogContext';

import Cookies from 'js-cookie'

import './cookie-banner.scss';

const CookieBanner = (props) => {

  const { isDialogOpen, setDialogState } = useContext(DialogContext);

  // const onAcceptPreferences = useCallback((e) => {
  //   e.preventDefault();
  //   console.log('callback fired')
  // }, [])

  useEffect(() => {
    console.log('hello cookie banner');

    let cookieBar = document.getElementById('cookie-bar');
    let cookieClose = document.querySelector('.js--cookie-close');

    /*
    * Show Cookie bar
    */
    if (!Cookies.get('cookieBar-nhm-cookie')) { //Fire when no cookie feedback present
      cookieBar.classList.add('show');
    }
    else {
      cookieBar.classList.remove('show');
    }


    /*
    * Close Cookie bar
    */
    cookieClose.addEventListener('click', () => {

      Cookies.set('cookieBar-nhm-cookie', 'nhm-cookie', {
        expires: 365,
        path: '/'
      });

      cookieBar.classList.remove('show');

    });

  });

  const manageConsent = () => {
    console.log('clicked button');
    setDialogState(true);
  }

  return (
    <>
      <div id="cookie-bar" data-module="cookie-bar" className={`cookie-consent-banner ${props.cssClass}`}>
        <h1>{props.title}</h1>
          <p className="policy-content">
            {props.message} {props.policyText} <a href={props.policyLink}>{props.policyLinkText}</a>
          </p>
        <div>
          <button className="js--cookie-close">{props.acceptButtonText}</button>
          <button onClick={manageConsent}>{props.manageConsentText}</button>
        </div>
        <div>{props.onAcceptPreferences}</div>
      </div>
    </>

  );
}

CookieBanner.defaultProps = {
  title: 'Your privacy',
  message: 'This site uses cookies to offer you a better browsing experience. By accepting, you consent to the use of cookies.',
  policyText: 'To find out more, read our updated policy terms in the link',
  policyLinkText: 'Cookie Policy',
  policyLink: 'https://gdpr.eu/cookies/',
  acceptButtonText: 'I am OK with it',
  manageConsentText: 'Manage Preferences',
  cssClass: ''
}

export default CookieBanner;