/**
*
* NavBar
*
*/

import React from 'react';
import Responsive from 'react-responsive';
import {Link} from "react-router";
import AppBar from 'material-ui/AppBar';
/*import Menu from 'material-ui/svg-icons/navigation/menu';*/
/*import RaisedButton from 'material-ui/RaisedButton';*/
import Icon from 'components/Icon';
import Android from 'material-ui/svg-icons/Action/android'

import Paper from 'material-ui/Paper';
import MenuItem from 'material-ui/MenuItem';
import Menu from 'material-ui/Menu';

import {Tabs, Tab} from 'material-ui/Tabs';
class NavBar extends React.PureComponent {

  // Create boolean variable that we can use
  // to
  constructor(props) {
    super(props);
    this.state = {
      menuOpen: false,
      siteName: "Bootcamp"
    }
  }

  // function whose purpose is to, when called,
  // change the state of menuOpen to false
  handleMenu = () => {
    if (this.state.menuOpen == false) {
      this.setState({menuOpen: true})
    } else if (this.state.menuOpen == true) {
      this.setState({menuOpen: false})
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
      margin: "3px",
      border: "3px solid #408193",
      padding: "5px"
    }

    const style = {
  display: 'inline-block',
  margin: '16px 32px 16px 0',
};

    if (this.state.menuOpen == true) {
      return (
        <Paper style={style}>
   <Menu>
     <MenuItem primaryText="Refresh" />
     <MenuItem primaryText="Help &amp; feedback" />
     <MenuItem primaryText="Settings" />
     <MenuItem primaryText="Sign out" />
   </Menu>
 </Paper>
      )
    }
  }
  render() { // desktop stylings
    const navStyleNew = {
      background: " #003B4D ",
      marginBottom: "2%",
      display: "flex",
      flexDirection: "row",
      width: "100%",
      height: "5vh"
    }
    const tabStyle = {
      background: " #003B4D ",
      marginBottom: "2%",
      display: "flex",
      flexDirection: "row",
      width: "100%",
      height: "5vh"
    }
    const navButtonNew = {
      background: "#003B4D",
      color: "white",
      width: "5%",
      border: "1px solid #999999"
    }
      const tabButton = {
      background: "#003B4D",
      color: "white",
      border: "1px solid #999999"
    }
    const navChildNew = {
      width: "17%",
      display: "inline-block",
      border: "1px solid #999999"
    }
    const navChildTextNew = {
      paddingTop: "1vh",
      fontFamily: "Monteserrat",
      fontWeight: "Bold",
      verticalAlign: "middle",
      textAlign: "center",
      textTransform: "uppercase",
      letterSpacing: "2.5px",
      fontSize: "13px",
      fontFamily: "montserratbold",
      color: "white"

    }

  const tabChildNewText = {
    width: "17%",
      display: "inline-block",
      border: "1px solid #999999",
      paddingTop: "1vh",
      fontFamily: "Monteserrat",
      fontWeight: "Bold",
      verticalAlign: "middle",
      textAlign: "center",
      textTransform: "uppercase",
      letterSpacing: "2.5px",
      fontSize: "13px",
      fontFamily: "montserratbold",
      color: "white"
    }
    const tabChildNewTextz = {
      width: "5%",
      display: "inline-block",
      border: "1px solid #999999",
      paddingTop: "1vh",
      fontFamily: "Monteserrat",
      fontWeight: "Bold",
      verticalAlign: "middle",
      textAlign: "center",
      textTransform: "uppercase",
      letterSpacing: "2.5px",
      fontSize: "13px",
      fontFamily: "montserratbold",
      color: "white"
    }
    const titleStyleNew = {
      width: "100%",
      height: "12.5vh",
      fontFamily: "Source Sans Pro"
    }

    // Mobile stylings
    const navStyleMobile = {
      fontFamily: "Trebuchet MS",
      fontStyle: "light",
      fontWeight: "400",
      fontSize: "1.1em",
      textTransform: "uppercase",
      background: "url(https://68.media.tumblr.com/8 ba6be52a6cb41fe964cd7fbb94a3e02 / tumblr_on2pafGDUw1vieawno1_1280.jpg) "

    }

    const colorStyle = {
      background: "url(https://68.media.tumblr.com/8ba6be52a6cb41fe964cd7fbb94a3e02/tumblr_on2pafGDUw1vieawno1_1280.jpg)"
    }
    return (
      <div>
        <div>

          <Responsive minDeviceWidth={1024}>
          {/*  <div style={navStyleNew}>

              <div style={navButtonNew}>
                <Icon/>
              </div>

              <div style={navChildNew}>
                <div style={navChildTextNew}>
                  home
                </div>
              </div>

              <div style={navChildNew}>
                <div style={navChildTextNew}>
                  about us
                </div>
              </div>

              <div style={navChildNew}>
                <div style={navChildTextNew}>
                  archive
                </div>
              </div>

              <div style={navChildNew}>
                <div style={navChildTextNew}>
                  contribute
                </div>
              </div>

              <div style={navChildNew}>
                <div style={navChildTextNew}>
                  Our friends
                </div>
              </div>

              <div style={navButtonNew}>
              <Android/>
              </div>

              <div style={navButtonNew}>
                twitter
              </div>
            </div>*/}
              <Tabs>


                <Tab style={tabChildNewTextz}
        label="LOGO"
      />



    <Tab style={tabChildNewText}
        label="home"
      />



  <Tab style={tabChildNewText}
        label="about us"
      />

  <Tab style={tabChildNewText}
        label="Browse"
      />

  <Tab style={tabChildNewText}
        label="Archive"
      />

  <Tab style={tabChildNewText}
        label="Our Friends"
      />
    <Tab style={tabChildNewTextz}
        label="Social"
      />
    <Tab style={tabChildNewTextz}
        label="Share"
      />
    </Tabs>
          </Responsive>

          <Responsive maxDeviceWidth={1023}>

            <div>
              <AppBar onLeftIconButtonTouchTap={this.handleMenu} title="Word on Reel Weekly" titleStyle={navStyleMobile} style={colorStyle}/>
            </div>

            {this.showMenu()}
          </Responsive>

        </div>
      </div>
    );
  }
}
export default NavBar;
