/*
 *
 * Dashboard
 *
 * -title
 * -constructor
 * -3 handlers
 * -store
 *
 *
 */

import React from 'react';
import Helmet from 'react-helmet';

export default class Dashboard extends React.PureComponent {

  constructor(props) {
    super(props);

    // this.state allows us to access all
    // state variables of an object class
    this.state = {
      title:"",
      body:"",
      image:"",
      preview:""
    }
  }

  // function definition of handleTitle
  //
  //  to pass it a parameter:
  //      parameter={this.handleTitle}
  //
  //  to have it run conintuously:
  //      {handleTitle()}
  //
  // the {} are to tell the compiler to read
  // text as javascript
  handleTitle = (e) => {

    this.setState({
      title:e.target.value
    })

    console.log(this.state.title);
  }

  handleBody = (e) => {
    this.setState({
    body:e.target.value
    })
  }

  handleImage = (e) => {
    e.PreventDefault();

    let reader = new FileReader();
    let file = e.target.files[0];

    reader.onloadend = () => {
      this.setState({
        image:file,
        preview:reader.result
      })
    }

    reader.readAsData(file);
  }

  storeArticle = () => {

    var data = new FormData();

    data.append("title",this.state.title);
    data.append("body",this.state.body);
    data.append("image",this.state.image);

    fetch("http://localhost:8000/api/storeArticle", {
      method:"post",
      body:data
    })

    .then(function(response){
      return response.json();
    })

    .then(function(json){
      if(json.success) {
        alert("Success");
      }
      else if(json.error){
        alert("Error");
      }
    })
  }

  render() {
    return (
      <div>
        <Helmet title="Dashboard" meta={[ { name: 'description', content: 'Description of Dashboard' }]}/>

        <input onChange={this.handleTitle} type ="text" placeholder="Title"/>

        <textarea  onChange={this.handleBody} placeholder="Body"></textarea>

        <input  onChange={this.handleImage} type="file"/>
          <img src="this.state.preview"/>
        <input onTouchTap={this.storeArticle} type="submit"/>

      </div>
    );
  }
}
