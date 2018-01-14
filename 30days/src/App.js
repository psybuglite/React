import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Content from './Content';
import Header from './Header';
import activities from './Activities'


class App extends React.Component {
  render() { 
    return (
      <div className="notificationsFrame">
          <div className="panel">
              <Header title="Head" />
              <Header title="Shoulder" />
              <Header title="Knees" />
              <Header title="Toes" />
              <Content activities={activities} />
          </div>
      </div>
    ) 
  } 
}

export default App;
