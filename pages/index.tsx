import Head from 'next/head';
import React from 'react';
import Phone from '../components/Phone';
import { MobileSliderProvider } from '../components/MobileSlider/MobileSliderProvider';
import Navbar from '../components/Navbar';
import { global, styled } from '../stitches.config';

const globalStyles = global({
  '*': {
    margin: 0,
    padding: 0,
    boxSizing: 'border-box',
    fontFamily: 'sans-serif',
  },
});

export const Home = (): JSX.Element => {
  globalStyles();
  return (
    <div className="container">
      <Head>
        <title>State Machine Slider</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Phone />

      <main></main>
    </div>
  );
};

export default Home;
