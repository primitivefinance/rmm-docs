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
      <header className={styles.heroBanner}>
      </header>
    </div>
  );
}

export default function Home() {
  return (
    <Layout
      title={`Documentation - Primitive and RMM Protocol`}
      description="Comprehensive manual for Primitive and RMM protocol - Crypto Derivatives without Oracles">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
