/*
 *
 * About
 *
 */

import React from 'react';
import Helmet from 'react-helmet';
import ArticleStyle from 'components/ArticleStyle';
import {Link} from "react-router";
export default class About extends React.PureComponent {

constructor(props){
    super(props);
    this.state = {
      about:""
    }
  }

  componentWillMount() {
    fetch("http://localhost:8000/api/showArticle/"+this.props.params.id)
    .then(function(response){
      return response.json();

    })
    .then(function(json){
      this.setState({
        about:json
      })
    }.bind(this))
  }

  render() {

    const backgroundStyle = {
     /*background: "  #F5F5F5",*/
      display: "flex",
      flexDirection: "column",
      width: "100%",
      background: "#408193"
    }


  const backgroundContentBox = {
      margin: "0 auto",
      marginTop: "3%",
      /*paddingBottom: "13%",*/
      /*display: "flex",
      flexDirection: "column",*/
      background: "#F5F5F5",
    width: "90%"

    }

    const titleBox = {
      marginTop: "10%",
      marginRight: "20%",
      marginLeft: "20%",
      paddingTop: "1.5%",
      paddingBottom: "1.5%",
      borderTop: "2px solid gray",
      borderBottom: "2px solid gray"
    }

    const titleStyle = {
      fontFamily: "Source Sans Pro",
      textAlign: "center",
      fontColor: "#0C090A",
      fontSize: "2.1em",
      fontStyle: "light",
      fontWeight: "400",
      textTransform: "uppercase",
      letterSpacing: "6px",

    }

    const firstStyle = {
      display: "flex",
      flexDirection: "row",
      maxWidth: "1000px",
      margin: "0 auto",
      justifyContent: "space-around"
    }

    const imageStyle = {
      marginTop: "5%",
      width: "20%",
      height: "20%"
    }

    const subheaderStyle = {

      display: "flex",
      flexDirection: "column",
      marginTop: "4%",
      paddingLeft: "35%",

    }

    const subheaderOne = {
      fontFamily: "Droid Serif",
      fontSize: "1.3em",
      fontWeight: "bold",
      marginBottom: "3%",
      textTransform: "uppercase",
    }

    const contentOne = {
      width: "85%",
      borderTop: "1px solid gray",
      paddingTop: "3%"
    }


    return (
      <div>
          <Helmet title="About" meta={[ { name: 'description', content: 'Description of About' }]}/>
          <header>
            <ArticleStyle/>
          </header>

      <div style={backgroundStyle}>

        <div style={backgroundContentBox}>
          <main>
            <body>
              <div style={titleBox}>
                <div style = {titleStyle}>
                  About us
                </div>
              </div>
              <div style={firstStyle}>
                <img style={imageStyle} src="https://68.media.tumblr.com/21eed63e017188a2b5546c68063c370c/tumblr_ook5rge8VR1ubdqpuo1_250.jpg" alt=""/>
                <div style={subheaderStyle}>
                  <div style={subheaderOne}> For the Love of Celluloid</div>

                  <div style={contentOne}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                  </div>
                </div>
              </div>

                <div style={firstStyle}>
                <img style={imageStyle} src="https://68.media.tumblr.com/26511dfa3b6cb8273b945f9cab951ee9/tumblr_ook9ejNdlv1ubdqpuo1_540.jpg" alt=""/>
                <div style={subheaderStyle}>
                  <div style={subheaderOne}> We know that you love cinema too, and we want your article contributions </div>

                  <div style={contentOne}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                  </div>
                </div>
              </div>

            </body>
          </main>

          <footer>
          </footer>
        </div>
      </div>
      </div>
    );
  }
}
