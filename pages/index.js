import { useEffect } from 'react';
import Head from 'next/head';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';

export default function Home() {
  useEffect(() => {
    if (document) {
      (function () {
        var s = document.createElement('script');
        s.async = true;
        s.src =
          'https://cdn.bitrix24.com/b16033663/crm/site_button/loader_3_buqu34.js' +
          '?' +
          ((Date.now() / 60000) | 0);
        var h = document.getElementsByTagName('script')[0];
        h.parentNode.insertBefore(s, h);
      })();
    }
  }, []);

  return (
    <div>
      <Header />
      <Main />
      <Footer />
    </div>
  );
}
