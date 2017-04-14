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
      display: "flex",
      flexDirection: "column",
      background: "#F5F5F5",
    width: "90%"

    }

    const titleBox = {
      marginTop: "10%",
      marginRight: "12%",
      marginLeft: "12%",
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
              <div>
                test
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
