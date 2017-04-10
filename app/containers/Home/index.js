/*
 *
 * Home
 *
 */

import React from 'react';
import Helmet from 'react-helmet';
import {Link} from "react-router";
import Responsive from 'react-responsive';
import NavBar from 'components/NavBar';
import Icon from 'components/Icon';
import NavigateBefore from 'material-ui/svg-icons/image/navigate-before'
import NavigateNext from 'material-ui/svg-icons/image/navigate-next'

/* allow us to link to different pages in project folder*/

export default class Home extends React.PureComponent {
  render() {

    const mainStyle = {
      display: "flex",
      flexDirection: "column",
      background: "url(https://68.media.tumblr.com/8ba6be52a6cb41fe964cd7fbb94a3e02/tumblr_on2pafGDUw1vieawno1_1280.jpg)",
      backgroundSize: "cover",
      Width: "100vw"
    }

    const titleStyle = {
      color: "#eeeeee",
      fontFamily: "Trebuchet MS",
      fontStyle: "light",
      fontWeight: "400",
      fontSize: "2.1em",
      textTransform: "uppercase",
      textAlign: "center"

    }

    const currentIssue = {
      display: "flex",
      color: "#FFFFFF",
      justifyContent: "center",
      fontSize: "2.1em",
      fontFamily: "Source Sans Pro",
      fontStyle: "light",
      fontWeight: "400",
      textTransform: "uppercase",
      letterSpacing: "6px",
      textAlign: "center",
      paddingTop: "12%",
      paddingBottom: "10%",
      /*  marginBottom: "3%"*/

    }

    const navStyle = {
      marginTop: "6px",
      textTransform: "uppercase",
      textAlign: "center",

      verticalAlign: "middle",
      textTransform: "uppercase",
      letterSpacing: "2.5px",
      fontSize: "13px",
      fonFamily: "Montserrat",
      color: "#fff",
      textDecoration: "None"

    }

    const scrollStyle = {
      background: "#E9FFFF"
    }
    const scrollStyle2 = {
      /* width: "25%",
      marginLeft: "21vw"*/

      width: "25%",
      marginLeft: "10vw"

    }
    const backgroundStyle = {
      display: "flex",
      justifyContent: "center",
      background: "  #E9FFFF",
      /*   height: "20%",
      paddingTop: "6.5%",*/

    }
    const backgroundStyleMobile = {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      background: "  #E9FFFF"
    }
    const picBox = {
      display: "flex",
      justifyContent: "center",
      flexDirection: "column",
      /* width: "13%",
      height: "8vh",
      marginRight: "1vw",
      marginTop: "8vh"*/

      width: "13%",
      height: "auto",
      marginRight: "7%",
      marginTop: "1vh"
    }
    const picBoxMobile = {
      display: "flex",
      flexDirection: "column",
      width: "100%",
      marginTop: "7px"

    }
    /* const articleStyle = {
     /* marginBottom: "255px"

    }*/
    const articleImg = {
      width: "225px",
      height: "120px"
    }
    const articleImgMobile = {
      width: "100%",
      height: "auto"
    }
    const contentStyle = {
      fontFamily: "tahoma",
      fontSize: ".65em",
      textAlign: "center",
      fontWeight: "Bold",
      color: "#a633cc"
    }
    const articleTitle = {
      fontFamily: "serif",
      fontSize: ".75em",
      fontWeight: "600",
      textAlign: "center",
      color: " #black",
      marginTop: "5px"

    }
    const articleTitleMobile = {
      fontFamily: "Romantic",
      fontSize: ".84em",
      fontWeight: "bold",
      textAlign: "center",
      color: " #black",
      marginTop: "5px"

    }
    const authorStyle = {
      fontFamily: "Romantic",
      fontSize: ".63em",
      fontWeight: "bold",
      marginLeft: "130px",
      color: "#0C090A"

    }
    const authorStyleMobile = {
      display: "flex",
      flexDirection: "column",
      fontFamily: "Romantic",
      fontSize: ".63em",
      fontWeight: "bold",
      marginLeft: "130px",
      color: "  ##0C090A"

    }
    const footStyle = {
      display: "flex",
      flexDirection: "column",
      background: "#6C6C6C",
      height: "25vh",
      width: "100%"
    }
    return (
      <div>
        <Helmet title="Home" meta={[{
            name: 'description',
            content: 'Description of Home'
          }
        ]}/>

        <header>
          {/*mobile navbar*/}
          <Responsive maxDeviceWidth={1023}>
            <NavBar/>
          </Responsive>

          {/* laptop navbar and title*/}
          <Responsive minDeviceWidth={1024}>

            <div style={mainStyle}>

              <NavBar/>
              <div style={titleStyle}>
                word on reel weekly
                <Icon/>
              </div>

              {/*   <nav style = {navStyle}>
                <Link to="/Blue"> / Home /</Link> about us / browse by topic / archive /
              </nav>*/}

              <div style={currentIssue}>
                When your Cinema gets the blues...
              </div>
            </div>
          </Responsive>
        </header>

        <main>

          <Responsive minDeviceWidth={1024}>

            <div style={scrollStyle}>
              <div style={scrollStyle2}>
                <NavigateBefore/>
                <NavigateNext/>
                Editor's Picks
              </div>
            </div>

            <div style={backgroundStyle}>
              <div style={picBox}>
                <div>
                  <img style={articleImg} src="https://68.media.tumblr.com/630ee7e6247d5f16efe7f315bff42707/tumblr_n3uidp4lD71ty9ma3o1_1280.jpg" alt=""/>
                  <div style={contentStyle}>
                    Cinematograpy
                  </div>
                  <div style={articleTitle}>
                    <Link to="/Article">Lorem Ipsum dolor sit</Link>
                  </div>
                  <div style={authorStyle}>
                    ---Author
                  </div>
                </div>
              </div>

              <div style={picBox}>
                <div>
                  <img style={articleImg} src="https://68.media.tumblr.com/618291bc87361d807acd04604f0966d7/tumblr_n3uidp4lD71ty9ma3o3_1280.jpg" alt=""/>
                  <div style={contentStyle}>
                    Set Design
                  </div>
                  <div style={articleTitle}>
                    <Link to="/ArticleTwo">Lorem Ipsum dolor sit</Link>
                  </div>
                  <div style={authorStyle}>
                    ---Author
                  </div>
                </div>
              </div>
              <div style={picBox}>
                <div>
                  <img style={articleImg} src="https://68.media.tumblr.com/9ee7cb189d0abfe5a3168cf8b07ac066/tumblr_n3uidp4lD71ty9ma3o2_1280.jpg" alt=""/>
                  <div style={contentStyle}>
                    Directors
                  </div>
                  <div style={articleTitle}>
                    <Link to="/ArticleThree">Lorem Ipsum dolor sit</Link>
                  </div>
                  <div style={authorStyle}>
                    ---Author
                  </div>
                </div>
              </div>

              <div style={picBox}>
                <div>
                  <img style={articleImg} src="https://68.media.tumblr.com/cbc5d0a14637c62e9a7c36bbf166286d/tumblr_n3uidp4lD71ty9ma3o4_1280.jpg" alt=""/>

                  <div style={contentStyle}>
                    Directors
                  </div>

                  <div style={articleTitle}>
                    <Link to="/ArticleFour">Lorem Ipsum dolor sit</Link>
                  </div>

                  <div style={authorStyle}>
                    --Author
                  </div>

                </div>

              </div>
            </div>
          </Responsive>

          <Responsive maxDeviceWidth={1023}>
            <div style={backgroundStyleMobile}>
              <div style={picBoxMobile}>
                <div>
                  <img style={articleImgMobile} src="https://68.media.tumblr.com/630ee7e6247d5f16efe7f315bff42707/tumblr_n3uidp4lD71ty9ma3o1_1280.jpg" alt=""/>

                  <div style={articleTitleMobile}>
                    <Link to="/Article">Lorem Ipsum dolor sit</Link>
                  </div>

                  <div style={authorStyleMobile}>
                    - - - Lorem Ipsum
                  </div>
                </div>
              </div>

              <div style={picBoxMobile}>

                <div>

                  <img style={articleImgMobile} src="https://68.media.tumblr.com/618291bc87361d807acd04604f0966d7/tumblr_n3uidp4lD71ty9ma3o3_1280.jpg" alt=""/>

                  <div style={articleTitleMobile}>
                    <Link to="/ArticleTwo">Lorem Ipsum dolor sit</Link>
                  </div>

                  <div style={authorStyleMobile}>
                    - - - Lorem Ipsum
                  </div>

                </div>
              </div>

              <div style={picBoxMobile}>
                <div>
                  <img style={articleImgMobile} src="https://68.media.tumblr.com/9ee7cb189d0abfe5a3168cf8b07ac066/tumblr_n3uidp4lD71ty9ma3o2_1280.jpg" alt=""/>

                  <div style={articleTitleMobile}>
                    <Link to="/ArticleThree">Lorem Ipsum dolor sit</Link>
                  </div>

                  <div style={authorStyleMobile}>
                    - - - Lorem Ipsum
                  </div>
                </div>
              </div>

              <div style={picBoxMobile}>
                <div>
                  <img style={articleImgMobile} src="https://68.media.tumblr.com/cbc5d0a14637c62e9a7c36bbf166286d/tumblr_n3uidp4lD71ty9ma3o4_1280.jpg" alt=""/>

                  <div style={articleTitleMobile}>
                    <Link to="/ArticleFour">Lorem Ipsum dolor sit</Link>
                  </div>

                  <div style={authorStyleMobile}>
                    - - - Lorem Ipsum
                  </div>
                </div>
              </div>
            </div>
          </Responsive>

          <Responsive minDeviceWidth={1024}>
            <div style={footStyle}>

              <div style={{
                fontSize: "1.3em",
                fontFamily: "Source Sans Pro",
                textAlign: "center",
                color: " #E1EADB"
              }}>

                &copy; Lorem Ipsum
              </div>

            </div>
          </Responsive>

          <Responsive maxDeviceWidth={1023}>
            <div style={footStyle}>

              <div style={{
                fontSize: "1.3em",
                fontFamily: "Source Sans Pro",
                textAlign: "center",
                color: " #E1EADB"
              }}>
                &copy; Lorem Ipsum
              </div>

            </div>
          </Responsive>

        </main>

        <footer></footer>

      </div>
    );
  }
}
