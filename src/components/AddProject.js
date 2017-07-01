import React, { Component } from 'react';
import ProjectItem from './ProjectItem'

class AddProject extends Component {
  render() {
    return (
      <div>
        <h3>Add Project</h3>
        <form>
          <div>
            <label>Title</label><br />
            <input type="text" ref="title" />
          </div>
          <div>
            <label>Category</label><br />
            <select ref="category" >

            </select>
          </div>
        </form>
      </div>
    );
  }
}

export default AddProject;
