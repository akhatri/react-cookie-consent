import React, { useContext } from 'react';
import { CookieContext } from '../../contexts/CookieContext';

export const PreferenceCheckbox = (props: any) => {

  const { preferenceCookie, setPreferenceCookie } = useContext(CookieContext);

  const togglePreferenceCookie = (e: any) => {

    setPreferenceCookie({
      ...preferenceCookie,
      enabled: e.target.checked,
    });

    // callback with checkbox status if necessary
    props.onPreferenceToggle(e.target.checked);

  }


  return (
    <div className="cookie-options-wrapper">

      <h3 className="title">{props.title}</h3>

      <div className='cookie-option'>
        <div className="checkbox-control">
          <label className="checkbox-container">
            <input type="checkbox" checked={preferenceCookie.enabled} onChange={togglePreferenceCookie} />
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

export const MarketingCheckbox = (props: any) => {

  const { marketingCookie, setMarketingCookie } = useContext(CookieContext);

  const toggleMarketingCookie = (e: any) => {

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


export const StatisticsCheckbox = (props: any) => {

  const { statisticsCookie, setStatisticsCookie } = useContext(CookieContext);

  const toggleStatisticsCookie = (e: any) => {

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