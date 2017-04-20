/*
 *
 * Browse
 *
 */

import React from 'react';
import Helmet from 'react-helmet';
import Responsive from 'react-responsive';
import ArticleStyle from 'components/ArticleStyle';
export default class Browse extends React.PureComponent {
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
    return (
      <div style={backgroundStyle}>
        <Helmet title="Browse" meta={[{ name: 'description', content: 'Description of Browse' }]} />

        <header>
          <ArticleStyle />
        </header>

        <Responsive minDeviceWidth={1024}>
          <main style={backgroundStyle}>
            <div style={backgroundContentBox}>

              <div style={titleBox}>
                <div style={titleStyle}>
                  Browse
                </div>
              </div>

            </div>
          </main>
        </Responsive>
        <Responsive maxDeviceWidth={1023}>
          <main style={backgroundStyle}>
            <div style={backgroundContentBox}>

              <div style={titleBox}>
                <div style={titleStyleMobile}>
                  Browse
                </div>
              </div>

            </div>
          </main>
        </Responsive>

      </div>
    );
  }
}
