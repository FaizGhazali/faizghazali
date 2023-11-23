// pages/_app.js
import React from 'react';
import App from 'next/app';
import Head from 'next/head';
import Header from '../components/header'; // Import the Header component
import Layout from '../components/Layout/Layout';
import HomeLayout from '../components/Layout/HomeLayout';

class MyApp extends App {
  render() {
    const { Component, pageProps,router } = this.props;
    let LayoutComponent;

    //special layout
    if(router.pathname==='/'){
      LayoutComponent = HomeLayout;
    }else{
      LayoutComponent = Layout;
    }

    return (
      <>
        <Head>
          <title>My Next.js App</title>
        </Head>
       
        <LayoutComponent>
          <Component {...pageProps} />
        </LayoutComponent>
      </>
    );
  }
}

export default MyApp;
