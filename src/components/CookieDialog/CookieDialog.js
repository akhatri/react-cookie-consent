import React, { useContext, useState, useEffect } from 'react';
import { DialogContext } from '../../contexts/DialogContext';

import Cookies from 'js-cookie';
import './cookie-dialog.scss';

const CookieDialog = (props) => {

  const { isDialogOpen, setDialogState } = useContext(DialogContext);

  const [preferenceCookies, setPreferenceCookies] = useState(true);
  const [marketingCookies, setMarketingCookies] = useState(true);
  const [statisticsCookies, setStatisticsCookies] = useState(true);

  // Statistics Cookies
  //-------------------

  // Default options
  const defaultStatisticsCookieOptions = {
    title: 'Statistics cookies',
    message: 'These cookies allow the website to remember your choices for marketing features',
    cookieName: 'statistics_cookie_consent',
    cookieExpiry: 7
  }

  // workaround to allow default props in objects
  let { statisticsCookieOptions = defaultStatisticsCookieOptions } = props;
  statisticsCookieOptions = { ...defaultStatisticsCookieOptions, ...statisticsCookieOptions };


  useEffect(() => {

    setInitialCookies('preference-cookie');
    setInitialCookies('marketing-cookie');

    Cookies.get('preference-cookie') === '1' ? setPreferenceCookies(true) : setPreferenceCookies(false)
    Cookies.get('marketing-cookie') === '1' ? setMarketingCookies(true) : setMarketingCookies(false)

    // Statistics cookie
    Cookies.get(statisticsCookieOptions.cookieName) ? setStatisticsCookies(true) : setStatisticsCookies(false)

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

    //toogleCookies(e.target.checked, props.statisticsCookieName, props.statisticsCookieExpiry)
    // console.log(props.statisticsCookieOptions.title);
    // console.log(props.statisticsCookieOptions.message);
    // console.log(props.statisticsCookieOptions.cookieExpiry);

    // Cookies.set(props.statisticsCookieName, e.target.checked, {
    //   expires: 365,
    //   path: '/'
    // });

    // create or remove cookie based on toggle if statement

  }

  const saveCookiePreference = (e) => {
    console.log('save or remove cookies');

    if (statisticsCookies) {
      // set cookie
      Cookies.set(statisticsCookieOptions.cookieName, statisticsCookies)
    } else {
      // remove cookie
      Cookies.remove(statisticsCookieOptions.cookieName, statisticsCookies)
    }

    setDialogState(false);

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
      <div className={`cookie-preference-dialog ${isDialogOpen ? 'is-visible' : ''} ${props.cssClass}`}>
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

          <br />
          <br />
          <br />
          <br />

          <div className="cookie-options-wrapper">

            <h3 className="title">{statisticsCookieOptions.title}</h3>

            <div className="cookie-option">
              <div className="checkbox-control">
                <label className="checkbox-container">
                  <input type="checkbox" name="statistics" checked={statisticsCookies} onChange={toggleStatisticsCookies} id="statistics" />
                  <span className="checkmark"></span>
                </label>
              </div>
              <div className="description">
                <p>{statisticsCookieOptions.message}</p>
              </div>
            </div>

          </div>

          <button onClick={saveCookiePreference}>Save Cookie Preferences</button>

        </div>
      </div>
      <div className={`body-overlay ${isDialogOpen ? 'is-visible' : ''}`}></div>

    </>
  );
}

CookieDialog.defaultProps = {
  title: 'Your privacy options',
  message: 'Please review and manage your privacy settings below',
  cssClass: 'css'
}



export default CookieDialog;