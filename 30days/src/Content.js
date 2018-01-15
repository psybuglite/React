import React, { Component } from 'react';
import ActivityItem from './Activity'
import activities from './Activities'



class Content extends React.Component { 

  constructor(props) {
    super(props);
      this.state = {
      activities: []
    }
  }

  componentWillMount() {
    this.setState({activities: activities});
  }


  render() { const {activities} = this.props; {/*ES6 Destructuring*/} 
    return (
      <div className="content">
          <div className="line"></div>
          {/* Timeline item */} 
          {activities.map((activity) => (
            <ActivityItem
            activity={activity} />
          ))}
      </div>
    )
  }
}

export default Content;