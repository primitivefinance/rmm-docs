import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const GettingStartedList = [
	{
		title: 'FAQ',
		href: '/faq/overview',
		target: '_self',
		description: (
			<>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.
			</>
		),
	},
	{
		title: 'Technical',
		href: '/technical/overview',
		target: '_self',
		description: (
			<>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.
			</>
		),
	},
	{
		title: 'Ecosystem',
		href: '/ecosystem/overview',
		target: '_self',
		description: (
			<>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.
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

function Feature({ title, href, target, description }) {
	return (
		<div className={clsx('col col--4')} >
			<a className={styles.homelink} href={href} target={target}>
				<div className={styles.stuff}>
					<h3>{title}</h3>
					<p>{description}</p>
				</div>
			</a>
		</div>
	);
}

function Repo({ name, href }) {
	return (
		<div className={clsx('col col--4')} >
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
						Repos
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
