import React, { Component } from 'react';
import Projects from './components/Projects'
import AddProject from './components/AddProject'
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      projects: []
    }
  }

  componentWillMount(){
    this.setState({projects: [
      {
        title: 'A',
        category: 'a'
      },
      {
        title: 'B',
        category: 'b'
      },
      {
        title: 'C',
        category: 'c'
      }
    ]});
  }

  render() {
    return (
      <div className="Project Manager">
        <AddProject />
        <Projects projects={this.state.projects} />
      </div>
    );
  }
}

export default App;
