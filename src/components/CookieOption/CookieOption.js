import React, { useContext, useState, useEffect } from 'react';
import Cookies from 'js-cookie';


import { CookieContext } from '../../contexts/CookieContext';

const CookieOption = (props) => {

  //const [baseCookie, setBaseCookie] = useState(true);

  const { baseCookie, setBaseCookie } = useContext(CookieContext);

  useEffect(() => {

    console.log(`${props.title} state`, baseCookie);

    //Cookies.get('base_cookie') ? setBaseCookie(true) : setBaseCookie(false)


    // // Statistics cookie
    //Cookies.get('base_cookie') ? setBaseCookie(true) : setBaseCookie(false)

  }, [baseCookie])     

  const toggleCookie = (e) => {

    setBaseCookie(e.target.checked);

    // if (baseCookie) {
    //   // set cookie
    //   Cookies.set('base_cookie', e.target.checked);
    //   //console.log(`Cookie set for ${props.title}?`, Cookies.get('base_cookie'));
    // } else if (!baseCookie) {
    //   // remove cookie
    //   Cookies.remove('base_cookie');
    //   //console.log(`Cookie removed for ${props.title}?`, Cookies.get('base_cookie'));
    // }    

    
    // console.log(e.target.checked);
    // props.checked = false;

    // e.target.checked = props.checked;


  }


  return (

    <div className="cookie-options-wrapper">

      <h3 className="title">{props.title}</h3>

      <div className={`cookie-option ${props.cssClass}`}>
        <div className="checkbox-control">
          <label className="checkbox-container">
            {/* <input type="checkbox" name="statistics" checked={statisticsCookies} onChange={toggleStatisticsCookies} id="statistics" /> */}
            <input type="checkbox" checked={baseCookie} id={props.cookie} onChange={toggleCookie} />
            <span className="checkmark"></span>
          </label>
        </div>
        <div className="description">
          <p>{props.message}</p>
        </div>
      </div>
    </div>
  );
}

CookieOption.defaultProps = {
  title: 'Cookie Option',
  message: 'This cookie option manages and tracks some marketing data',
  cssClass: 'css'
}

export default CookieOption;