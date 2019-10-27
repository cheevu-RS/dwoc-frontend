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
    display: 'Python',
    color: '#1A237E'
  },
  {
    lowerCase: 'django',
    display: 'Django',
    color: '#117214'
  },
  {
    lowerCase: 'android',
    display: 'Android',
    color: '#86755E'
  },
  {
    lowerCase: 'typescript',
    display: 'TypeScript',
    color: '#3E2723'
  },
  {
    lowerCase: 'javascript',
    display: 'JavaScript',
    color: '#077689'
  },
  {
    lowerCase: 'java',
    display: 'Java',
    color: '#263238'
  },
  {
    lowerCase: 'node',
    display: 'NodeJS',
    color: '#004D40'
  },
  {
    lowerCase: 'mongodb',
    display: 'MongoDB',
    color: '#75216F'
  },
  {
    lowerCase: 'go-graphql',
    display: 'Go/GraphQL',
    color: '#473F8C'
  },
  {
    lowerCase: 'react',
    display: 'React',
    color: 'goldenrod'
  },
  { lowerCase: 'c++', 
    display: 'C++', 
    color: '#000' 
  },
  {
    lowerCase: 'semantic ui',
    display: 'Semantic UI',
    color: '#C11958'
  },
  
];
function StackCard(props) {
  const classes = useStyles();

  let toolDisplay = stacks.filter(
    stack => stack.lowerCase === props.tool.toLowerCase()
  )[0];

  if (!toolDisplay) {
    toolDisplay = {
      display: props.tool.toLowerCase(),
      color: 'maroon'
    };
  }
  console.log(`${JSON.stringify(toolDisplay)} <= toolDisplay`);
  return (
    <div style={{ display: 'inline-block' }}>
      <span className={classes.stack} style={{ backgroundColor: toolDisplay.color }}>
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
