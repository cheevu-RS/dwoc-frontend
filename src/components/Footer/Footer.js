import React from 'react'
import { footer } from './../../DwocStyles';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles(theme => ({
    footer: footer
  }));

export default function Footer(){

    const classes = useStyles();

    return (
        <div className={classes.footer}>
            <div style={{display: 'block', margin: 'auto', textAlign: 'center', fontSize: '20px'}}>
            Made with <span style={{color: 'red'}}>&hearts;</span> by <a href="https://delta.nitt.edu" style={{ color: '#5CDB95' }}>
                Delta Force
              </a>
            </div>
        </div>
    );
}