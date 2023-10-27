// pages/_app.js
import React from 'react';
import App from 'next/app';
import Head from 'next/head';
import Header from '../components/header'; // Import the Header component
import Layout from '../app/layout';

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;

    return (
      <>
        <Head>
          <title>My Next.js App</title>
        </Head>
       
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </>
    );
  }
}

export default MyApp;
