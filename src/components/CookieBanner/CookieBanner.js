import React, { useContext, useEffect } from 'react';
import { DialogContext } from '../../contexts/DialogContext';
import Cookies from 'js-cookie'
import './cookie-banner.scss';

const CookieBanner = (props) => {

  const { setDialogState } = useContext(DialogContext);

  useEffect(() => {

    let cookieBar = document.getElementById('cookie-bar');
    let cookieClose = document.querySelector('.js--cookie-close');

    if (!Cookies.get('cookieBar-nhm-cookie')) {
      cookieBar.classList.add('is-active');
    }
    else {
      cookieBar.classList.remove('is-active');
    }

    cookieClose.addEventListener('click', () => {

      Cookies.set('cookieBar-nhm-cookie', 'nhm-cookie', {
        expires: 365,
        path: '/'
      });

      cookieBar.classList.remove('show');

    });

  });

  const manageConsent = () => {
    setDialogState(true);
  }

  return (
    <>
      <div id="cookie-bar" className={`cookie-consent-banner ${props.cssClass}`}>
        <div className="policy-info">
          <h2 className="title">{props.title}</h2>
          <p className="description">
            {props.message} {props.policyText} <a href={props.policyLink}>{props.policyLinkText}</a>
          </p>
        </div>
        <div className="cta-actions">
          <button className="js--cookie-close">{props.acceptButtonText}</button>
          <button onClick={manageConsent}>{props.manageConsentText}</button>
        </div>
      </div>
    </>
  );
}

CookieBanner.defaultProps = {
  title: 'Your privacy',
  message: 'This site uses cookies to offer you a better browsing experience. By accepting, you consent to the use of cookies.',
  policyText: 'To find out more, read our updated policy terms in the link',
  policyLinkText: 'Cookie Policy',
  policyLink: 'https://gdpr.eu/cookies/',
  acceptButtonText: 'I am OK with it',
  manageConsentText: 'Manage Preferences',
  cssClass: ''
}

export default CookieBanner;