/*
 *
 * About
 *
 */
import React from 'react';
import Helmet from 'react-helmet';
import ArticleStyle from 'components/ArticleStyle';
import Responsive from 'react-responsive';
export default class About extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      about: [],
    };
  }
  componentWillMount() {
    fetch('http://wordonreel.com/api/getAbout')
    .then(function (response) {
      return response.json();
    })
    .then(function (json) {
      this.setState({
        about: json,
      });
    }.bind(this));
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
    const firstStyle = {
      display: 'flex',
      flexDirection: 'row',
      maxWidth: '1000px',
      margin: '0 auto',
      justifyContent: 'space-around',
    };
    const firstStyleMobile = {
      display: 'flex',
      flexDirection: 'column',
      maxWidth: '1000px',
      margin: '0 auto',
      justifyContent: 'space-around',
    };
    const imageStyle = {
      marginTop: '12%',
      width: '20%',
      height: '20%',
    };
    const imageStyleMobile = {
      marginLeft: '17%',
      marginTop: '5%',
      width: '65%',
      height: '65%',
    };
    const subheaderStyle = {
      display: 'flex',
      flexDirection: 'column',
      marginTop: '4%',
      paddingLeft: '35%',
    };
    const subheaderStyleMobile = {
      display: 'flex',
      flexDirection: 'column',
      marginTop: '4%',
      marginLeft: '10%',
    };
    const subheaderOne = {
      fontFamily: 'Droid Serif',
      fontSize: '1.3em',
      fontWeight: 'bold',
      marginBottom: '3%',
      textTransform: 'uppercase',
    };
    const subheaderTwo = {
      fontFamily: 'Droid Serif',
      fontSize: '1.3em',
      fontWeight: 'bold',
      textTransform: 'uppercase',
      marginBottom: '3%',
    };
    const contentOne = {
      width: '85%',
      borderTop: '1px solid gray',
      paddingTop: '3%',
    };
    return (
      <div>
        <Helmet title="About" meta={[{ name: 'description', content: 'Description of About' }]} />
        <header>
          <ArticleStyle />
        </header>

        <Responsive minDeviceWidth={1024}>
          <main style={backgroundStyle}>
            <div style={backgroundContentBox}>
              <div style={titleBox}>
                <div style={titleStyle}>
                  About us
                </div>
              </div>

              <div style={firstStyle}>
                <img style={imageStyle} src={this.state.about.image} alt="" />

                <div style={subheaderStyle}>
                  <div style={subheaderOne}>
                    {this.state.about.header}
                  </div>

                  <div style={contentOne}>
                    {this.state.about.body}
                  </div>

                </div>
              </div>

              <div style={firstStyle}>
                <img style={imageStyle} src={this.state.about.image2} alt="" />
                <div style={subheaderStyle}>
                  <div style={subheaderTwo}>
                    {this.state.about.header2}
                  </div>
                  <div style={contentOne}>
                    {this.state.about.body2}
                  </div>
                </div>
              </div>

              <div style={firstStyle}>
                <img style={imageStyle} src={this.state.about.image3} alt="" />
                <div style={subheaderStyle}>
                  <div style={subheaderTwo}>
                    {this.state.about.header3}
                  </div>

                  <div style={contentOne}>
                    {this.state.about.body3}
                  </div>
                </div>
              </div>

              <footer>
              </footer>
            </div>
          </main>
        </Responsive>

        <Responsive maxDeviceWidth={1023}>
          <main style={backgroundStyle}>
            <div style={backgroundContentBox}>
              <div style={titleBox}>
                <div style={titleStyleMobile}>
                  About us
                </div>
              </div>

              <div style={firstStyleMobile}>
                <img style={imageStyleMobile} src={this.state.about.image}  alt="" />

                <div style={subheaderStyleMobile}>
                  <div style={subheaderOne}>
                    {this.state.about.header}
                  </div>

                  <div style={contentOne}>
                    {this.state.about.body}
                  </div>
                </div>
              </div>

              <div style={firstStyleMobile}>
                <img style={imageStyleMobile} src={this.state.about.image2} alt="" />

                <div style={subheaderStyleMobile}>
                  <div style={subheaderTwo}>
                    {this.state.about.header2}
                  </div>

                  <div style={contentOne}>
                    {this.state.about.body2}
                  </div>
                </div>
              </div>

              <div style={firstStyleMobile}>
                <img style={imageStyleMobile} src={this.state.about.image3} alt="" />

                <div style={subheaderStyleMobile}>
                  <div style={subheaderTwo}>
                    {this.state.about.header3}
                  </div>

                  <div style={contentOne}>
                    {this.state.about.body3}
                  </div>
                </div>
              </div>
              <footer>
              </footer>
            </div>
          </main>
        </Responsive>
      </div>
    );
  }
}
