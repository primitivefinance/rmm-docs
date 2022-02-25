import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const GettingStartedList = [
	{
		title: 'FAQ',
		href: '/faq/overview',
		description: (
			<>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.
			</>
		),
	},
	{
		title: 'Technical',
		href: '/technical/overview',
		description: (
			<>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.
			</>
		),
	},
	{
		title: 'Ecosystem',
		href: '/ecosystem/overview',
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
		href: '/faq/overview',
		description: (
			<>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.
			</>
		),
	},
	{
		title: 'Marmite',
		href: '/technical/overview',
		description: (
			<>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.
			</>
		),
	},
];

function Feature({ title, href, description }) {
	return (
		<div className={clsx('col col--4')} >
			<div className={styles.stuff}>
				<a href={href}>
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
