import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';
import { ArrowRightIcon } from '@radix-ui/react-icons';

const Highlight = [
  {
    title: 'RMM Primer',
    step: '01',
    href: 'https://primitive.mirror.xyz/Audtl29HY_rnhN4E2LwnP7-zjDcDGAyXZ4h3QpDeajg',
    target: '_blank',
    description: (
      <>
        Friendly guide to using Primitive.
      </>
    ),
  },
];

const Research = [
  {
    title: 'Primitive Whitepaper',
    step: '01',
    href: 'https://primitive.xyz/whitepaper',
    target: '_blank',
    description: (
      <>
        Formal investigation of the theory and implementation of Primitive Replicating Market Makers.
      </>
    ),
  },
];

const GettingStartedList = [
  {
    title: 'FAQ',
    step: '01',
    href: '/faq/introduction',
    target: '_self',
    description: (
      <>
        Answers to common questions like "What is Primitive?".
      </>
    ),
  },
  {
    title: 'Technical',
    step: '02',
    href: '/technical/smart-contracts/overview',
    target: '_self',
    description: (
      <>
        Specifications and guides for developers who want to build, integrate, or use Primitive.
      </>
    ),
  },
  {
    title: 'Ecosystem',
    step: '03',
    href: '/ecosystem/overview',
    target: '_self',
    description: (
      <>
        External knowledge and resources related to Primitive.
      </>
    ),
  },
];

const ToolsList = [
  {
    title: 'Dodoc',
    href: 'https://github.com/primitivefinance/primitive-dodoc',
    target: '_blank',
    description: (
      <>
        Zero-config Hardhat plugin to generate documentation for all your Solidity contracts.
      </>
    ),
  },
  {
    title: 'Marmite',
    href: 'https://github.com/primitivefinance/hardhat-marmite',
    target: '_blank',
    description: (
      <>
        Hassle-free Hardhat plugin to compare gas cost among different Solidity code snippets.
      </>
    ),
  },
];

const Repos = [
  {
    name: 'rmm-core',
    href: 'https://github.com/primitivefinance/rmm-core',
  },
  {
    name: 'rmm-manager',
    href: 'https://github.com/primitivefinance/rmm-manager',
  },
  {
    name: 'rmm-ethers',
    href: 'https://github.com/primitivefinance/rmm-ethers',
  },
]

function Feature({ title, href, target, description, step }) {
  return (
    <div className={clsx('col ')} style={{ marginBottom: '8px' }} >
      <a className={styles.homelink} href={href} target={target}>
        <div className={styles.stuff}>
          {step ? <h2>{step}</h2> : null}
          <h3>{title} <ArrowRightIcon style={{ paddingLeft: '0.25rem',alignItems: 'center'}} width={24} height={24}/></h3> 
          <p>{description}</p>
        </div>
      </a>
    </div>
  );
}

function Repo({ name, href }) {
  return (
    <div className={clsx('col col--4')} style={{ marginBottom: '8px' }} >
      <a className={styles.homelink} href={href} target="_blank">
        <div className={styles.stuff}>
          <div className={styles.repo}>
            <img className={styles.github} src="/img/github-mark.svg" alt="Github" />
            <h4>{name}</h4>
          </div>
        </div>
      </a>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className={styles.section}>
          <h2 className={styles.title}>
            Research
          </h2>
          <div className="row">
            {Research.map((props, idx) => (
              <Feature key={idx} {...props} />
            ))}
          </div>
        </div>
        <div className={styles.section}>
          <h2 className={styles.title}>
            Guides
          </h2>
          <div className="row">
            {Highlight.map((props, idx) => (
              <Feature key={idx} {...props} />
            ))}
          </div>
        </div>
        <div className={styles.section}>
          <h2 className={styles.title}>
            Getting Started
          </h2>
          <div className="row">
            {GettingStartedList.map((props, idx) => (
              <Feature key={idx} {...props} />
            ))}
          </div>
        </div>
        <div className={styles.section}>
          <h2 className={styles.title}>
            Source Code
          </h2>
          <div className="row">
            {Repos.map((props, idx) => (
              <Repo key={idx} {...props} />
            ))}
          </div>
        </div>
        <div className={styles.section}>
          <h2 className={styles.title}>
            Tools
          </h2>
          <div className="row">
            {ToolsList.map((props, idx) => (
              <Feature key={idx} {...props} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
