import React from 'react';
import { Helmet } from 'react-helmet';
import { Transition } from 'react-transition-group';
import Navbar from '../../components/Navbar/Navbar';
import styles from './HomePageLayout.module.scss';
import gitHubLogo from '../../images/github.svg';
import linkedinLogo from '../../images/linkedin.svg';
import twitterLogo from '../../images/Twitter.svg';
import instagramLogo from '../../images/Instagram.svg';
import emailIcon from '../../images/outline-mail_outline-24px.svg';

const HomePageLayout = ({ path }) => {
  const defaultCircleStyles = {
    borderRadius: '50%',
    transition: 'all 250ms ease-in-out',
  };

  const transitionCircleStyles = {
    entering: {
      borderRadius: '0',
      width: '110%',
      height: '200%',
      left: '-1rem',
      // transition: 'all 250ms ease-in-out',
    },
    entered: {
      borderRadius: '0',
      width: '110%',
      height: '200%',
      left: '-1rem',
      // transition: 'all 250ms ease-in-out',
    },
    exiting: {
      transition: `all`,
      borderRadius: '50%',
      transition: 'all 251ms ease-in-out',
    },
    exited: {
      transition: `all`,
      borderRadius: '50%',
      // transition: 'all 250ms ease-in-out',
    },
  };

  const defaultBgStyles = {};

  const transitionBgStyles = {
    entering: {
      backgroundPosition: 'top 30% right',
      transition: 'all 350ms ease-in-out',
    },
    entered: {
      backgroundPosition: 'top 30% right',
      // transition: 'all 350ms ease-in-out',
    },
    exiting: {
      transition: 'all 350ms ease-in-out',
    },
    exited: {
      // transition: 'all 350ms ease-in-out',
    },
  };

  const defaultHelloCopy = {
    opacity: 1,
    transition: 'all 250ms ease-in-out',
  };

  const transitionHelloCopy = {
    entering: {
      opacity: 0,
      transform: 'translateX(-3rem)',
    },
    entered: {
      opacity: 0,
      transform: 'translateX(-3rem)',
    },
    exiting: {
      opacity: 1,
    },
    exited: {
      opacity: 1,
    },
  };

  const defaultGradientStyles = {
    width: 'calc(100% + 2rem)',
    position: 'relative',
    left: '-1rem',
    top: 'calc(25% - 4.3125rem)',
    height: '75%',
    background:
      'linear-gradient(180deg, rgba(57, 63, 71, 0) 0%, #393f47 70.31%)',
    display: 'flex',
    alignItems: 'flex-end',
    opacity: '0',
    transition: 'opacity 250ms ease-in-out',
    transitionDelay: '250ms',
  };

  const transitionGradientStyles = {
    entering: {
      opacity: 1,
    },
    entered: {
      opacity: 1,
    },
    exiting: {
      opacity: 0,
      transitionDelay: '0ms',
    },
    exited: {
      opacity: 0,
      transitionDelay: '0ms',
    },
  };

  return (
    <>
      <Helmet>
        <title>Dillon Schultz</title>
      </Helmet>
      <Transition in={path === '/about/'} timeout={350}>
        {(state) => (
          <div
            className={styles.Layout}
            style={{ ...defaultBgStyles, ...transitionBgStyles[state] }}
          >
            <Navbar />
            <div className={styles.helloContainer}>
              <Transition in={path === '/about/'} timeout={250}>
                {(state) => (
                  <div
                    className={styles.helloContainerCopy}
                    style={{
                      ...defaultHelloCopy,
                      ...transitionHelloCopy[state],
                    }}
                  >
                    <h1 className={styles.helloHeading}>
                      Hello,{' '}
                      <span style={{ display: 'table' }}>I'm Dillon.</span>
                    </h1>
                    <h1 className={styles.helloSubheading}>
                      I'm a designer &{' '}
                      <span style={{ display: 'table' }}>
                        front end developer
                      </span>
                    </h1>
                  </div>
                )}
              </Transition>
              <Transition in={path === '/about/'} timeout={250}>
                {(state) => (
                  <div
                    className={styles.circle}
                    style={{
                      ...defaultCircleStyles,
                      ...transitionCircleStyles[state],
                    }}
                  ></div>
                )}
              </Transition>
            </div>
            <Transition in={path === '/about/'} timeout={250}>
              {(state) => (
                <div
                  style={{
                    ...defaultGradientStyles,
                    ...transitionGradientStyles[state],
                  }}
                >
                  <div className={styles.aboutDetialsCopyContainer}>
                    <h5 className={styles.connectHeading}>connect with me</h5>
                    <div className={styles.linkArray}>
                      <a
                        href="https://twitter.com/dill_schultz"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.linkIcon}
                      >
                        <img
                          src={twitterLogo}
                          alt="twitter logo"
                          style={{ height: '100%', width: '100%' }}
                        />
                      </a>
                      <a
                        href="https://www.instagram.com/dill.schultz/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.linkIcon}
                      >
                        <img
                          src={instagramLogo}
                          alt="instagram logo"
                          style={{ height: '100%', width: '100%' }}
                        />
                      </a>
                      <a
                        href="https://github.com/dillonschultz93"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.linkIcon}
                      >
                        <img
                          src={gitHubLogo}
                          alt="github logo"
                          style={{ height: '100%', width: '100%' }}
                        />
                      </a>
                      <a
                        href="https://www.linkedin.com/in/dillon-schultz-7a5b2bab/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.linkIcon}
                      >
                        <img
                          src={linkedinLogo}
                          alt="linkedin logo"
                          style={{ height: '100%', width: '100%' }}
                        />
                      </a>
                      <a
                        href="mailto:hello@dillonschultz.design?subject=Hello! I saw your site"
                        className={styles.linkIcon}
                      >
                        <img
                          src={emailIcon}
                          alt="email icon"
                          style={{ height: '100%', width: '100%' }}
                        />
                      </a>
                    </div>
                    <p>
                      A result-driven Front-End Developer with an extensive
                      background working in graphic design and editorial design.
                      Looking to apply knowledge of front-end development and
                      graphic design to create user-friendly and polished web
                      applications.
                    </p>
                  </div>
                </div>
              )}
            </Transition>
          </div>
        )}
      </Transition>
    </>
  );
};

export default HomePageLayout;
