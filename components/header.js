import React from 'react';
import Link from 'next/link';
import Head from 'next/head';
import Script from 'next/script';
import {
  HeaderContainer,
  HeaderRightWrapper,
  HeaderLeftWrapper,
  Title,
  HeaderLink,
  HeaderMiddleWrapper,
} from './header.styles';
import { MarkGithubIcon } from 'octicons-extended-react/dist/index.umd';

const Header = () => {
  return (
    <>
      <Head>
        <title>Apple Summary Slides</title>
        <meta name='language' content='English'></meta>
        <meta name='title' content='Apple Summary Slides' />
        <meta
          name='description'
          content='A collection of the summary slides created by Apple for WWDC and Apple Events'
        />
        <meta
          name='keywords'
          content='apple, summary, slides, products, events, wwdc, tiles, cards, iphone, ipad, mac, macbook'
        />
        <meta httpEquiv='Content-Type' content='text/html; charset=utf-8' />
        <meta name='author' content='Ricky Zhang' />
        <link
          rel='apple-touch-icon'
          sizes='180x180'
          href='/apple-touch-icon.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='32x32'
          href='/favicon-32x32.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='16x16'
          href='/favicon-16x16.png'
        />
        <link rel='manifest' href='/site.webmanifest' />
        <link rel='mask-icon' href='/safari-pinned-tab.svg' color='#0969da' />
        <meta
          name='apple-mobile-web-app-title'
          content='Apple Summary Slides'
        />
        <meta name='application-name' content='Apple Summary Slides' />
        <meta name='msapplication-TileColor' content='#da532c' />
        <meta name='theme-color' content='#ffffff' />
      </Head>
      <Script
        async
        src='https://www.googletagmanager.com/gtag/js?id=000'></Script>
      <Script id='ga'>
        {`window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', '000');`}
      </Script>
      <HeaderContainer>
        <HeaderLeftWrapper>
          <Link href='/'>
            <Title>Apple Summary Slides</Title>
          </Link>
        </HeaderLeftWrapper>
        <HeaderMiddleWrapper>
          <HeaderLink href='/event-AppleEventSummer2022'>By event</HeaderLink>
          <HeaderLink href='/product-AppleWatch'>By product</HeaderLink>
        </HeaderMiddleWrapper>
        <HeaderRightWrapper>
          <a
            href='https://github.com/rickyzhangca/apple-summary-slides'
            target='_blank'
            rel='noreferrer'>
            <MarkGithubIcon fill='white' size={20} />
          </a>
        </HeaderRightWrapper>
      </HeaderContainer>
    </>
  );
};

// eslint-disable-next-line import/no-unused-modules
export default Header;
