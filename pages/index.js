
import Head from 'next/head';
import React from 'react';
import Header from '../components/header';
import Jumbo from '../components/jumbo'

 function Home() {
  return (
    <div className = "outer-outer">
     
      <Head>
      <meta charset="utf-8" />
      <title>Garbage Collection Fair Billing System</title>
      {/* <link rel="stylesheet" href="assets/bootstrap.min.css" type="text/css" />*/}
      <link rel="stylesheet" href="fabi.css" type="text/css" />
      </Head>
     
      <Header />
      <Jumbo />
     
    </div>
  )
}

export default Home;