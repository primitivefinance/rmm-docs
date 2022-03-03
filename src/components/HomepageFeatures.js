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

function Feature({ title, href, target, description }) {
	return (
		<div className={clsx('col col--4')} >
			<div className={styles.stuff}>
				<a href={href} target={target}>
					<h3>{title}</h3>
					<p>{description}</p>
				</a>
			</div>
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
