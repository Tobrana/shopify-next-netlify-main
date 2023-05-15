import { useEffect } from 'react';
import { AppWrapper } from '../state.js'; // import based on where you put it
import '@styles/globals.css';

export function Application({ Component, pageProps }) {

  useEffect(() => {
    // set a cookie has visitor_testing_group with A or B as the value
    // if it doesn't exist
    if (!document.cookie.includes('visitor_testing_group')) {
      const group = Math.random() < 0.5 ? 'A' : 'B';
      document.cookie = `visitor_testing_group=${group}`;
    }
  }, []);

  return (
    <AppWrapper>
      <Component {...pageProps} />
    </AppWrapper>
  );
}

export default Application;
