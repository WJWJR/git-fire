import React, { Component } from 'react';
import base from './rebase';
import logo from './logo.svg';
import './App.css';

window.base = base;

class App extends Component {

  constructor () {
    super();
    this.state = {
      user: {},
      users: [],
      projects: []

    }

  }

  componentDidMount(){
    base.auth().onAuthStateChanged(user => {
      if (user) {
        this.getUserListsSeen()
        this.getProjectListsSeen()
      }
    })

    // this.getUserListsSeen()
  }

  login () {
    var authHandler = (error, data) => {
      // console.log('error', error);
      // console.log('user', data.user);
      this.setState({
        user: data.user
      })
    }
    //basic
    base.authWithOAuthPopup('google', authHandler);

  }
  logout () {
    base.unauth()
    this.setState({
      user: {}
    })
  }

  loginOrLogoutButton (){
    if (this.state.user.uid) {
      return <button
        onClick={this.logout.bind(this)}>Logout</button>
      } else {
        return <button
          onClick={this.login.bind(this)}>Login</button>

      }
    }

    addProjectToFirebase(event){
      event.preventDefault();
      const project = this.projectName.value;
      const name = this.userName.value;
      if (project){
        console.log(project);
        base.push(`/users/${this.state.user.displayName}/projects`,
        {data: {name: project}})
        // console.log(null);
      } else {
          console.log(name);
          base.push(`/users/${this.state.user.displayName}/userName`,
          {data: name})
        }
      }

    getUserListsSeen(){
    base.fetch(`/users/${this.state.user.displayName}/userName`, {
      context: this,
      asArray: true,
      then(data){
        console.log(data);
        this.setState ({users:data})
      }
    });
  }

  getProjectListsSeen(){
  base.fetch(`/users/${this.state.user.displayName}/projects`, {
    context: this,
    asArray: true,
    then(data){
      console.log(data);
      this.setState ({projects:data})
    }
  });
  }

  formIfLoggedIn () {
    if (this.state.user.uid) {
      return (
        <form onSubmit={this.addProjectToFirebase.bind(this)}>
          <input
            placeholder="Faav GitHub Projects"
            ref={element => this.projectName = element}/>
          <input
            placeholder="Faav GitHub User"
            ref={element => this.userName = element}/>
          <button>Add to Firebase</button>
        </form>
      )
    }
  }

  displayLists(){
    if(this.state.user.uid){
      console.log(this.state.users)
      return(
        <div>
          <div>
             {this.state.users.map((arr,index) => {
               return(
                 <li key={index}>{arr}</li>
              )}
            )}
          </div>

          <div>
             {this.state.projects.map((project,index) => {
               return(
                 <li key={index}>{project.name}</li>
              )}
            )}
          </div>
      </div>



      )

    }

  }


  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          {this.loginOrLogoutButton()}
        </p>
          {this.formIfLoggedIn()}

          {this.displayLists()}

      </div>
    );
  }
}

export default App;
