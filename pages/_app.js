import Head from 'next/head'
import React from "react";
import App from "next/app";
import { init } from '@socialgouv/matomo-next';
import GlobalStyle from '@/styles/global.js'
import "@/styles/prism.css"

import "@/public/fonts/Clarity-City/style.css"
import "@/public/fonts/Happy-Times/style.css"

const MATOMO_URL = process.env.NEXT_PUBLIC_MATOMO_URL;
const MATOMO_SITE_ID = process.env.NEXT_PUBLIC_MATOMO_SITE_ID;

class MyApp extends App {
  componentDidMount() {
    if (window.location.href.includes("mxd.codes")) {
      init({ url: MATOMO_URL, siteId: MATOMO_SITE_ID }), 
      window._paq.push(['enableHeartBeatTimer']);
    }
  }
  render() {
    const { Component, pageProps } = this.props;
    return (
      <>
        <Head>
          {/* DNS Prefetch*/} 
          <link rel="dns-prefetch" href="https://analytics.mxd.codes" />,
          <link rel="dns-prefetch" href="https://maxst.icons8.com" />,
          <link rel="dns-prefetch" href="https://fonts.gstatic.com" />,
          {/* Preconnect */}
          <link rel="preconnect" href="https://api.mxd.codes" crossorigin/>,
          <link rel="preconnect" href="https://maxst.icons8.com" crossorigin />,
          <link rel="preconnect" href="https://fonts.googleapis.com" crossorigin />,
          {/* Preload */}
          <link rel="preload" href="https://analytics.mxd.codes/matomo.js" as="script" />,
          {/* POSSE POST DISCOVERY */}
          <link rel="feed" href="https://mxd.codes/notes" type="text/html" />,
          {/* IndieCert */}
          <link rel="authorization_endpoint" href="https://indieauth.com/auth" />
          <link rel="micropub" href="https://mxd.codes/micropub" />
          <link rel="token_endpoint" href="https://mxd.codes/token" />
          <link rel="webmention" href="https://webmention.io/mxd.codes/webmention" />,
          <link rel="pingback" href="https://webmention.io/mxd.codes/xmlrpc" />,
          {/* Stylesheets */}
          <link rel="stylesheet" href="https://maxst.icons8.com/vue-static/landings/line-awesome/line-awesome/css/line-awesome.min.css" />,
          <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap" />
          
          {/* Typekit Font 
          <link rel="dns-prefetch" href="https://use.typekit.net" />,
          <link rel="preconnect" href="https://use.typekit.net" crossorigin />,
          <link rel="stylesheet" href="https://use.typekit.net/xhe6fwq.css" />*/}
        </Head>
        <GlobalStyle/>
        <Component {...pageProps} />
      </>
    )
  }
}

export default MyApp;
