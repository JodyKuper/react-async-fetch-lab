// create your App component hered
import React, { Component } from 'react'

export default class App extends Component {
    sate = {
        peopleInSpace: []
    }

    componentDidMount () {
      fetch('http://api.open-notify.org/astros.json')
      .then(res => res.json())
      .then(data=> [
          this.setState({
              peopleInSpace: data.people
          })
      ]) 
    }


    render() {
        
        return (
            <div>
              
            </div>
        )
    }
}
