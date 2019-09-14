import React, {useState} from 'react'
import {
    AppBar,
    Toolbar,
    Typography,
    Button,
    makeStyles,
    ListItemText
} from '@material-ui/core'
import Sidebar from '../components/Sidebar'
import MenuIcon from '@material-ui/icons/Menu';

const minWidth = 500;

const useStyles = makeStyles(theme => ({
    title: {...theme.typography.h6},
    button: {
        marginLeft: `auto`,
    },
    githubBtn: {
        fontSize: `3em`,
        marginLeft: 16
    },
    drawerHeader: {
        display: 'flex',
        alignItems: 'center',
        padding: '0 8px',
        justifyContent: 'flex-end',
        ...theme.mixins.toolbar,
    },
}))

export default function Navbar() {
    const styles = useStyles();
    const [open, setOpen] = useState(false)
    const [drawerWidth, setDrawerWidth] = useState(0);
    const tabs = [
        {name: 'Home'},
        {name: 'Account'},
        {name: 'History'},
    ]
    const handleToggle = evt => {
        setOpen(prevState => !prevState)
        open ? setDrawerWidth(0) : setDrawerWidth(200)
    }
    const handleClick = evt => {
        alert('Redirecting to login...')
    }
    return (
        <AppBar
        position='fixed' >
            <Toolbar>
                { window.innerWidth < minWidth && 
                    <div className={styles.drawerHeader}>
                        <Sidebar open={open} drawerWidth={drawerWidth} tabs={tabs}/>
                        <MenuIcon onClick={handleToggle} />
                    </div>
                }
                <Typography variant="h1" className={styles.title}>
                    DWOC
                </Typography>
                { window.innerWidth > minWidth && 
                <div className={styles.button}>
                    {tabs.map((tab, index) => (
                        <Button color="inherit" className={styles.button} onClick={handleClick} key={index}>
                            <ListItemText primary={tab.name} />
                        </Button>
                    ))}
                    <Button color="inherit" onClick={handleClick}>
                        Login using <i className={`devicon-github-plain ` + styles.githubBtn}></i>
                    </Button>
                </div>
                }
                {window.innerWidth < minWidth && 
                <Button color="inherit" className={styles.button} onClick={handleClick}>
                    Login using <i className={`devicon-github-plain ` + styles.githubBtn}></i>
                </Button>
                }
            </Toolbar>
        </AppBar>
    )
}
