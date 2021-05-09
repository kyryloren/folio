import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';
import { motion, AnimatePresence } from 'framer-motion';
import { Curtains } from 'react-curtains';
import { Head, SmoothScroll, ThemeProvider, Nav } from '@components';
import { GlobalStyle } from '@styles';

const variants = {
  initial: {
    opacity: 0,
  },
  enter: {
    opacity: 1,
    transition: {
      duration: 0.5,
      delay: 0.5,
      when: 'beforeChildren',
    },
  },
  exit: {
    opacity: 0,
    transition: { duration: 0.5 },
  },
};

const Layout = ({ children, location }) => {
  //   const [loading, setIsLoading] = useState(true);

  return (
    <StaticQuery
      query={graphql`
        query LayoutQuery {
          site {
            siteMetadata {
              title
              siteUrl
              description
            }
          }
        }
      `}
      render={site => (
        <>
          <Head metadata={site.site.siteMetadata} />
          <SmoothScroll callbacks={location} />
          {/* <Cursor /> */}

          <ThemeProvider>
            <GlobalStyle />
            <AnimatePresence>
              <Nav />
              <motion.main
                key={location.pathname}
                variants={variants}
                initial="initial"
                animate="enter"
                exit="exit">
                <Curtains
                  data-scroll
                  data-scroll-sticky
                  data-scroll-target="#___gatsby"
                  watchScroll={typeof window !== 'undefined' && window.scroll.isMobile}
                  pixelRatio={
                    typeof window !== 'undefined' && Math.min(1.5, window.devicePixelRatio)
                  }>
                  {children}
                </Curtains>
              </motion.main>
            </AnimatePresence>
          </ThemeProvider>
        </>
      )}
    />
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
