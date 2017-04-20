/**
*
* ArticleStyle
*
*/
import React from 'react';
import Responsive from 'react-responsive';
import { Link } from 'react-router';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
class ArticleStyle extends React.PureComponent {
  // Create boolean variable that we can use
  constructor(props) {
    super(props);
    this.state = {
      menuOpen: false,
      siteName: 'Bootcamp',
    };
  }

 // function whose purpose is to, when called,
 // change the state of menuOpen to false
  handleMenu = () => {
    if (this.state.menuOpen === false) {
      this.setState({
        menuOpen: true,
      });
    } else if (this.state.menuOpen === true) {
      this.setState({
        menuOpen: false,
      });
    }
  }

// function that will run continuously
// and wait for menuOpen to evaluate to
// true, at which point it will return
// its values/properties?
  showMenu = () => {
    const nav = {
      display: 'flex',
      flexDirection: 'column',
      alignSelf: 'center',
      background: '#F5F5F5',
      width: '75%',
      position: 'absolute',
    };
    const navLink = {
      textAlign: 'center',
      padding: '3px',
    };

    if (this.state.menuOpen === true) {
      return (
        <nav style={nav}>
          <RaisedButton containerElement={<Link to="/"></Link>} primary={true} label="Home" style={navLink} />

          <RaisedButton containerElement={<Link to="/About"></Link>} primary={true} label="About us" style={navLink} />

          <RaisedButton containerElement={<Link to="/Browse"></Link>} label="Browse" primary={true} style={navLink} />

          <RaisedButton primary={true} containerElement={<Link to="/Dashboard"></Link>}label="Contribute" style={navLink} />

          <RaisedButton primary={true} containerElement={<Link to="/"></Link>}label="Our Friends" style={navLink} />
        </nav>
      );
    }
  }
  render() {
  // Mobile stylings
    const navStyleMobile = {
      fontFamily: 'Trebuchet MS',
      fontStyle: 'light',
      fontWeight: '400',
      fontSize: '1.1em',
      textTransform: 'uppercase',
      background: 'url(https://68.media.tumblr.com/8ba6be52a6cb41fe964cd7fbb94a3e02/tumblr_on2pafGDUw1vieawno1_1280.jpg)',
    };
    const colorStyle = {
      background: 'url(https://68.media.tumblr.com/8ba6be52a6cb41fe964cd7fbb94a3e02/tumblr_on2pafGDUw1vieawno1_1280.jpg)',
    };
    // Navbar and Title begins hear
    const mainStyle = {
      display: 'flex',
      flexDirection: 'column',
      width: '100%',
      position: 'fixed',
      top: '0',
      border: '1px solid black',
      background: 'url(https://68.media.tumblr.com/8ba6be52a6cb41fe964cd7fbb94a3e02/tumblr_on2pafGDUw1vieawno1_1280.jpg)',
      backgroundSize: 'cover',
    };
    const titleStyleLap = {
      fontFamily: 'Trebuchet MS',
      fontStyle: 'light',
      fontWeight: '400',
      fontSize: '1.1em',
      color: '#eeeeee',
      paddingLeft: '5%',
      marginTop: '1%',
    };
    const navStyle = {
      display: 'flex',
      flexDirection: 'row',
      textTransform: 'uppercase',
      textAlign: 'center',
      verticalAlign: 'middle',
      letterSpacing: '1.75px',
      fontSize: '11px',
      fonFamily: 'Montserrat',
      textDecoration: 'None',
      color: '#eeeeee',
    };
    const socialStyle = {
      marginLeft: '24.5%',
    };
    const linkStyle = {
      marginLeft: '35%',
    };
    return (
      <div>
        <Responsive minDeviceWidth={1024}>
          <div style={mainStyle}>
            <div style={titleStyleLap}>
              the word on reel weekly
            </div>

            <nav style={navStyle}>
              <div style={linkStyle}>
                <Link to="/" style={{ textDecoration: 'none', color: '#eeeeee' }}>
                  /&nbsp; Home &nbsp;
                </Link>

                <Link to="/About" style={{ textDecoration: 'none', color: '#eeeeee' }}>
                  /&nbsp; about us &nbsp;
                </Link>

                <Link to="/Browse" style={{ textDecoration: 'none', color: '#eeeeee' }}>
                   /&nbsp; browse by topic &nbsp;/
                 </Link>

                <Link to="/Dashboard" style={{ textDecoration: 'none', color: '#eeeeee' }}>
                  &nbsp; contribute &nbsp;
                </Link>

                <Link to="/" style={{ textDecoration: 'none', color: '#eeeeee' }}>
                  /&nbsp; our friends &nbsp; /
                </Link>
              </div>

              <div style={socialStyle}>
                <Link to="/SignIn" style={{ textDecoration: 'none', color: '#eeeeee' }}>
                  |&nbsp; Login &nbsp;
                </Link>

                <Link to="SignUp" style={{ textDecoration: 'none', color: '#eeeeee' }}>
                  |&nbsp; Sign Up &nbsp;|
                </Link>
              </div>
            </nav>
          </div>
        </Responsive>
        <Responsive maxDeviceWidth={1023}>
          <div>
            <AppBar onLeftIconButtonTouchTap={this.handleMenu} title="Word on Reel Weekly" disabledLabelColor="black" disabledBackgroundColor="black" titleStyle={navStyleMobile} style={colorStyle} />
          </div>
          {this.showMenu()}
        </Responsive>
      </div>
    );
  }
}
export default ArticleStyle;
