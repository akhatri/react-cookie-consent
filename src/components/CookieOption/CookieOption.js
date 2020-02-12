import React from 'react';

const CookieOption = (props) => {
  return (
    <div className={`cookie-option ${props.cssClass}`}>
      {props.content}
      <input type="checkbox" name="marketingCookies"/><label>Statistics Cookies</label>
    </div>
  );
}

CookieOption.defaultProps = {
  title: 'Your privacy options',
  message: 'Please review and manage your privacy settings below',
  cssClass: 'css'
}

export default CookieOption;