import React, { useState, useContext, useEffect } from 'react';
import { CookieContext } from '../../contexts/CookieContext';

import Cookies from 'js-cookie';

export const PreferenceCheckbox = (props) => {

  //const { preferenceCookie, setPreferenceCookie } = useContext(CookieContext);

  // change this to enabled state
  // const [preferenceCookie, setPreferenceCookie] = useState({
  //   name: 'preference_cookie_consent',
  //   expiry: 365,
  //   enabled: true
  // }); 
  const [preferenceCookie, setPreferenceCookie] = useState(true);   
  

  useEffect( ()=>{

    console.log(preferenceCookie.name);
    console.log(props.name);

    console.log(Cookies.get(props.name))
    //console.log(Cookies.get(preferenceCookie.name))

    // let preferenceCookieValue = preferenceCookie;
    // console.log('from state', JSON.stringify(preferenceCookieValue.name));
    // console.log('from props', props.name);

    
    // if (preferenceCookie.name !== props.name) {
    //   console.log('use the props as state', props.name);
    //   setPreferenceCookie({ name: 'preference cookie'});
    //   console.log(preferenceCookie.name)
    // }    

    // setPreferenceCookie({ name: 'preference cookie'});
    // console.log(preferenceCookie.name)


    // let isPreferenceCookieSet = Cookies.get(JSON.stringify(preferenceCookie.name));
    // console.log(isPreferenceCookieSet)

    // Cookies.get(props.name) ? setPreferenceCookie({...preferenceCookie, enabled: true}) : setPreferenceCookie({...preferenceCookie, enabled: false});
    Cookies.get(props.name) ? setPreferenceCookie(true) : setPreferenceCookie(false);
    //    console.log(Cookies.get());    



  }, []);

  const togglePreferenceCookie = (e) => {

    // setPreferenceCookie({
    //   ...preferenceCookie,
    //   enabled: e.target.checked,
    // });
    setPreferenceCookie(e.target.checked);

    console.log(preferenceCookie.name);
    console.log(e.target.checked);

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

      <h3 className="title">{props.title} {props.name}</h3>

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

  const { marketingCookie, setMarketingCookie } = useContext(CookieContext);

  const toggleMarketingCookie = (e) => {

    setMarketingCookie({
      ...marketingCookie,
      enabled: e.target.checked,
    });

    // callback with checkbox status if necessary
    props.onMarketingToggle(e.target.checked);

  }

  return (
    <div className="cookie-options-wrapper">

      <h3 className="title">{props.title}</h3>

      <div className='cookie-option'>
        <div className="checkbox-control">
          <label className="checkbox-container">
            <input type="checkbox" checked={marketingCookie.enabled} onChange={toggleMarketingCookie} />
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

    setStatisticsCookie({
      ...statisticsCookie,
      enabled: e.target.checked,
    });

    // callback with checkbox status if necessary
    props.onStatisticsToggle(e.target.checked);

  }


  return (
    <div className="cookie-options-wrapper">

      <h3 className="title">{props.title}</h3>

      <div className='cookie-option'>
        <div className="checkbox-control">
          <label className="checkbox-container">
            <input type="checkbox" checked={statisticsCookie.enabled} onChange={toggleStatisticsCookie} />
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
  name: 'pref_cookie',
  expiry: 365,
  onPreferenceToggle: function () { }
}

MarketingCheckbox.defaultProps = {
  title: 'Marketing Cookie',
  message: 'This cookie option manages and tracks some marketing data',
  onMarketingToggle: function () { }
}

StatisticsCheckbox.defaultProps = {
  title: 'Statistics Cookie',
  message: 'This cookie option manages and tracks some marketing data',
  onStatisticsToggle: function () { }
}