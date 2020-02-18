import React, { useState, useEffect } from 'react';
import CookieBanner from './components/CookieBanner/CookieBanner';
import DialogContextProvider from './contexts/DialogContext';
import CookieDialog from './components/CookieDialog/CookieDialog';
//import CookieOption, {FunctionalCookieOption, MarketingCookieOption} from './components/CookieOption/CookieOption';
import { PreferenceCheckbox, MarketingCheckbox, StatisticsCheckbox } from './components/CookieOptions/CookieOptions';
import CookieContextProvider from './contexts/CookieContext';

function App() {

  const onPreferenceToggle = (e: any) => {

    //setStatisticsCookies(e.target.checked);
    console.log('callback if necessary', e);
    console.log(e);

  }

  return (
    <div className="App">
      <header className="App-header">
        <h3>Site Header</h3>
      </header>
      <main>
        <h3>Main content</h3>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>
      </main>
      <footer>
        <h3>Footer</h3>
      </footer>
      <DialogContextProvider>
        <CookieBanner />
        <CookieContextProvider>
          <CookieDialog>
            <PreferenceCheckbox />
            <MarketingCheckbox />
            <StatisticsCheckbox />
          </CookieDialog>
        </CookieContextProvider>
      </DialogContextProvider>
    </div>
  );
}

export default App;
