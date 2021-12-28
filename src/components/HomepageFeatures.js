import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
	{
		title: 'FAQ',
		Svg: require('../../static/img/undraw_docusaurus_mountain.svg').default,
		href: '/faq/overview',
		description: (
			<>
				Frequently Asked Questions
			</>
		),
	},
	{
		title: 'Technical',
		Svg: require('../../static/img/undraw_docusaurus_tree.svg').default,
		href: '/technical/overview',
		description: (
			<>
				Technical Resources
			</>
		),
	},
	{
		title: 'Ecosystem',
		href: '/ecosystem/overview',
		Svg: require('../../static/img/undraw_docusaurus_react.svg').default,
		description: (
			<>
				Community Resources
			</>
		),
	},
];

function Feature({ Svg, title, href, description }) {
	return (
		<div className={clsx('col col--4')} >
			<div className="text--center">
				<a href={href}>
					<Svg className={styles.featureSvg} alt={title} />
				</a>
			</div>
			<div className="text--center padding-horiz--md">
				<h3>{title}</h3>
				<p>{description}</p>
			</div>
		</div>
	);
}

export default function HomepageFeatures() {
	return (
		<section className={styles.features}>
			<div className="container">
				<div className="row">
					{FeatureList.map((props, idx) => (
						<Feature key={idx} {...props} />
					))}
				</div>
			</div>
		</section>
	);
}
