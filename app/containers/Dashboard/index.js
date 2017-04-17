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
      subheader:'',
      body: '',
      image: '',
      preview: '',
      image2: '',
      preview2:'',
      firstCharacter:'',
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
  position: "absolute",
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
  handleTitle = (event) => {
    this.setState({title: event.target.value});

    console.log(this.state.title);
  }


  handleFirstCharacter = (event) => {
    this.setState({firstCharacter: event.target.value});

    console.log(this.state.title);
  }

  handleSubheader = (event) => {
    this.setState({subheader: event.target.value});

    console.log(this.state.subheader);
  }

  handleBody = (event) => {
    this.setState({body: event.target.value});
  }



  handleImage = (event) => {
    event.preventDefault();

    let reader = new FileReader();
    let file = event.target.files[0];

    reader.onloadend = () => {
      this.setState({image: file, preview: reader.result})
    }

    reader.readAsDataURL(file);
  }

    handleImage2 = (event) => {
    event.preventDefault();

    let reader = new FileReader();
    let file = event.target.files[0];

    reader.onloadend = () => {
      this.setState({image2: file, preview2: reader.result})
    }

    reader.readAsDataURL(file);
  }



  storeArticle = () => {
    var data = new FormData();

    data.append('title', this.state.title);
    data.append('subheader', this.state.subheader);
    data.append('body', this.state.body);
    data.append('image', this.state.image);
    data.append('image2', this.state.image2);
    data.append('firstCharacter', this.state.firstCharacter);


    fetch('http://localhost:8000/api/storeArticle', {
      method: 'post',
      body: data
    }).then(function(response) {
      return response.json();
    }).then(function(json) {
      if (json.success) {
        alert(json.success);
      } else if (json.error) {
        alert(json.error);
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
              <AppBar onLeftIconButtonTouchTap={this.handleMenu} title="Word on Reel Weekly"   titleStyle={navStyleMobile} style={colorStyle}/>
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
            Article Subheader
          </div>

          <div style={middleStyle3}>
            <input style={{
              marginBottom: '5%',
              border: '1px solid blue'
            }} onChange={this.handleSubheader} type='text' placeholder='Title'/>
          </div>

            <div style={middleStyle}>
            First Character
          </div>

          <div style={middleStyle3}>
            <input style={{
              marginBottom: '5%',
              border: '1px solid blue'
            }} onChange={this.handleFirstCharacter} type='text' placeholder='Title'/>
        </div>

                <div style={middleStyle}>
            About Content
          </div>

            <textarea style={middleStyle2}
              onChange={this.handleAbout}></textarea>


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
          <img src={this.state.preview}/>

          </div>

            <div style={middleStyle}>
            <div style={{
              marginBottom: '1%'
            }}>
              Homepage image
            </div>

            <input style={{
              marginBottom: '10%'
            }} onChange={this.handleImage2} type='file'/>
          <img src={this.state.preview2}/>
</div>

            <div style={middleStyle}>
            <div style={{
              marginBottom: '1%'
            }}>
              About image
            </div>
            <input style={{
              marginBottom: '10%'
            }} onChange={this.handleAboutImage} type='file'/>
          <img src={this.state.preview3}/>
          </div>
          </div>
          <div>
            <RaisedButton label='Submit' primary={true} style={style,
            middleStyle} onTouchTap={this.storeArticle}/>
          </div>

      </div>
    )
  }
}
