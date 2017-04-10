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
import RaisedButton from 'material-ui/RaisedButton';
import Icon from 'components/Icon';
import Android from 'material-ui/svg-icons/Action/android'

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
      textAlign: "center",
      margin : "3px",
      border: "3px solid #408193",
      padding: "5px"
    };

    if(this.state.menuOpen == true)
    {
      return(
        <nav style = {nav}>
          <Link to="/" style = {navLink}>orem Ipsum dolor sit</Link>
          <Link style = {navLink}>Link Two</Link>
          <Link style = {navLink}>Link Three</Link>
          <Link style = {navLink}>Link Four</Link>
          <Link style = {navLink}>Link Five</Link>
        </nav>
      )
    }
  }

  render() {

   // desktop stylings
   const navStyleNew = {
     background: " #003B4D ",
     marginBottom: "2%",
     display: "flex",
     flexDirection: "row",
     width: "100%",
     height: "5vh"
   }
   const navButtonNew = {
     background: "#003B4D" ,
     color: "white",
     width: "5%",
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
     fontWeight :"Bold",
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
    background:"url(https://68.media.tumblr.com/8ba6be52a6cb41fe964cd7fbb94a3e02/tumblr_on2pafGDUw1vieawno1_1280.jpg)"
  }

  const colorStyle = {
    background:"url(https://68.media.tumblr.com/8ba6be52a6cb41fe964cd7fbb94a3e02/tumblr_on2pafGDUw1vieawno1_1280.jpg)"
  }
    return (
      <div>
        <div>

          <Responsive minDeviceWidth = {1024}>
            <div style = {navStyleNew}>

              <div style = {navButtonNew}>
              <Icon/>
              </div>

              <div style = {navChildNew}>
                <div style = {navChildTextNew}>
                  one
                </div>
              </div>

              <div style = {navChildNew}>
                <div style = {navChildTextNew}>
                  two
                </div>
              </div>

              <div style = {navChildNew}>
                <div style = {navChildTextNew}>
                  three
                </div>
              </div>

              <div style = {navChildNew}>
                <div style = {navChildTextNew}>
                  four
                </div>
              </div>

              <div style = {navChildNew}>
                <div style = {navChildTextNew}>
                  five
                </div>
              </div>

              <div>
              logo
              </div>

              <div style = {navButtonNew}>
                twitter
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
