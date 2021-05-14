import Head from 'next/head'
import React from 'react';
import { MobileSliderProvider } from '../components/MobileSlider/MobileSliderProvider';
import Navbar from '../components/Navbar'
import { global } from '../stitches.config'

const globalStyles = global({
  '*': { margin: 0, padding: 0, boxSizing: 'border-box', fontFamily: 'sans-serif' },
});

export const Home = (): JSX.Element => {

  globalStyles();
  return (
    <div className="container">
      <Head>
        <title>State Machine Slider</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <MobileSliderProvider>
        <Navbar />
      </MobileSliderProvider>
      <main>

      </main>
    </div>)
}

export default Home
