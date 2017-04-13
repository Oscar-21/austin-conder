/**
*
* ArticleStyle
*
*/

import React from 'react';
import Responsive from 'react-responsive';
import {Link} from "react-router";
import AppBar from 'material-ui/AppBar';

class ArticleStyle extends React.PureComponent {
  // Create boolean variable that we can use
// to
  //
  constructor(props) {
    super(props);
    this.state = {
        menuOpen: false,
        siteName:"Bootcamp"
    }
  }

 // function whose purpose is to, when called,
 // change the state of menuOpen to false
  handleMenu = () => {
    if(this.state.menuOpen == false)
    {
      this.setState({
        menuOpen:true
      })
    }
    else if(this.state.menuOpen == true)
    {
      this.setState({
        menuOpen:false
      })
    }
  }

// function that will run continuously
// and wait for menuOpen to evaluate to
// true, at which point it will return
// its values/properties?
  showMenu = () => {
    const nav = {
      display: "flex",
      flexDirection: "column",
      alignSelf: "center"
    }

    const navLink = {
      textAlign: "center",
      margin : "3px",
      border: "3px solid #408193",
      padding: "5px"
    };

    if(this.state.menuOpen == true)
    {
      return(
        <nav style = {nav}>
          <Link style = {navLink}>Link One</Link>
          <Link style = {navLink}>Link Two</Link>
          <Link style = {navLink}>Link Three</Link>
          <Link style = {navLink}>Link Four</Link>
          <Link style = {navLink}>Link Five</Link>
        </nav>
      )
    }
  }


  render() {
  // Mobile stylings
  const navStyleMobile = {
    fontFamily: "Trebuchet MS",
    fontStyle: "light",
    fontWeight: "400",
    fontSize: "1.1em",
    textTransform: "uppercase",
    background:"url(https://68.media.tumblr.com/8ba6be52a6cb41fe964cd7fbb94a3e02/tumblr_on2pafGDUw1vieawno1_1280.jpg)"
  }

  const colorStyle = {
    background:"url(https://68.media.tumblr.com/8ba6be52a6cb41fe964cd7fbb94a3e02/tumblr_on2pafGDUw1vieawno1_1280.jpg)"
  }

    // Navbar and Title begins hear

    const mainStyle = {
      display: "flex",
      flexDirection: "column",
      width:"100%",
      position: "fixed",
      top: "0",
      border: "1px solid black",
      background:"url(https://68.media.tumblr.com/8ba6be52a6cb41fe964cd7fbb94a3e02/tumblr_on2pafGDUw1vieawno1_1280.jpg)",
      backgroundSize: "cover"
    }

    const titleStyleLap = {

      fontFamily: "Trebuchet MS",
      fontStyle: "light",
      fontWeight: "400",
      fontSize: "1.1em",
      color: "#eeeeee",
      paddingLeft: "5%",
      marginTop: "1%"
    }

    const navStyle = {
      textTransform: "uppercase",
      textAlign: "center",
      verticalAlign: "middle",
      textTransform: "uppercase",
      letterSpacing: "2.5px",
      fontSize: "13px",
      fonFamily: "Montserrat",
      textDecoration:"None",
      color: "#eeeeee"
    }



    // content Parent
  /*  const backgroundStyle = {
     background: "  #F5F5F5",
      display: "flex",
      flexDirection: "row",
      width: "100%",
    }*/

    /*const backgroundContentBox = {
      marginTop: "3%",
      display: "flex",
      flexDirection: "row",
      borderLeft: "2.8vw solid  #408193",
      borderRight: "2.8vw solid #408193"
    }*/

    // article styling
    /*const contentHolder = {
      marginTop: "2%",
      width: "33.33%"
    }*/


    // article title
  /*  const contentTitle = {
      fontFamily: "Franklin Gothic",
      fontSize: "2.4em",
      marginLeft: "33.33%",
      marginBottom: "2%",
      fontWeight: "bold",
      textTransform: "uppercase"
    }*/

    //article body
    /*const contentStyle = {
      fontFamily: "Cormorant",
      marginLeft: "33.33%",
      marginBottom: "2%",
      fontWeight: "bold"
    }*/

    // table styling
    /*const tableHolder = {
      marginLeft: "5%",
      marginTop: '8%',
      width: "33.33%",
      position: "fixed",
      bottom:"248.3096466064453",
      height:"24.545454025268555",
      left:"900.414794921875",
      right:"1519.46875",
      top: "100",
      /*top:"223.76419067382812",
      width:"473.053955078125",
    }*/

  /*  const tableStyle = {
      fontFamily: "Work Sans",
      fontWeight: "medium",
      textTransform: "uppercase",
      fontSize: ".9em",
      /*textAlign: "center",
      marginLeft: "1%",
      marginRight: "10%",
      marginBottom: "2%",
      borderTop: "2px solid  #A9641E",
      borderBottom: "2px solid #A9641E",
    }*/


    // article image styling
  /*  const articleImage = {
      width:"90%",
      height: "30vh",
      marginLeft: "33.33%",
      marginBottom: "2%"
    }*/

    /*const tableImage = {
      width:"65px",
      height: "65px",
      marginTop: "2px",
      marginBottom:"2px"
      /*marginLeft: "33.33%",
      marginBottom: "2%"
    }*/

    // MOBILE STYLE
    //
    //
    //

    // Navbar and Title begins hear

    /*const mainStyleMobile = {
      display: "flex",
      flexDirection: "column",
      justifyContent: 'center',
      width:"100%",
      border: "1px solid black",
      background:"url(https://68.media.tumblr.com/8ba6be52a6cb41fe964cd7fbb94a3e02/tumblr_on2pafGDUw1vieawno1_1280.jpg)",
      backgroundSize: "cover"
    }*/
/*
   if this.state.open
     React.DOM.div {className: "NavBar"},
     this.state.component this.state.props
   else
     React.DOM.div null
     http://stackoverflow.com/questions/26344771/dynamically-insert-react-components-into-another-react-component
*/
    return (
    <div>
        <Responsive minDeviceWidth = {1024}>
          <div style = {mainStyle}>
            <div style = {titleStyleLap}>
              the word on reel weekly
            </div>

            <nav style = {navStyle}>
              <Link to="/" style ={{textDecoration: "none", color: "#eeeeee"}}> / Home /</Link> about us / browse by topic / archive /
            </nav>
          </div>
        </Responsive>
          <Responsive maxDeviceWidth = {1023}>

            <div>
              <AppBar onLeftIconButtonTouchTap={this.handleMenu} title="Word on Reel Weekly" disabledLabelColor="black" disabledBackgroundColor="black" titleStyle = {navStyleMobile} style = {colorStyle}/>
            </div>

              {this.showMenu()}
           </Responsive>


    </div>
    );
  }
}

export default ArticleStyle;
