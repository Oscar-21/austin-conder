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
/*import {cyan500} from 'material-ui/styles/colors';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';*/
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';

import Paper from 'material-ui/Paper';
import MenuItem from 'material-ui/MenuItem';
import Menu from 'material-ui/Menu';
export default class Dashboard extends React.PureComponent {

  constructor(props) {
    super(props);

    // this.state allows us to access all
    // state variables of an object class
    this.state = {
      title: '',
      body: '',
      image: '',
      preview: '',
      menuOpen: false
    };
  }

  handleMenu = () => {
    if (this.state.menuOpen == false) {
      this.setState({menuOpen: true})
    } else if (this.state.menuOpen == true) {
      this.setState({menuOpen: false})
    }
  }

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
  // function definition of handleTitle
  //  to pass it a parameter:
  //      parameter={this.handleTitle}
  //  to have it run conintuously:
  //      {handleTitle()}
  // the {} are to tell the compiler to read
  // text as javascript
  handleTitle = (e) => {
    this.setState({title: e.target.value});

    console.log(this.state.title);
  }

  handleBody = (e) => {
    this.setState({body: e.target.value});
  }

  handleImage = (e) => {
    e.PreventDefault();

    let reader = new FileReader();
    let file = e.target.files[0];

    reader.onloadend = () => {
      this.setState({image: file, preview: reader.result})
    }

    reader.readAsData(file);
  }

  storeArticle = () => {
    var data = new FormData();

    data.append('title', this.state.title);
    data.append('body', this.state.body);
    data.append('image', this.state.image);

    fetch('http://localhost:8000/api/storeArticle', {
      method: 'post',
      body: data
    }).then(function(response) {
      return response.json();
    }).then(function(json) {
      if (json.success) {
        alert('Success');
      } else if (json.error) {
        alert('Error');
      }
    })
  }

  render() {
    /*const muiTheme = getMuiTheme({
      palette: {
        textColor: cyan500
      },
      appBar: {
        height: 50
      }

    });*/
//imports
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


//originals
    const mainStyle = {
      fontFamily: 'Lato',
      fontSize: '1.5em',
      display: 'flex',
      flexDirection: 'column',
      flexWrap: 'wrap'
    }
    const style = {
      margin: '12'
    }

    const middleStyle = {
      marginLeft: '40%'
    }
    const middleStyle3 = {
      marginLeft: '35%'
    }
    const middleStyle2 = {
      width: '50%',
      marginBottom: '5%',
      paddingTop: '10%',
      marginLeft: '20%',
      border: '1px solid blue'

    }
    return (
      <div>
        <Helmet title='Dashboard' meta={[{
            name: 'description',
            content: 'Description of Dashboard'
          }
        ]}/>
        <div style={mainStyle}>
          <div>
            <div>
              <AppBar onLeftIconButtonTouchTap={this.handleMenu} title="Word on Reel Weekly" disabledLabelColor="black" disabledBackgroundColor="black" titleStyle={navStyleMobile} style={colorStyle}/>
            </div>

            {this.showMenu()}


          </div>
          <div style={middleStyle}>
            Article Title
          </div>
          <div style={middleStyle3}>
            <input style={{
              marginBottom: '5%',
              border: '1px solid blue'
            }} onChange={this.handleTitle} type='text' placeholder='Title'/>
          </div>
          <div style={middleStyle}>
            Article Body
          </div>
          <textarea style={middleStyle2} onChange={this.handleBody} placeholder='Body'></textarea>
          <div style={middleStyle}>
            <div style={{
              marginBottom: '1%'
            }}>
              Article image
            </div>
            <input style={{
              marginBottom: '10%'
            }} onChange={this.handleImage} type='file'/>
            <img src='this.state.preview'/>
          </div>
          <div>
            <RaisedButton label='Submit' primary={true} style={style,
            middleStyle} onTouchTap={this.storeArticle}/>
          </div>
        </div>
      </div>
    )
  }
}
