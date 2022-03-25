import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';
import HomepageFeatures from '../components/HomepageFeatures';

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

export default function Home() {
  return (
    <Layout
      title={`Library - Primitive and RMM Protocol`}
      description="Comprehensive manual for Primitive and RMM protocol - Crypto Derivatives without Oracles">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
