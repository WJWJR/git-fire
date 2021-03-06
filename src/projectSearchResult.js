import React, { Component } from 'react';

class ProjectSearchResult extends Component {

  handleClick (project) {
    if (this.props.alreadyInFirebase) {
      this.props.removeProject(project)
  } else {
      this.props.addProject(project)
  }

  }

  addOrRemoveButton(project ){
    if (this.props.alreadyInFirebase) {
      return <button onClick={this.handleClick.bind(this, project)}>Remove from Firebase</button>
    } else {
      return <button onClick={this.handleClick.bind(this, project)}>Add to Firebase</button>
    }
  }

  render () {
    const project = this.props.project;
    console.log(project);
    return (
      <li>
        <a href={project.html_url} target="_blank"><strong style={{cursor: 'pointer'}}>{project.name}</strong></a>
        <p> {project.stargazers_count}</p>
        <p style={{color: 'blue'}}>{project.description}</p>
        {this.addOrRemoveButton(project)}
        {/* <button onClick={this.handleClick.bind(this, project)}>Add to Firebase</button> */}
      </li>
    )
  }
}

export default ProjectSearchResult;
