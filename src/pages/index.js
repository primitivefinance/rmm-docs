import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';
import HomepageFeatures from '../components/HomepageFeatures';
import {
  GitHubLogoIcon,
  TwitterLogoIcon,
  DiscordLogoIcon,
} from '@radix-ui/react-icons'

function HomepageHeader() {
  return (
    <div className="container">
      <div className={styles.heroBannerWrapper}>
        <header className={styles.heroBanner}>
        </header>
        <span className={styles.heroBannerText}>
          <h2>Explore the Primitive Protocol</h2>
          <p>Learn more about the smart contracts that power Primitive.</p>
        </span>
        <a target="_blank" href="/technical/smart-contracts/overview">
          <h3 className={styles.heroBannerButton}>Read the Docs</h3>
        </a>
      </div>
    </div>
  );
}

function Footer() {
  const getClasses = (classNameString) => {
    return clsx(classNameString.split(' ').map(cn => styles[cn]))
  }
  return <section className={clsx(styles['w-full'], styles['relative'], styles['py-16'], styles['bg-slate3'], styles['flex'], styles['justify-center'])}>
    <div className={clsx(styles['w-5/6'], styles['md:w-4/6'], styles['lg:w-3/6'], styles['flex'], styles['flex-col'], styles['items-center'])}>
      <div className={clsx(styles['w-full'], styles['grid'], styles['grid-cols-1'], styles['md:grid-cols-4'], styles['md:gap-0'], styles['gap-6'], styles['justify-between'])} >
        <div className={clsx(styles['flex'], styles['flex-col'], styles['items-center'], styles['justify-center'], styles['md:justify-start'], styles['md:items-start'], styles['gap-4'])}>
          <img src="/img/FooterIcon.svg" alt="footerLogo" />
          <div className={clsx(styles['text-center'], styles['md:text-left'])}>
            <p className={clsx(styles['text-slate8'], styles['text-xs'])}>
            Primitive is looking for talented people to design and build the friendliest crypto products.
            </p>
          </div>
          <p className={clsx(styles['text-slate8'], styles['text-xs'])}>Message us <a href='mailto:people@primitive.xyz'>here</a>.</p>
        </div>
        <div className={clsx(styles['flex'], styles['flex-col'], styles['items-center'], styles['justify-center'])}>
          <div className={clsx(styles['text-center'], styles['md:text-left'])}>
            <p className={clsx(styles['text-slate8'], styles['text-xs'], styles['mb-2'])}>Organization</p>
            <p className={clsx(styles['text-hiContrast'], styles['text-xs'], styles['mb-1'])}><a href="/people">People</a></p>
            <p className={clsx(styles['text-hiContrast'], styles['text-xs'], styles['mb-1'])}><a href="mailto:contact@primitive.xyz">Contact</a></p>
          </div>
        </div>
        <div className={clsx(styles['flex'], styles['flex-col'], styles['items-center'], styles['justify-center'])}>
          <div className={clsx(styles['md:text-left'], styles['text-center'])}>
            <p className={clsx(styles['text-slate8'], styles['text-xs'], styles['mb-2'])}>Resources</p>
            <p className={clsx(styles['text-hiContrast'], styles['text-xs'], styles['mb-1'])}><a className={clsx(styles['text-hiContrast'])} href="/blog">Blog</a></p>
            <p className={clsx(styles['text-hiContrast'], styles['text-xs'], styles['mb-1'])}><a href="/library">Library</a></p>
          </div>
        </div>
        <div className={clsx(styles['flex'], styles['flex-row'], styles['items-center'], styles['justify-center'], styles['gap-4'])}>
        <a
              href="https://twitter.com/primitivefi"
              target={'_blank'}
              rel="noreferrer"
            >
          <TwitterLogoIcon color="white" height={36} width={36} /></a>
          <a
              href="https://github.com/primitivefinance"
              target={'_blank'}
              rel="noreferrer"
            >
          <GitHubLogoIcon color="white" height={36} width={36} /></a>
          <a href="/discord" target={'_blank'} rel="noreferrer">
          <DiscordLogoIcon color="white" height={36} width={36} /></a>
        </div>
      </div>
    </div>
  </section >
}

export default function Home() {
  return (
    <Layout
      title={`Library - Primitive and RMM Protocol`}
      description="Comprehensive guides for Primitive and RMM protocol - Crypto Derivatives without Counterparties">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
      <Footer />
    </Layout>
  );
}
