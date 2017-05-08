import React, { Component } from 'react';
import axios from 'axios';

class DetailedPageFromFirebase extends Component {
 constructor () {
   super();
   this.state = {}
 }

componentDidMount() {
  axios.get(`https://api.github.com/repositories`).then(response => this.setState({}))
}

  render() {
    console.log()
      axios.get(`https://api.github.com/repositories`)
    return(

      <div>
        <h1>Firebase Pull Works</h1>
        {this.props.project.map((obj,index)=>{
          return(
            <li key={index}>
              <p>{obj.name}</p>
              <p>{obj.key}</p>
              <p>{obj.id}</p>
            </li>
          )
        })
      }


      </div>
    )
  }
}

export default DetailedPageFromFirebase;
