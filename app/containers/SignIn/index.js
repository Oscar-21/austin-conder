/*
 *
 * SignIn
 *
 */

import React from 'react';
import Helmet from 'react-helmet';
import Responsive from 'react-responsive';
import ArticleStyle from 'components/ArticleStyle';
import RaisedButton from 'material-ui/RaisedButton';
export default class SignIn extends React.PureComponent {

  handleLogin = () => {
    console.log('foo');
  }
  render() {
    const backgroundStyle = {
      display: 'flex',
      flexDirection: 'column',
      width: '100%',
      background: '#408193',
    };
    const backgroundContentBox = {
      margin: '0 auto',
      marginTop: '3%',
      background: '#F5F5F5',
      width: '90%',
    };
    const titleBox = {
      marginTop: '4%',
      marginRight: '20%',
      marginLeft: '20%',
      marginBottom: '7%',
      paddingTop: '1.5%',
      paddingBottom: '1.5%',
      borderTop: '2px solid gray',
      borderBottom: '2px solid gray',
    };
    const titleStyle = {
      fontFamily: 'Source Sans Pro',
      textAlign: 'center',
      fontColor: '#0C090A',
      fontSize: '2.1em',
      fontStyle: 'light',
      fontWeight: '400',
      textTransform: 'uppercase',
      letterSpacing: '6px',
    };
    const titleStyleMobile = {
      fontFamily: 'Source Sans Pro',
      textAlign: 'center',
      fontColor: '#0C090A',
      fontSize: '2em',
      fontStyle: 'light',
      fontWeight: '400',
      textTransform: 'uppercase',
      letterSpacing: '4px',
    };
    const inputStyle = {
      border: '1px solid black',
    };
    const buttonStyle = {

    };
    const inputStyleMobile = {
      marginLeft: '25%',
      border: '1px solid black',
    };
    const buttonStyleMobile = {
      marginLeft: '38%',
    };
    return (
      <div>
        <Helmet title="SignIn" meta={[{ name: 'description', content: 'Description of SignIn' }]} />
        <header>
          <ArticleStyle />
        </header>

        <Responsive minDeviceWidth={1024}>
          <main style={backgroundStyle}>
            <div style={backgroundContentBox}>
              <div style={titleBox}>
                <div style = {titleStyle}>
                  Login
                </div>
              </div>
              <input style={inputStyle} type="text" placeholder="email" />
              <input type="text" style={inputStyle} placeholder="password" />
              <RaisedButton style={buttonStyle} label="Submit" primary={true} onTouchTap={this.handleLogin} />
            </div>
          </main>
        </Responsive>

        <Responsive maxDeviceWidth={1023}>
          <main style={backgroundStyle}>
            <div style={backgroundContentBox}>
              <div style={titleBox}>
                <div style={titleStyleMobile}>
                  Login
                </div>
              </div>
                <input style={inputStyleMobile} type="text" placeholder="email" />
                <input type="text" style={inputStyleMobile} placeholder="password" />
              <div>
                <RaisedButton style={buttonStyleMobile} label="Submit" primary={true} onTouchTap={this.handleLogin} />
              </div>
            </div>
          </main>
        </Responsive>
      </div>
    );
  }
}