/*
 *
 * Home
 *
 */

import React from 'react';
import Helmet from 'react-helmet';
import { Link } from 'react-router';
import Responsive from 'react-responsive';
import NavBar from 'components/NavBar';
import Icon from 'components/Icon';
import NavigateBefore from 'material-ui/svg-icons/image/navigate-before';
import NavigateNext from 'material-ui/svg-icons/image/navigate-next';
import { Tabs, Tab } from 'material-ui/Tabs';
import FontIcon from 'material-ui/FontIcon';
/* allow us to link to different pages in project folder*/
export default class Home extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
    };
  }
  componentWillMount() {
    fetch('http://jasparlamar.crab:8000/api/getArticles')
    .then(function (response) {
      return response.json();
    })
    .then(function (json) {
      this.setState({
        articles: json,
      });
    }.bind(this));
  }
  render() {
    const mainStyle = {
      display: 'flex',
      flexDirection: 'column',
      background: 'url(https://68.media.tumblr.com/8ba6be52a6cb41fe964cd7fbb94a3e02/tumblr_on2pafGDUw1vieawno1_1280.jpg)',
      backgroundSize: 'cover',
      width: '100vw',
    };
    const titleStyle = {
      color: '#eeeeee',
      fontFamily: 'Trebuchet MS',
      fontStyle: 'light',
      fontWeight: '400',
      fontSize: '2.1em',
      textTransform: 'uppercase',
      textAlign: 'center',
    };
    const currentIssue = {
      display: 'flex',
      color: '#FFFFFF',
      justifyContent: 'center',
      fontSize: '2.1em',
      fontFamily: 'Source Sans Pro',
      fontStyle: 'light',
      fontWeight: '400',
      textTransform: 'uppercase',
      letterSpacing: '6px',
      textAlign: 'center',
      paddingBottom: '10%',
      paddingTop: '1%',
    };
    const headerContainer = {
      display: 'flex',
      flexDirection: 'row',
      marginTop: '8%',
    };
    const headerStyle = {
      color: '#FFFFFF',
      justifyContent: 'center',
      fontSize: '2.1em',
      fontFamily: 'Source Sans Pro',
      fontStyle: 'light',
      fontWeight: '400',
      textTransform: 'uppercase',
      letterSpacing: '6px',
      textAlign: 'center',
      width: '16%',
      borderBottom: '1px solid #FFFFFF',
    };
    const headerBox = {
      width: '42%',
    };
    const scrollStyle = {
      background: '#E9FFFF',
    };
    const scrollStyle2 = {
      width: '25%',
      marginLeft: '10vw',
    };
    const backgroundStyle = {
      display: 'flex',
      justifyContent: 'center',
      background: '#E9FFFF',
    };
    const backgroundStyleMobile = {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      background: '#F5F5F5',
      paddingTop: '10%',
    };
    const picBox = {
      display: 'flex',
      justifyContent: 'center',
      flexDirection: 'column',
      width: '13%',
      height: 'auto',
      marginRight: '7%',
      marginTop: '1vh',
    };
    const picBoxMobile = {
      display: 'flex',
      flexDirection: 'column',
      width: '70%',
      margin: '0 auto',
      marginTop: '3%',
      paddingBottom: '3%',
    };
    const articleImg = {
      boxShadow: '10px 0px 10px 1px rgba(0,0,0,0.6)',
      borderRadius: '2%',
      width: '225px',
      height: '120px',
    };
    const articleImgMobile = {
      width: '100%',
      boxShadow: '10px 0px 10px 1px rgba(0,0,0,0.6)',
      borderRadius: '2%',
      height: 'auto',
    };
    const contentStyle = {
      fontFamily: 'tahoma',
      fontSize: '.65em',
      textAlign: 'center',
      fontWeight: 'Bold',
      color: '#a633cc',
    };
    const articleTitle = {
      fontFamily: 'serif',
      fontSize: '.75em',
      fontWeight: '600',
      textAlign: 'center',
      color: ' #black',
      marginTop: '1%',
      marginBottom: '5%',
    };
    const articleTitleMobile = {
      fontFamily: 'Lato',
      fontSize: '.84em',
      fontWeight: 'bold',
      textAlign: 'center',
      color: ' #black',
      marginTop: '5px',
      textShadow: '0px 0px 1px rgba(0,0,0,0.6)',
      paddingTop: '4%',
      paddingBottom: '3%',
      marginBottom: '5%',
      borderBottom: '2px solid #408193',
    };
    const linkStyle = {
      textDecoration: 'none',
      color: 'black',
    };
    const titleBoxz = {
      marginRight: '20%',
      marginLeft: '20%',
      paddingTop: '1.5%',
      paddingBottom: '1.5%',
      borderTop: '2px solid gray',
      borderBottom: '2px solid gray',
      marginBottom: '5%',
    };
    const titleStyleMobilez = {
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
      <div>
        <Helmet title="Home" meta={[{ name: 'description', content: 'Description of Home' }]} />

        <header>
          {/* mobile navbar */}
          <Responsive maxDeviceWidth={1024}>
            <NavBar />
          </Responsive>

          {/* laptop navbar and title */}
          <Responsive minDeviceWidth={1025}>
            <div style={mainStyle}>

              <NavBar />

              <div style={titleStyle}>
                word on reel weekly
                <Icon />
              </div>

              <div style={headerContainer}>
                <div style={headerBox}></div>
                <div style={headerStyle}>
                This week:
                </div>
                <div style={headerBox}></div>
              </div>
              <div style={currentIssue}>
                When Cinema gets the blues...
              </div>
            </div>
          </Responsive>

        </header>
        <main>
          <Responsive minDeviceWidth={1025}>
            <div style={scrollStyle}>
              <div style={scrollStyle2}>
                <NavigateBefore />
                <NavigateNext />
                Editors Picks
              </div>
            </div>

            <div style={backgroundStyle}>
              {this.state.articles.map((article, index) => (
                <div style={picBox}>
                  <Link style={linkStyle} to={`/Article/${article.id}`}>
                    <img style={articleImg} src={article.image2} alt="" />
                    <div style={contentStyle}>
                      {article.subheader}
                    </div>
                    <div style={articleTitle}>
                      {article.title}
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </Responsive>

          <Responsive maxDeviceWidth={1023}>
            <div style={backgroundStyleMobile}>
              <div style={titleBoxz}>
                <div style={titleStyleMobilez}>
                  This Week
                </div>
              </div>
              {this.state.articles.map((article, index) => (
                <div style={picBoxMobile}>
                  <Link style={linkStyle} to={`/Article/${article.id}`}>
                    <img style={articleImgMobile} src={article.image2} alt="" />
                    <div style={articleTitleMobile}>
                      {article.title}
                    </div>
                  </Link>
                </div>
            ))}
            </div>
          </Responsive>
        </main>

        <footer>
          <Responsive minDeviceWidth={1025}>
            <Tabs>
              <Tab icon={<FontIcon className="material-icons"></FontIcon>} />
              <Tab icon={<FontIcon className="material-icons"></FontIcon>} label="It's the #1 SOURCE FOR PEDANTIC DRIVILING ON FILM --- 'some dude'" />
              <Tab />
            </Tabs>
          </Responsive>
        </footer>
      </div>
    );
  }
}
