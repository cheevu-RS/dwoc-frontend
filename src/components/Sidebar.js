import React from 'react'
import {
    Drawer,
    List,
    Divider,
    ListItem,
    ListItemText,
    makeStyles
} from '@material-ui/core/'

const drawerWidth = 200;

const useStyles = makeStyles(theme => ({
    drawer: {
        flexShrink: 0,
    },
    drawerPaper: {
        width: drawerWidth,
    },
}))

export default function Sidebar({open, tabs, drawerWidth}) {
    const classes = useStyles();
    return (
        <Drawer
        className={classes.drawer}
        style={{width: `${drawerWidth}px`}}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
            paper: classes.drawerPaper,
        }}
        >
            <Divider />
                <List>
                {tabs.map((tab, index) => (
                    <ListItem button key={index}>
                        <ListItemText primary={tab.name} />
                    </ListItem>
                ))}
                </List>
            <Divider />
        </Drawer>
    )
}