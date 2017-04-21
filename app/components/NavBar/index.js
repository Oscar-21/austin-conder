/**
*
* NavBar
*
*/

import React from 'react';
import Responsive from 'react-responsive';
import { Link } from 'react-router';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import { Tabs, Tab } from 'material-ui/Tabs';
class NavBar extends React.PureComponent {
  // Create boolean variable that we can use
  // to
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
      this.setState({ menuOpen: true });
    } else if (this.state.menuOpen === true) {
      this.setState({ menuOpen: false });
    }
  }

  handleNav = (location) => {
    this.context.router.push(location);
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

    const navLinkMob = {
      textAlign: 'center',
      padding: '3px',
    };

    if (this.state.menuOpen === true) {
      return (
        <nav style={nav}>
          <RaisedButton containerElement={<Link to="/"></Link>} primary={true} label="Home" style={navLinkMob} />

          <RaisedButton containerElement={<Link to="/About"></Link>} primary={true} label="About us" style={navLinkMob} />

          <RaisedButton containerElement={<Link to="/Browse"></Link>} label="Browse" primary={true} style={navLinkMob} />

          <RaisedButton primary={true} containerElement={<Link to="/Dashboard"></Link>} label="Contribute" style={navLinkMob} />

          <RaisedButton primary={true} containerElement={<Link to="/"></Link>}label="Our Friends" style={navLinkMob} />
        </nav>
      );
    }
  }
  render() {
    // desktop stylings
    const tabChildNewText = {
      width: '17%',
      display: 'inline-block',
      border: '1px solid #999999',
      paddingTop: '1vh',
      fontFamily: 'Monteserrat',
      fontWeight: 'Bold',
      verticalAlign: 'middle',
      textAlign: 'center',
      textTransform: 'uppercase',
      letterSpacing: '2.5px',
      fontSize: '13px',
      color: 'white',
    };
    const tabChildNewTextz = {
      width: '5%',
      display: 'inline-block',
      border: '1px solid #999999',
      paddingTop: '1vh',
      fontFamily: 'Monteserrat',
      fontWeight: 'Bold',
      verticalAlign: 'middle',
      textAlign: 'center',
      textTransform: 'uppercase',
      letterSpacing: '2.5px',
      fontSize: '13px',
      color: 'white',
    };
    // Mobile stylings
    const navStyleMobile = {
      fontFamily: 'Trebuchet MS',
      fontStyle: 'light',
      fontWeight: '400',
      fontSize: '1.1em',
      textTransform: 'uppercase',
      background: 'url(https://68.media.tumblr.com/8 ba6be52a6cb41fe964cd7fbb94a3e02 / tumblr_on2pafGDUw1vieawno1_1280.jpg)',
    };
    const colorStyle = {
      background: 'url(https://68.media.tumblr.com/8ba6be52a6cb41fe964cd7fbb94a3e02/tumblr_on2pafGDUw1vieawno1_1280.jpg)',
    };
    return (
      <div>
        <div>
          <Responsive minDeviceWidth={1024}>
            <Tabs>
              <Tab style={tabChildNewTextz} label="WW" />

              <Tab style={tabChildNewText} label="home" containerElement={<Link to="/"></Link>} />

              <Tab style={tabChildNewText} label="about us" containerElement={<Link to="/About"></Link>} />

              <Tab style={tabChildNewText} label="Browse" containerElement={<Link to="/Browse"></Link>} />

              <Tab style={tabChildNewText} label="Contribute" containerElement={<Link to="/Dashboard"></Link>} />

              <Tab style={tabChildNewText} label="Our Friends" />

              <Tab style={tabChildNewTextz} label="Login" containerElement={<Link to="/SignIn"></Link>} />

              <Tab style={tabChildNewTextz} label="Sign up" containerElement={<Link to="/SignUp"></Link>} />
            </Tabs>
          </Responsive>

          <Responsive maxDeviceWidth={1023}>
            <div>
              <AppBar onLeftIconButtonTouchTap={this.handleMenu} title="Word on Reel Weekly" titleStyle={navStyleMobile} style={colorStyle} />
            </div>
            {this.showMenu()}
          </Responsive>
        </div>
      </div>
    );
  }
}
NavBar.contextTypes = {
  router: React.PropTypes.object,
};
export default NavBar;
