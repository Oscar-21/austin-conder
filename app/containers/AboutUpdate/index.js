/*
 *
 * ArticleUpdate
 *
 */

import React from 'react';
import Helmet from 'react-helmet';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import Paper from 'material-ui/Paper';
import MenuItem from 'material-ui/MenuItem';
import Menu from 'material-ui/Menu';
import Responsive from 'react-responsive';
import { Link } from 'react-router';
export default class AboutUpdate extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      header: '',
      header2: '',
      header3: '',
      body: '',
      body2: '',
      body3: '',
      image: '',
      preview: '',
      image2: '',
      preview2: '',
      image3: '',
      preview3: '',
      menuOpen: false,
      token: sessionStorage.getItem('token'),

    };
  }
  handleMenu = () => {
    if (this.state.menuOpen === false) {
      this.setState({ menuOpen: true });
    } else if (this.state.menuOpen === true) {
      this.setState({ menuOpen: false });
    }
  }
  showMenu = () => {
    const styleMobile = {
      display: 'inline-block',
      margin: '16px 32px 16px 0',
    };
    const style = {
      display: 'inline-block',
      position: 'absolute',
      margin: '16px 32px 16px 0',
    };
    if (this.state.menuOpen === true) {
      return (
        <div>
          <Responsive minDeviceWidth={1024}>
            <Paper style={style}>
              <Menu>
                <MenuItem primaryText="Home" containerElement={<Link to="/"></Link>} />
                <MenuItem primaryText="About us" containerElement={<Link to="/About"></Link>} />
                <MenuItem primaryText="Browse" containerElement={<Link to="/Browse"></Link>} />
                <MenuItem primaryText="Contribute" containerElement={<Link to="/"></Link>} />
                <MenuItem primaryText="Our Friends" containerElement={<Link to="/"></Link>} />
              </Menu>
            </Paper>
          </Responsive>
          <Responsive maxDeviceWidth={1023}>
            <Paper style={styleMobile}>
              <Menu>
                <MenuItem primaryText="Home" containerElement={<Link to="/"></Link>} />
                <MenuItem primaryText="About us" containerElement={<Link to="/About"></Link>} />
                <MenuItem primaryText="Browse" containerElement={<Link to="/Browse"></Link>} />
                <MenuItem primaryText="Contribute" containerElement={<Link to="/"></Link>} />
                <MenuItem primaryText="Our Friends" containerElement={<Link to="/"></Link>} />
              </Menu>
            </Paper>
          </Responsive>
        </div>
      );
    }
  }
  handleHeader = (event) => {
    this.setState({ header: event.target.value });
  }
  handleHeader2 = (event) => {
    this.setState({ header2: event.target.value });
  }

  handleHeader3 = (event) => {
    this.setState({ header3: event.target.value });
  }


  handleBody = (event) => {
    this.setState({ body: event.target.value });
  }


  handleBody2 = (event) => {
    this.setState({ body2: event.target.value });
  }

  handleBody3 = (event) => {
    this.setState({ body3: event.target.value });
  }

  handleImage = (event) => {
    event.preventDefault();

    let reader = new FileReader();
    let file = event.target.files[0];

    reader.onloadend = () => {
      this.setState({ image: file, preview: reader.result });
    };

    reader.readAsDataURL(file);
  }

  handleImage2 = (event) => {
    event.preventDefault();

    let reader = new FileReader();
    let file = event.target.files[0];

    reader.onloadend = () => {
      this.setState({ image2: file, preview2: reader.result });
    };

    reader.readAsDataURL(file);
  }

  handleImage3 = (event) => {
    event.preventDefault();

    let reader = new FileReader();
    let file = event.target.files[0];

    reader.onloadend = () => {
      this.setState({ image3: file, preview3: reader.result });
    };

    reader.readAsDataURL(file);
  }

  storeAbout = () => {
    var data = new FormData();

    data.append('header', this.state.header);
    data.append('header2', this.state.header2);
    data.append('header3', this.state.header3);
    data.append('body', this.state.body);
    data.append('body2', this.state.body2);
    data.append('body3', this.state.body3);
    data.append('image', this.state.image);
    data.append('image2', this.state.image2);
    data.append('image3', this.state.image3);


    fetch('http://wordonreel.com/api/storeAbout', {
      method: 'post',
      body: data,
    }).then(function (response) {
      return response.json();
    }).then(function (json) {
      if (json.success) {
        alert(json.success);
      } else if (json.error) {
        alert(json.error);
      }
    });
  }
  render() {
    const navStyleMobile = {
      fontFamily: 'Trebuchet MS',
      fontStyle: 'light',
      fontWeight: '400',
      fontSize: '1.1em',
      textTransform: 'uppercase',
      background: 'url(https://68.media.tumblr.com/8 ba6be52a6cb41fe964cd7fbb94a3e02 / tumblr_on2pafGDUw1vieawno1_1280.jpg)',
    };
    const mainStyle = {
      fontFamily: 'Lato',
      fontSize: '1.5em',
      display: 'flex',
      flexDirection: 'column',
      flexWrap: 'wrap',
    };
    const style = {
      margin: '12',
    };
    const middleStyle = {
      marginLeft: '40%',
    };
    const middleStyle3 = {
      marginLeft: '35%',
    };
    const middleStyle2 = {
      width: '50%',
      marginBottom: '5%',
      paddingTop: '10%',
      marginLeft: '20%',
      border: '1px solid blue',
    };
    const middleStyleMobile = {
      marginLeft: '1px',
    };
    const middleStyle3Mobile = {
      marginLeft: '1px',
    };
    const middleStyle2Mobile = {
      width: '50%',
      marginBottom: '5%',
      paddingTop: '10%',
      border: '1px solid blue',
    };
    return (
      <div>
        <Helmet title="AboutUpdate" meta={[{ name: 'description', content: 'Description of AboutUpdate' }]} />

        <div style={mainStyle}>
          <div>
            <div>
              <AppBar onLeftIconButtonTouchTap={this.handleMenu} title="Word on Reel Weekly" titleStyle={navStyleMobile} />
            </div>
            {this.showMenu()}
          </div>

          <Responsive minDeviceWidth={1024}>
            <div style={middleStyle}>
              First Header
            </div>

            <div style={middleStyle3}>
              <input style={{ marginBottom: '5%', border: '1px solid blue' }} onChange={this.handleHeader} type="text" placeholder="header" />
            </div>

            <div style={middleStyle}>
              Second Header
            </div>

            <div style={middleStyle3}>
              <input style={{ marginBottom: '5%', border: '1px solid blue' }} onChange={this.handleHeader2} type="text" placeholder="header2" />
            </div>

            <div style={middleStyle}>
              Third Header
            </div>

            <div style={middleStyle3}>
              <input style={{ marginBottom: '5%', border: '1px solid blue' }} onChange={this.handleHeader3} type="text" placeholder="header3" />
            </div>

            <div style={middleStyle}>
              Section Body
            </div>

            <textarea style={middleStyle2} onChange={this.handleBody} placeholder="Body"></textarea>

            <div style={middleStyle}>
              2nd Section Body
            </div>

            <textarea style={middleStyle2} onChange={this.handleBody2} ></textarea>

            <div style={middleStyle}>
              3rd Section Body
            </div>

            <textarea style={middleStyle2} onChange={this.handleBody3} ></textarea>

            <div style={middleStyle}>
              <div style={{ marginBottom: '1%' }}>
                image 1
              </div>

              <input style={{ marginBottom: '10%' }} onChange={this.handleImage} type="file" />
              <img src={this.state.preview} alt="" />

            </div>

            <div style={middleStyle}>
              <div style={{ marginBottom: '1%' }}>
                image 2
              </div>

              <input style={{ marginBottom: '10%' }}onChange={this.handleImage2} type="file" />
              <img src={this.state.preview2} alt="" />
            </div>

            <div style={middleStyle}>
              <div style={{ marginBottom: '1%' }}>
                image 3
              </div>

              <input style={{ marginBottom: '10%' }} onChange={this.handleImage3} type="file" />
              <img src={this.state.preview3} alt="" />
            </div>

          </Responsive>

          <Responsive maxDeviceWidth={1023}>
            <div style={middleStyleMobile}>
            first header
            </div>

            <div style={middleStyle3Mobile}>
              <input style={{ marginBottom: '5%', border: '1px solid blue' }} onChange={this.handleHeader} type="text" />
            </div>

            <div style={middleStyleMobile}>
              2nd header
            </div>

            <div style={middleStyle3Mobile}>
              <input style={{ marginBottom: '5%', border: '1px solid blue' }} onChange={this.handleHeader2} type="text" />
            </div>

            <div style={middleStyleMobile}>
              3rd header
            </div>

            <div style={middleStyle3Mobile}>
              <input style={{ marginBottom: '5%', border: '1px solid blue' }} onChange={this.handleHeader3} type="text" />
            </div>

            <div style={middleStyleMobile}>
              Section Body 1
            </div>

            <textarea style={middleStyle2Mobile} onChange={this.handleBody} placeholder="Body"></textarea>

            <div style={middleStyleMobile}>
              Section Body 2
            </div>

            <textarea style={middleStyle2Mobile} onChange={this.handleBody2} placeholder="Body"></textarea>

            <div style={middleStyleMobile}>
              Section Body 3
            </div>

            <textarea style={middleStyle2Mobile} onChange={this.handleBody3} ></textarea>

            <div style={middleStyleMobile}>
              <div style={{ marginBottom: '1%' }}>
                image 1
              </div>

              <input style={{ marginBottom: '10%' }} onChange={this.handleImage} type="file" />
              <img src={this.state.preview} alt="" />
            </div>

            <div style={middleStyleMobile}>
              <div style={{ marginBottom: '1%' }}>
                image 2
              </div>

              <input style={{ marginBottom: '10%' }} onChange={this.handleImage2} type="file" />
              <img src={this.state.preview2} alt="" />
            </div>

            <div style={middleStyleMobile}>
              <div style={{ marginBottom: '1%' }}>
                image 3
              </div>

              <input style={{ marginBottom: '10%' }} onChange={this.handleImage3} type="file" />
              <img src={this.state.preview3} alt="" />
            </div>
          </Responsive>
        </div>

        <div>
          <RaisedButton label="Submit" primary={true} style={style,
          middleStyle} onTouchTap={this.storeAbout} />
        </div>
      </div>
    );
  }
}
