import React, { useContext, useState, useEffect } from 'react';
import { DialogContext } from '../../contexts/DialogContext';

import Cookies from 'js-cookie';
import './cookie-dialog.scss';

const CookieDialog = (props) => {

  const { isDialogOpen, setDialogState } = useContext(DialogContext);

  const [preferenceCookies, setPreferenceCookies] = useState(true);
  const [marketingCookies, setMarketingCookies] = useState(true);
  const [statisticsCookies, setStatisticsCookies] = useState(false);

  useEffect(() => {

    console.log('fired on component load');

    setInitialCookies('preference-cookie');
    setInitialCookies('marketing-cookie');

    Cookies.get('preference-cookie') === '1' ? setPreferenceCookies(true) : setPreferenceCookies(false)
    Cookies.get('marketing-cookie') === '1' ? setMarketingCookies(true) : setMarketingCookies(false)

    // Statistics cookie
    Cookies.get('statistics_cookie_consent') ? setStatisticsCookies(true) : setStatisticsCookies(false)

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

  const toggleStatisticsCookies = (e) => {

    setStatisticsCookies(e.target.checked);
    // console.log(props.statisticsCookieName)

      Cookies.set(props.statisticsCookieName, e.target.checked, {
        expires: 365,
        path: '/'
      });

      // create or remove cookie based on toggle if statement

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

    <>
    <div className={`cookie-preference-modal ${isDialogOpen ? 'is-visible' : ''} ${props.cssClass}`}>
      <div className="container">
        <h1>{props.title}</h1>
        <p>{props.message}</p>
        <form id="cookie-form" onSubmit={savePreferences}>

          <div>
            <input type="checkbox" name="preferenceCookies" checked={preferenceCookies} onChange={togglePreferenceCookies} /><label>Preference Cookies</label>
          </div>

          <div>
            <input type="checkbox" name="marketingCookies" checked={marketingCookies} onChange={toggleMarketingCookies} /><label>Marketing Cookies</label>
          </div>

          <input type="submit" className="button" value="Save Preferences" />

        </form>

        <div>
          <h3>{props.statisticsCookiesTitle}</h3>
          <p>{props.statisticsCookieMessage}</p>
          <input type="checkbox" name="statistics" checked={statisticsCookies} onChange={toggleStatisticsCookies} id="statistics" />
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
  statisticsCookiesTitle: 'Statistics cookies',
  statisticsCookieMessage: 'These cookies allow the website to remember your choices for marketing features',
  statisticsCookieName: 'statistics_cookie_consent',
}

export default CookieDialog;