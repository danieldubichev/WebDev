import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import HelloWorld from './HelloWorld.jsx';
import Time from './Time.jsx';
import * as serviceWorker from './serviceWorker';
import CompsAndProps from './CompsAndProps.jsx';
import StateAndLifeCycle from './StateAndLifeCycle.jsx';
import EventHandling from './EventHandling.jsx';


ReactDOM.render(
  <React.StrictMode>
    
    {/*This is the JSX example file            -- Meant for Introducing JSX
    <HelloWorld/>*/}
    {/*This is the time ticking file           -- Meant for Rendering Elements
    <Time/>*/}
    {/*This file is for the components and props module           -- Meant for Components and Props*
    <CompsAndProps/>*/}
    {/*This file is intended for component isolation!    -- Meant for State & Lifecycles
    <StateAndLifeCycle/>*/}
    {/*Event Handling*/}
    <EventHandling/>
    
  </React.StrictMode>,
  
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
