import React from 'react';
import {
  VerticalTimeline,
  VerticalTimelineElement
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

// Stype imports
import WebFont from 'webfontloader';
import { header2, timeline } from './../../DwocStyles';
import { makeStyles } from '@material-ui/core/styles';
import { QueryRenderer } from 'react-relay';
import graphql from 'babel-plugin-relay/macro';

WebFont.load({
  google: {
    families: [header2.fontFamily]
  }
});

const useStyles = makeStyles(theme => ({
  header2: header2,
  timeline: timeline
}));

let colors = [
  'linear-gradient(#285467, #00818A)',
  'linear-gradient(#00818A, #379683)',
  'linear-gradient(#379683, #0CBE9E)',
  'linear-gradient(#0CBE9E, #5CDB95)',
  'linear-gradient(to top, #0CBE9E, #5CDB95)',
  'linear-gradient(to top, #379683, #0CBE9E)',
  'linear-gradient(to top, #00818A, #379683)',
  'linear-gradient(to top, #285467, #00818A)'
];
let color = [
  '#285467',
  '#00818A',
  '#379683',
  '#0CBE9E',
  '#5CDB95',
  '#0CBE9E',
  '#379683',
  '#00818A'
];
const len = colors.length;
const months=["January","February","March","April","May","June","July","August","September","October","Nobember","December"];

const environment = require('../../Environment').environment;
function formatDate(date) {
  let d = new Date(date);
  let options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }
  return d.toLocaleDateString("en-US", options);
}

export default function HorizontalNonLinearAlternativeLabelStepper(props) {
  const classes = useStyles();
  let i = 0;

  return (
    <div className={classes.timeline}>
      <div style={{ paddingTop: '120px' }} id="timeline">
        <h2 className={classes.header2}>Timeline </h2>
        <VerticalTimeline>
          <QueryRenderer
            environment={environment}
            query={graphql`
              query TimelineQuery {
                events {
                  id
                  date
                  eventDesc
                }
              }
            `}
            variables={{}}
            render={({ error, props }) => {
              if (error) {
                console.log(`${error} <= error Relay OrgCards`);
                return <div>Error!</div>;
              }
              if (props && props.events) {
                return (
                  <div>
                    {props.events.map(element => {
                      let timelineElement = (
                        <VerticalTimelineElement
                          key={element.id}
                          className="vertical-timeline-element--education"
                          contentStyle={{
                            color: '#fff',
                            backgroundImage: colors[i % len]
                          }}
                          contentArrowStyle={{
                            borderRight: `7px solid ${color[i % len]}`
                          }}
                          date={formatDate(element.date)}
                          iconStyle={{
                            background: color[i++ % len],
                            color: '#fff'
                          }}
                        >
                          <h3 className="vertical-timeline-element-title">
                            {element.eventDesc}
                          </h3>
                          <p>Para 2</p>
                        </VerticalTimelineElement>
                      );
                      return timelineElement;
                    })}
                  </div>
                );
              } else {
                return <h1>...</h1>;
              }
            }}
          />
        </VerticalTimeline>
        <div style={{ height: '20px' }}></div>
      </div>
    </div>
  );
}
