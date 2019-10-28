import React from 'react';
import { CssBaseline, makeStyles } from '@material-ui/core';
import FacebookIcon from '@material-ui/icons/Facebook';

const useStyles = makeStyles((theme) => ({
	root: {
		display: 'flex',
		flexDirection: 'column',
		bottom: 0,
		width: `100%`
	},
	footer: {
		padding: theme.spacing(2),
		marginTop: 'auto',
		backgroundColor: '#282c34',
		display: 'block',
		margin: 'auto'
	},
	footerHead: {
		fontWeight: '500'
	},
	footerSection: {
		padding: 10,
		textAlign: `center`
	},
	footerLinksWrapper: {
		listStyle: 'none',
		paddingLeft: 0,
		width: `100%`
	},
	footerLinksItem: {
		padding: 5,
		paddingLeft: 0
	},
	footerLinks: {
		'&:hover': {
			color: `rgba(255, 255, 255, 0.7)`
		}
	}
}));

export default function Footer() {
	const classes = useStyles();
	const sections = [
		{
			heading: 'Community',
			items: [
				{ title: 'Github', link: 'https://www.github.com' },
				{ title: 'Twitter', link: 'https://twitter.com' }
			]
		},
		{
			heading: 'Resources',
			items: [
				{ title: 'Github', link: 'https://www.github.com' },
				{ title: 'Twitter', link: 'https://www.twitter.com' }
			]
		}
	];
	return (
		<div className={classes.root}>
			<hr
				style={{
					border: 'none',
					height: 2,
					margin: 0,
					marginTop: 10,
					flexShrink: 0,
					backgroundColor: `rgba(255, 255, 255, 0.12)`
				}}
			/>
			<CssBaseline />
			<footer className={classes.footer}>
				<div className={classes.footerLinksWrapper}>
					<a className={classes.footerLinks} href={'https://www.facebook.com/delta.nit.trichy/'}>
						<FacebookIcon style={{ color: '#3b5998' }} className={classes.footerLinkIcon} />
					</a>
				</div>
			</footer>
			<div style={{ display: 'block', margin: 'auto', textAlign: 'center', fontSize: '20px' }}>
				Made with <span style={{ color: 'blue' }} role='img' aria-label='ily'>💙</span> by
				<a href="https://delta.nitt.edu" style={{ color: '#5CDB95' }}>
					{' '}
					Delta Force{' '}
				</a>
			</div>
		</div>
	);
}
