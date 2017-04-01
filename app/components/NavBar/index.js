/**
*
* NavBar
*
*/

import React from 'react';
import Responsive from 'react-responsive';
import {Link} from "react-router";
import AppBar from 'material-ui/AppBar';
import Menu from 'material-ui/svg-icons/navigation/menu';

class NavBar extends React.PureComponent {

// Create boolean variable that we can use
// to
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
      margin : "5px",
      border: "1px solid #99999",
      padding: "5px"
    };

    if(this.state.menuOpen == true)
    {
      return(
        <nav style = {nav}>
          <Link style = {navLink}>Link One</Link>
          <Link style = {navLink}>Link One</Link>
          <Link style = {navLink}>Link One</Link>
        </nav>
      )
    }
  }

  render() {

    // desktop stylings
    const mainStyle = {
      display: "flex",
      flexDirection: "column",
      background:"url(https://68.media.tumblr.com/8ba6be52a6cb41fe964cd7fbb94a3e02/tumblr_on2pafGDUw1vieawno1_1280.jpg)",
      backgroundSize:"cover",
      Width:"100vw",

    }

    const titleStyle = {
      color: "#eeeeee",
      fontFamily: "Trebuchet MS",
      fontStyle: "light",
      fontWeight: "400",
      fontSize: "2.1em",
      textTransform: "uppercase",
      textAlign: "center"


    }


    const currentIssue = {
      display: "flex",
      color: "#FFFFFF",
      justifyContent: "center",
      fontSize: "2.1em",
      fontFamily: "Source Sans Pro",
      fontStyle: "light",
      fontWeight: "400",
      textTransform: "uppercase",
      letterSpacing: "6px",
      textAlign: "center",
      paddingTop: "12%",
      paddingBottom: "10%",
      marginBottom: "3%"

    }

    const navStyle = {
      marginTop: "6px",
      textTransform: "uppercase",
      textAlign: "center",

      verticalAlign: "middle",
      textTransform: "uppercase",
      letterSpacing: "2.5px",
      fontSize: "13px",
      fonFamily: "Montserrat",
      color: "#fff",
      textDecoration:"None"

    }

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


    return (
      <div>
        <div>

          <Responsive minDeviceWidth = {1024}>
            <div style = {mainStyle}>

              <div style = {titleStyle}>
                word on reel weekly
              </div>

              <nav style = {navStyle}>
                <Link to="/Blue"> / Home /</Link> about us / browse by topic / archive /
              </nav>

              <div style = {currentIssue}>
                When your Cinema gets the blues...
              </div>
            </div>
          </Responsive>

          <Responsive maxDeviceWidth = {1023}>

            <div>
              <AppBar onLeftIconButtonTouchTap={this.handleMenu} title="Word on Reel Weekly" disabledLabelColor="black" disabledBackgroundColor="black" titleStyle = {navStyleMobile} style = {colorStyle}/>
            </div>

            {this.showMenu()}

          </Responsive>

        </div>
      </div>
    );
  }
}

export default NavBar;
