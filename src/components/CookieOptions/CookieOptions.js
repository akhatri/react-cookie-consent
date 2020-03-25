import React, { useState, useContext, useEffect } from 'react';
import { CookieContext } from '../../contexts/CookieContext';

import Cookies from 'js-cookie';
import './cookie-options.scss';

export const PreferenceCheckbox = (props) => {

  const [preferenceCookie, setPreferenceCookie] = useState(true);   
  
  useEffect(() => {

    Cookies.get(props.name) ? setPreferenceCookie(true) : setPreferenceCookie(false);

  }, []);

  const togglePreferenceCookie = (e) => {

    setPreferenceCookie(e.target.checked);

    if (e.target.checked) {
      console.log('SET COOKIE HERE', e.target.checked)
      Cookies.set(props.name, e.target.checked);
    } else {
      console.log('REMOVE COOKIE HERE', e.target.checked)
      Cookies.remove(props.name);
    }

    // callback with checkbox status if necessary
    props.onPreferenceToggle(e.target.checked);

  }


  return (
    <div className="cookie-options-wrapper">

      <h3 className="title">{props.title}</h3>

      <div className='cookie-option'>
        <div className="checkbox-control">
          <label className="checkbox-container">
            <input type="checkbox" checked={preferenceCookie} onChange={togglePreferenceCookie} />
            <span className="checkmark"></span>
          </label>
        </div>
        <div className="description">
          <p>{props.message}</p>
        </div>
      </div>
    </div>
  )

}

export const MarketingCheckbox = (props) => {

  const [ marketingCookie, setMarketingCookie ] = useState(true);

  useEffect( ()=>{

    Cookies.get(props.name) ? setMarketingCookie(true) : setMarketingCookie(false);

  }, []);  



  const toggleMarketingCookie = (e) => {

    setMarketingCookie(e.target.checked);

    if (e.target.checked) {
      console.log('SET COOKIE HERE', e.target.checked)
      Cookies.set(props.name, e.target.checked);
    } else {
      console.log('REMOVE COOKIE HERE', e.target.checked)
      Cookies.remove(props.name);
    }    

    // callback with checkbox status if necessary
    props.onMarketingToggle(e.target.checked);

  }

  return (
    <div className="cookie-options-wrapper">

      <h3 className="title">{props.title}</h3>

      <div className='cookie-option'>
        <div className="checkbox-control">
          <label className="checkbox-container">
            <input type="checkbox" checked={marketingCookie} onChange={toggleMarketingCookie} />
            <span className="checkmark"></span>
          </label>
        </div>
        <div className="description">
          <p>{props.message}</p>
        </div>
      </div>
    </div>
  )

}


export const StatisticsCheckbox = (props) => {

  const { statisticsCookie, setStatisticsCookie } = useContext(CookieContext);

  const toggleStatisticsCookie = (e) => {

    setStatisticsCookie(e.target.checked);

    if (e.target.checked) {
      console.log('SET COOKIE HERE', e.target.checked)
      Cookies.set(props.name, e.target.checked);
    } else {
      console.log('REMOVE COOKIE HERE', e.target.checked)
      Cookies.remove(props.name);
    }    


    // callback with checkbox status if necessary
    props.onStatisticsToggle(e.target.checked);

  }


  return (
    <div className="cookie-options-wrapper">

      <h3 className="title">{props.title}</h3>

      <div className='cookie-option'>
        <div className="checkbox-control">
          <label className="checkbox-container">
            <input type="checkbox" checked={statisticsCookie} onChange={toggleStatisticsCookie} />
            <span className="checkmark"></span>
          </label>
        </div>
        <div className="description">
          <p>{props.message}</p>
        </div>
      </div>
    </div>
  )

}

PreferenceCheckbox.defaultProps = {
  title: 'Preference Cookie',
  message: 'This cookie option manages and tracks some marketing data',
  name: 'preference_cookie',
  expiry: 365,
  onPreferenceToggle: function () { }
}

MarketingCheckbox.defaultProps = {
  title: 'Marketing Cookie',
  message: 'This cookie option manages and tracks some marketing data',
  name: 'marketing_cookie',
  expiry: 365,  
  onMarketingToggle: function () { }
}

StatisticsCheckbox.defaultProps = {
  title: 'Statistics Cookie',
  message: 'This cookie option manages and tracks some marketing data',
  name: 'statistics_cookie',
  expiry: 365,  
  onStatisticsToggle: function () { }
}