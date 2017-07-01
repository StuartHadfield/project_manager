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
        title: 'Foo Project',
        category: 'Web Development'
      },
      {
        title: 'Bar App',
        category: 'Mobile Development'
      },
      {
        title: 'Personal Website',
        category: 'Blogs'
      }
    ]});
  }

  handleAddProject(project){
    console.log(project)
    let projects = this.state.projects;
    projects.push(project);
    this.setState({projects:projects});
  }

  render() {
    return (
      <div className="Project Manager">
        <AddProject addProject={this.handleAddProject.bind(this)}/>
        <Projects projects={this.state.projects} />
      </div>
    );
  }
}

export default App;
