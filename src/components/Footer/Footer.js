import React from 'react';
import {
    Grid,
    Typography,
    CssBaseline,
    makeStyles,
} from '@material-ui/core'

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        // position: `absolute`,
        bottom: 0,
        width: `100%`
    },
    footer: {
        padding: theme.spacing(2),
        marginTop: 'auto',
        backgroundColor: '#282c34',
        display: 'flex',
    },
    footerHead: {
        fontWeight: '500',
    },
    footerSection: {
        padding: 10,
        textAlign: `center`,
    },
    footerLinksWrapper: {
        listStyle: 'none',
        paddingLeft: 0,
        width: `100%`,
    },
    footerLinksItem: {
        padding: 5,
        paddingLeft: 0,
    },
    footerLinks: {
        color: `rgba(255, 255, 255, 0.7)`,
        '&:hover': {
            color: `rgba(255, 255, 255, 0.7)`,
            textDecoration: 'none',
        }
    }
}));

export default function Footer() {
    const classes = useStyles();
    const sections = [
        {
            heading: 'Community',
            items: [
                {title: 'Github', link: 'https://www.github.com'},
                {title: 'Twitter', link: 'https://twitter.com'},
            ]
        },
        {
            heading: 'Resources',
            items: [
                {title: 'Github', link: 'https://www.github.com'},
                {title: 'Twitter', link: 'https://www.twitter.com'},
            ]
        },
    ]
    return (
    <div className={classes.root}>
        <hr style={{
          border: 'none',
          height: 2,
          margin: 0,
          marginTop: 10,
          flexShrink: 0,
          backgroundColor: `rgba(255, 255, 255, 0.12)`,
        }}/>
        <CssBaseline />
        <footer className={classes.footer}>
            {
                sections.map((item, index) => (
                    <Grid className={classes.footerSection} container key={index}>
                        <Grid item xs={12}>
                            <Typography className={classes.footerHead} variantMapping={{body1: 'h2'}} variant="body1" gutterBottom>{item.heading}</Typography>
                        </Grid>
                        <ul className={classes.footerLinksWrapper}>
                        {item.items.map((item1, index1) => (
                            <li key={index1} className={classes.footerLinksItem}><a className={classes.footerLinks} href={item1.link}><Typography variantMapping={{body2: 'h3'}} variant="body2">{item1.title}</Typography></a></li>
                        ))}
                        </ul>
                    </Grid>
                ))
            }
        </footer>
    </div>
    );
}