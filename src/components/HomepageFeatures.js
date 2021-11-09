import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
	{
		title: 'Concepts',
		Svg: require('../../static/img/undraw_docusaurus_mountain.svg').default,
		href: '/concepts/automated-market-makers',
		description: (
			<>
				Concepts description
			</>
		),
	},
	{
		title: 'Core Engine',
		Svg: require('../../static/img/undraw_docusaurus_tree.svg').default,
		href: '/core-engine/periphery/README',
		description: (
			<>
				Core description
			</>
		),
	},
	{
		title: 'Guides',
		href: '/guides/using-the-app/README',
		Svg: require('../../static/img/undraw_docusaurus_react.svg').default,
		description: (
			<>
				Guide description
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
