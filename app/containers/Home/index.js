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
import NavigateBefore from 'material-ui/svg-icons/image/navigate-before'
import NavigateNext from 'material-ui/svg-icons/image/navigate-next'
/* allow us to link to different pages in project folder*/

export default class Home extends React.PureComponent {
  render() {

    const scrollStyle = {
      background: "#E9FFFF"
    }
    const scrollStyle2 = {
      width: "25%",
      marginLeft: "21vw"
    }
    const backgroundStyle = {
      display: "flex",
      justifyContent: "center",
      background: "  #E9FFFF",
      height: "20%",
      paddingTop: "6.5%",

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
      width: "13%",
      height: "8vh",
      marginRight: "1vw",
      marginTop: "8vh"

    }
    const picBoxMobile = {
      display: "flex",
      flexDirection: "column",
      width: "100%",
      marginTop: "7px"

    }
    const articleStyle = {
      marginBottom: "255px"
    }
    const articleImg = {
      width: "225px",
      height: "120px",

    }
    const articleImgMobile = {
      width: "100%",
      height: "auto",

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
      background:  "#6C6C6C",
      height: "25vh",
      width: "100%",
    }
    return (
      <div>
        <Helmet title="Home" meta={[ { name: 'description', content: 'Description of Home' }]}/>

        <header>
          {/*mobile navbar*/}
          <Responsive maxDeviceWidth = {1023}>
            <NavBar/>
          </Responsive>


          {/* laptop navbar and title*/}
          <Responsive minDeviceWidth = {1024}>
            <NavBar/>
          </Responsive>
        </header>

        <main>

          <Responsive minDeviceWidth = {1024}>

            <div style = {scrollStyle}>
              <div style = {scrollStyle2}>
                <NavigateBefore/>
                <NavigateNext/>
                Editor's Picks
              </div>
            </div>

            <div style = {backgroundStyle}>
              <div style={picBox}>
              <div style = {articleStyle}>
                <img style = {articleImg} src="https://68.media.tumblr.com/630ee7e6247d5f16efe7f315bff42707/tumblr_n3uidp4lD71ty9ma3o1_1280.jpg"  alt=""/>
                <div style = {contentStyle}>
                  Cinematograpy
                  </div>
                  <div style = {articleTitle}>
                    On camera filters in Three colors: Blue
                  </div>
                  <div style = {authorStyle}>
                    ---Author
                  </div>
                </div>
              </div>

              <div style={picBox}>
                <div style = {articleStyle}>
                  <img style = {articleImg} src="https://68.media.tumblr.com/618291bc87361d807acd04604f0966d7/tumblr_n3uidp4lD71ty9ma3o3_1280.jpg" alt=""/>
                  <div style = {contentStyle}>
                    Set Design
                  </div>
                  <div style = {articleTitle}>
                    Ophuls First Color Film.
                  </div>
                  <div style = {authorStyle}>
                    ---Author
                  </div>
                </div>
              </div>
              <div style={picBox}>
                <div style = {articleStyle}>
                  <img style = {articleImg} src="https://68.media.tumblr.com/9ee7cb189d0abfe5a3168cf8b07ac066/tumblr_n3uidp4lD71ty9ma3o2_1280.jpg" alt=""/>
                  <div style = {contentStyle}>
                    Directors
                  </div>
                  <div style = { articleTitle }>
                    <Link to= "/About">Lorem Ipsum dolor sit</Link>
                  </div>
                  <div style = {authorStyle}>
                    ---Author
                  </div>
                </div>
              </div>

                <div style={picBox}>
                  <div style = {articleStyle}>
                    <img style = {articleImg} src="https://68.media.tumblr.com/cbc5d0a14637c62e9a7c36bbf166286d/tumblr_n3uidp4lD71ty9ma3o4_1280.jpg" alt=""/>

                    <div style = {contentStyle}>
                      Directors
                    </div>

                    <div style = {articleTitle}>
                      Lorem Ipsum dolor sit
                    </div>

                    <div style = {authorStyle}>
                      --Author
                    </div>

                  </div>

              </div>
            </div>
      </Responsive>

      <Responsive maxDeviceWidth = {1023}>
          <div style = {backgroundStyleMobile}>
              <div style={picBoxMobile}>
                  <div style = {articleStyle}>
                      <img style = {articleImgMobile} src="
                      https://68.media.tumblr.com/630ee7e6247d5f16efe7f315bff42707/tumblr_n3uidp4lD71ty9ma3o1_1280.jpg" alt=""/>

                      <div style = {articleTitleMobile}>
                          Lorem ipsum dolor sit
                      </div>

                      <div style = {authorStyleMobile}>
                          - - - Lorem Ipsum
                      </div>
                  </div>
              </div>

          <div style={picBoxMobile}>

              <div style = {articleStyle}>

                  <img style = {articleImgMobile}         src="https://68.media.tumblr.com/618291bc87361d807acd04604f0966d7/tumblr_n3uidp4lD71ty9ma3o3_1280.jpg" alt=""/>

                  <div style = {articleTitleMobile}>
                      Lorem Ipsum dolor sit
                  </div>

                  <div style = {authorStyleMobile}>
                      - - - Lorem Ipsum
                  </div>

              </div>
          </div>


              <div style={picBoxMobile}>
                  <div style = {articleStyle}>
                      <img style = {articleImgMobile} src="https://68.media.tumblr.com/9ee7cb189d0abfe5a3168cf8b07ac066/tumblr_n3uidp4lD71ty9ma3o2_1280.jpg" alt=""/>


                      <div style = { articleTitleMobile }>
                          <Link to= "/About">Lorem Ipsum dolor sit</Link>
                      </div>

                      <div style = {authorStyleMobile}>
                          - - - Lorem Ipsum
                      </div>
                  </div>
              </div>

          <div style={picBoxMobile}>
                  <div style = {articleStyle}>
                      <img style = {articleImgMobile}            src="https://68.media.tumblr.com/cbc5d0a14637c62e9a7c36bbf166286d/tumblr_n3uidp4lD71ty9ma3o4_1280.jpg" alt=""/>

                      <div style = {articleTitleMobile}>
                          Lorem Ipsum dolor sit
                      </div>

                      <div style = {authorStyleMobile}>
                          - - - Lorem Ipsum
                      </div>
                  </div>
              </div>
          </div>
      </Responsive>


      <Responsive minDeviceWidth = {1024}>
          <div style = {footStyle}>

              <div style = {{
                  fontSize: "1.3em",
                  fontFamily: "Source Sans Pro",
                  textAlign: "center",
                  color: " #E1EADB"
                  }}>

                  &copy; Lorem Ipsum
              </div>

          </div>
      </Responsive>

      <Responsive maxDeviceWidth = {1023}>
          <div style = {footStyle}>

              <div style = {{
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

  <footer>
  </footer>

</div>
);
}
}
