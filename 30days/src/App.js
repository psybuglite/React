import React from 'react';
//import './App.css';
import Content from './Content';
import Header from './Header';
import activities from './Activities';
import Footer from './Footer';


class App extends React.Component {
  render() { 
    return (
      <div className="notificationsFrame">
          <div className="panel">
              <Header title="Timeline" />
              <Content activities={activities} />
              <Footer />
          </div>
      </div>
    ) 
  } 
}

export default App;
