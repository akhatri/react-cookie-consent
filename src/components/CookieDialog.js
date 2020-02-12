import React, { useContext, useState, useEffect } from 'react';
import { DialogContext } from '../contexts/DialogContext';

import Cookies from 'js-cookie';

const CookieDialog = (props) => {

  const { isDialogOpen, setDialogState } = useContext(DialogContext);

  const [preferenceCookies, setPreferenceCookies] = useState(true);
  const [marketingCookies, setMarketingCookies] = useState(true);

  useEffect(() => {

    console.log('fired on component load');

    setInitialCookies('preference-cookie');
    setInitialCookies('marketing-cookie');

    Cookies.get('preference-cookie') === '1' ? setPreferenceCookies(true) : setPreferenceCookies(false)
    Cookies.get('marketing-cookie') === '1' ? setMarketingCookies(true) : setMarketingCookies(false)

  }, [])



  // Events
  //--------
  const savePreferences = (e) => {
    e.preventDefault();
    setDialogState(false);
  }

  const togglePreferenceCookies = (e) => {

    setPreferenceCookies(e.target.checked);
    toggleCookiePreferences(e.target.checked, 'preference-cookie')

  }

  const toggleMarketingCookies = (e) => {

    setMarketingCookies(e.target.checked);
    toggleCookiePreferences(e.target.checked, 'marketing-cookie')

  }

  // Functions
  //----------

  function toggleCookiePreferences(toggleOption, cookieName) {
    console.log('toggle value', toggleOption);

    if (toggleOption === false) {

      // set cookie with value of 0
      Cookies.set(cookieName, '0', {
        expires: 365,
        path: '/'
      });

    } else if (toggleOption === true) {

      // set cookie with value of 1
      Cookies.set(cookieName, '1', {
        expires: 365,
        path: '/'
      });

    }

  }

  function setInitialCookies(cookieName) {

    if (!Cookies.get(cookieName)) {
      console.log('no cookie set. initialise and set to 1');

      // set cookie with value of 1
      Cookies.set(cookieName, '1', {
        expires: 365,
        path: '/'
      });

    } else {
      console.log('cookie set dont initialise them');
    }
  }

  return (

    <div className={`cookie-preference-modal ${isDialogOpen ? 'is-visible' : ''}`}>
      <div className="container">
        <h1>Cookie Preference</h1>
        <form id="cookie-form" onSubmit={savePreferences}>

          <div>
            <input type="checkbox" name="preferenceCookies" checked={preferenceCookies} onChange={togglePreferenceCookies} /><label>Preference Cookies</label>
          </div>

          <div>
            <input type="checkbox" name="marketingCookies" checked={marketingCookies} onChange={toggleMarketingCookies} /><label>Marketing Cookies</label>
          </div>

          <input type="submit" className="button" value="Save Preferences" />

        </form>
      </div>
    </div>
  );
}

export default CookieDialog;