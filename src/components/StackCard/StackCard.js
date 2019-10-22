import React from 'react';
//import { colours } from '../../DwocStyles';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  stack: {
    fontSize: 13,
    borderRadius: 5,
    padding: '4px 7px',
    margin: '3px 8px 0px 0',
    color: '#ffffff'
  }
}));
const stacks = [
  {
    lowerCase: 'python',
    display: 'Pyhon',
    color: '#1A237E'
  },
  {
    lowerCase: 'typescript',
    display: 'TypeScript',
    color: '#3E2723'
  },
  {
    lowerCase: 'javascript',
    display: 'JavaScript',
    color: '#263238'
  },
  {
    lowerCase: 'react',
    display: 'React',
    color: 'goldenrod'
  },
  { lowerCase: 'c++', display: 'C++', color: '#000' }
];
function StackCard(props) {
  const classes = useStyles();

  let toolDisplay = stacks.filter(
    stack => stack.lowerCase === props.tool.toLowerCase()
  )[0];

  console.log(`${JSON.stringify(toolDisplay)} <= toolDisplay`);
  return (
    <div style={{ display: 'inline-block' }}>
      <span
        className={classes.stack}
        style={{ backgroundColor: toolDisplay.color }}
      >
        {toolDisplay.display}
      </span>
    </div>
  );
}

{
  /* {props.stack.map(tool => {
            if (tool.toLowerCase() === 'c++') {
              return (
                <span
                  className={classes.stack}
                  style={{ backgroundColor: colours.stack.cpp }}
                >
                  {' '}
                  C++{' '}
                </span>
              );
            } else if (tool.toLowerCase() === 'python') {
              return (
                <span
                  className={classes.stack}
                  style={{ backgroundColor: colours.stack.python }}
                >
                  {' '}
                  Python{' '}
                </span>
              );
            } else if (tool.toLowerCase() === 'react') {
              return (
                <span
                  className={classes.stack}
                  style={{ backgroundColor: colours.stack.React }}
                >
                  {' '}
                  React{' '}
                </span>
              );
            } else if (tool.toLowerCase() === 'typescript') {
              return (
                <span
                  className={classes.stack}
                  style={{ backgroundColor: colours.stack.TypeScript }}
                >
                  {' '}
                  TypeScript{' '}
                </span>
              );
            } else if (tool.toLowerCase() === 'javascript') {
              return (
                <span
                  className={classes.stack}
                  style={{ backgroundColor: colours.stack.JavaScript }}
                >
                  {' '}
                  JavaScript{' '}
                </span>
              );
            }
            return <></>;
          })} */
}
export default StackCard;
