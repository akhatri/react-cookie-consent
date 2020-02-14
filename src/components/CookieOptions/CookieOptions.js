//import React, { Component, useContext, useState, useEffect } from 'react';
// import Cookies from 'js-cookie';


// import { CookieContext } from '../../contexts/CookieContext';

// class CookieOption extends Component {


//   constructor() {
//     super();

//     this.state = { 
//       baseCookie: true
//     }

//     this.toggleCookie = this.toggleCookie.bind(this);
//   }  

//   toggleCookie(e) {

//     if (this.props.id === 'base_cookie') {
//       console.log('clicked base cookie', e.target.checked);
//       //this.setState()
//     } else if (this.props.id === 'base_cookie_2') {
//       console.log('clicked base cookie 2', e.target.checked);
//     }

//   }


//   render() { 
//     return (
//       <div className="cookie-options-wrapper">

//       <h3 className="title">{this.props.title}</h3>

//       <div className={`cookie-option`}>
//         <div className="checkbox-control">
//           <label className="checkbox-container">
//             {/* <input type="checkbox" name="statistics" checked={statisticsCookies} onChange={toggleStatisticsCookies} id="statistics" /> */}
//             <input type="checkbox" id={this.props.cookie} checked={this.state.baseCookie} onChange={this.toggleCookie} />
//             <span className="checkmark"></span>
//           </label>
//         </div>
//         <div className="description">
//           <p>{this.props.message}</p>
//         </div>
//       </div>
//     </div>
//     );
//   }
// }
 
// export default CookieOption;


// CookieOption.defaultProps = {
//   title: 'Cookie Option',
//   message: 'This cookie option manages and tracks some marketing data',
//   cssClass: 'css'
// }



import React, { useContext, useState, useEffect } from 'react';
import Cookies from 'js-cookie';


import { CookieContext } from '../../contexts/CookieContext';

const CookieOption = (props) => {

  //const [baseCookie, setBaseCookie] = useState(true);

  const { baseCookie, setBaseCookie } = useContext(CookieContext);
  const { baseCookie2, setBaseCookie2 } = useContext(CookieContext);

  useEffect(() => {

    console.log(`${props.title} state`, baseCookie);

    //Cookies.get('base_cookie') ? setBaseCookie(true) : setBaseCookie(false)


    // // Statistics cookie
    //Cookies.get('base_cookie') ? setBaseCookie(true) : setBaseCookie(false)

  }, [baseCookie])     

  const toggleCookie = (e) => {

    console.log('clicked', props.title);

    // if () {

    // } else if () {

    // }

    setBaseCookie(e.target.checked);
    //setBaseCookie2(e.target.checked);
    


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


}

export const PreferenceCheckbox = (props) => {

  const { preferenceCookie, setPreferenceCookie } = useContext(CookieContext);


  useEffect( ()=> {
    console.log(preferenceCookie.enabled);
    console.log(preferenceCookie.name);
    console.log(preferenceCookie.expiry);
  })


  const togglePreferenceCookie = (e) => {

    setPreferenceCookie({
      ...preferenceCookie,
      //name: 'pref_cookie_consent', // override cookie name - can be picked up from passed prop
      //name: preferenceCookie.name,
      enabled: e.target.checked,
      //expiry: preferenceCookie.expiry
    }); 

  }


  return(
    <div className="cookie-options-wrapper">

      <h3 className="title">{props.title}</h3>

      <div className='cookie-option'>
        <div className="checkbox-control">
          <label className="checkbox-container">
            {/* <input type="checkbox" name="statistics" checked={statisticsCookies} onChange={toggleStatisticsCookies} id="statistics" /> */}
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

export const MarketingCheckbox = () => {
  return(
    <div>Marketing Cookie Option</div>
  )
}


export const StatisticsCheckbox = () => {
  return(
    <div>Marketing Cookie Option</div>
  )
}

// export default FunctionalCookieOption;
// export default MarketingCookieOption;


PreferenceCheckbox.defaultProps = {
  title: 'Preference Cookie',
  message: 'This cookie option manages and tracks some marketing data'
}