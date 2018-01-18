import React from 'react';
import ActivityItem from './Activity'
import activities from './Activities'

class Content extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            activities: []
        }
    }

    componentWillReceiveProps(nextProps) {
        // Check to see if the requestRefresh prop has changed
        if (nextProps.requestRefresh !== this.props.requestRefresh) {
            this.setState({ loading: true }, this.updateData);
        }
    }

    componentWillMount() {
        this.setState({ activities: activities });
    }


    render() {
        const { activities } = this.props
        return ( <div className = "content" >
            <div className = "line" > </div> { /* Timeline item */ } {
                activities.map((activity) => ( 
                  <ActivityItem activity={ activity } />
                ))
            } </div>
        )
    }
}

export default Content;