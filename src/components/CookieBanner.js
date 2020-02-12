import React, { useContext, useEffect } from 'react';

import { DialogContext } from '../contexts/DialogContext';

import Cookies from 'js-cookie'
import CookieDialog from './CookieDialog';

const CookieBanner = () => {

  const { isDialogOpen, setDialogState } = useContext(DialogContext);

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
      <div id="cookie-bar" data-module="cookie-bar">
        <div className="small-12 medium-9 large-10 columns text-center">
          <p>We use cookies and similar technologies to optimise your experience when using this site and to help tailor our digital advertising on third party sites.  View our <a href="https://www.nhm.ac.uk/about-us/cookies.html">Cookie Policy</a> and our new <a href="https://www.nhm.ac.uk/about-us/privacy-notice.html">Privacy notice</a>.
          {/* <button id="js-cookie-preference">Manage Preferences OLD</button> */}
            <button onClick={manageConsent}>Manage Preferences</button>
          </p>
        </div>
        <div className="small-12 medium-3 large-2 columns text-right">
          <a className="js--cookie-close" title="Accept cookies">I accept</a>
          <i className="js--cookie-close ico svg-ico" data-svg-src="/etc/designs/nhmwww/img/svg-icons/icon_l_general_close.svg" data-svg-title="icon_general_close" data-stroke-width="8" data-base-color="#FFFFFF"></i>
        </div>
      </div>
      <CookieDialog />
      <div className={`body-overlay ${isDialogOpen ? 'is-visible' : ''}`}></div>
    </>

  );
}

export default CookieBanner;