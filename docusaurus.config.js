// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

const math = require('remark-math');
const katex = require('rehype-katex');

/** @type {import('@docusaurus/types').Config} */
const config = {
	title: 'Primitive',
	tagline: 'Documentation and Guides',
	url: 'https://docs.primitive.finanace',
	baseUrl: '/',
	onBrokenLinks: 'throw',
	onBrokenMarkdownLinks: 'warn',
	favicon: 'img/primitive-logo.png',
	organizationName: 'PrimitiveFinance', // Usually your GitHub org/user name.
	projectName: 'Primitive RMM Protocol Docs', // Usually your repo name.

	presets: [
		[
			'@docusaurus/preset-classic',
			/** @type {import('@docusaurus/preset-classic').Options} */
			({
				docs: {
					path: 'docs/faq',
					routeBasePath: 'faq/',
					sidebarPath: require.resolve('./sidebars.js'),
					remarkPlugins: [math],
					rehypePlugins: [katex],
				},
				blog: {
					showReadingTime: true,
					// Please change this to your repo.
					editUrl:
						'https://github.com/primitivefinance/rmm-docs',
				},
				theme: {
					customCss: require.resolve('./src/css/custom.css'),
				},
			}),
		],
	],
	plugins: [
		[
			"@docusaurus/plugin-content-docs", {
				id: 'technical',
				path: 'docs/technical',
				routeBasePath: 'technical/',
				sidebarPath: require.resolve('./sidebars.js')
			}
		],
		[
			"@docusaurus/plugin-content-docs", {
				id: 'ecosystem',
				path: 'docs/ecosystem',
				routeBasePath: 'ecosystem/',
				sidebarPath: require.resolve('./sidebars.js')
			}
		],
	],
	stylesheets: [
		{
			href: "https://cdn.jsdelivr.net/npm/katex@0.13.11/dist/katex.min.css",
			integrity: "sha384-Um5gpz1odJg5Z4HAmzPtgZKdTBHZdw8S29IecapCSB31ligYPhHQZMIlWLYQGVoc",
			crossorigin: "anonymous",
		},
	],
	themeConfig:
		/** @type {import('@docusaurus/preset-classic').ThemeConfig} */
		({
			hideableSidebar: true,
			/*
			announcementBar: {
				id: 'launch',
				content:
					'We are looking to revamp our docs, please fill <a target="_blank" rel="noopener noreferrer" href="#">this survey</a>',
				backgroundColor: '#fafbfc',
				textColor: '#091E42',
				isCloseable: true,
			},
			*/
			navbar: {
				title: 'Primitive Docs',
				logo: {
					alt: 'Primitive Logo',
					src: 'img/primitive-logo.png',
				},
				items: [
					{
						type: 'doc',
						docId: 'introduction',
						position: 'left',
						label: 'FAQ',
					},
					{
						to: '/technical/smart-contracts/overview',
						label: 'Technical',
						position: 'left',
					},
					{
						label: 'Ecosystem',
						to: '/ecosystem/overview',
						position: 'left',
					},
				],
			},
			footer: {
				style: 'dark',
				links: [
					{
						title: 'Developers',
						items: [
							{
								label: 'Whitepaper',
								to: 'https://primitive.finance/whitepaper-rmm-01.pdf',
							},
							{
								label: 'GitHub',
								href: 'https://github.com/primitivefinance/',
							},
						],
					},
					{
						title: 'Community',
						items: [
							{
								label: 'Discord',
								href: 'https://discord.gg/primitive',
							},
							{
								label: 'Twitter',
								href: 'https://twitter.com/PrimitiveFi',
							},
						],
					},
					{
						title: 'Products',
						items: [
							{
								label: 'App',
								href: 'https://app.primitive.finance/',
							},
						],
					},
				],
				copyright: `Copyright © ${new Date().getFullYear()} Primitive.`,
			},
			prism: {
				theme: lightCodeTheme,
				darkTheme: darkCodeTheme,
				additionalLanguages: ['typescript', 'solidity'],
			},
		}),
};

module.exports = config;
