

      import React from 'react';
      import Helmet from 'react-helmet';
      import {Link} from "react-router";
      import Responsive from 'react-responsive';
      import Share from 'material-ui/svg-icons/social/share'

      import Whatshot from 'material-ui/svg-icons/social/whatshot'
      /* allow us to link to different pages in project folder*/

      export default class About extends React.PureComponent {
        render() {


            const mainStyle = {
                display: "flex",
                flexDirection: "column",
                /*flexWrap: "no-wrap",*/
                /*padding: "13.5%",*/
                /*background:"  #CBE1E1",*/
                width:"100%",
                position: "fixed",
                top: "0",
                border: "1px solid black",
                background:"url(https://68.media.tumblr.com/8ba6be52a6cb41fe964cd7fbb94a3e02/tumblr_on2pafGDUw1vieawno1_1280.jpg)",
                backgroundSize: "cover"

                /*height:"auto",*/

            }

            const titleStyleLap = {

                fontFamily: "Trebuchet MS",
                fontStyle: "light",
                fontWeight: "400",
                fontSize: "1.1em",
                /*textTransform: "uppercase",*/
                /*textAlign: "center",*/
                color: "#eeeeee",
                paddingLeft: "5%",
                marginTop: "1%"



            }

            const navStyle = {

                /*marginTop: "6px",*/
                /*color: "#eeeeee",
                fontSize: ".95em",
                fontFamily: "courier",
                fontStyle: "light",*/
                textTransform: "uppercase",
                textAlign: "center",

                verticalAlign: "middle",
                textTransform: "uppercase",
                letterSpacing: "2.5px",
                fontSize: "13px",
                fonFamily: "Montserrat",
                textDecoration:"None",
                color: "#eeeeee"


            }

          const backgroundStyle = {
              display: "flex",
              flexDirection: "row",
              width: "100%",
              /*background: "#0C090A",*/
  background: " #F5F2F5",
              marginTop: "1%"
          }



          const backgroundColumn = {
              height: "100vh",
              width: "1%",
                background: "  #408193",
              /*background: "  #CBE1E1"*/
            /* background:" #798F79f",*/

          }

          const backgroundContentBox = {
              marginTop: "2%",
              marginLeft: "5%",
              marginRight: "5%",
              height: "100vh",
              width: "98%",
              background: " #F5F2F5"
          }

          const contentHolder = {
              marginLeft: "25%",
              width: "33.33%"
          }

          const backgroundContent = {
              marginLeft: "7%",
              marginRight: "10%",
              marginBottom: "2%"
          }

          const imageStyle = {
              width:"90%",
              height: "30vh",
              marginLeft: "7%",
              marginBottom: "2%"
          }



          return (
          <div>
              <Helmet title="About" meta={[ { name: 'description', content: 'Description of Home' }]}/>

              <header>

                  <div style = {mainStyle}>
                      <div style = {titleStyleLap}>
                          the word on reel weekly
                      </div>

                      <nav style = {navStyle}>
                          <Link to="/Blue"> / Home /</Link> about us / browse by topic / archive /
                      </nav>
                  </div>
              </header>

              <main>
                  <div style = {backgroundStyle}>
                          <div style = {backgroundColumn}></div>



                          <div style = {backgroundContentBox}>
                              <div style = {contentHolder}>

                                  <img style = {imageStyle} src="https://s-media-cache-ak0.pinimg.com/originals/68/12/6d/68126d8250cb7972ee465ef8a71ede8e.jpg" alt=""/>
                              <div style = {backgroundContent}>
                                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

                              </div>


                              <div style = {backgroundContent}>
                                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                              </div>
                          </div>
                          <div style = {contentHolder}></div>



                          </div>
                          <div style = {backgroundColumn}></div>
                  </div>
              </main>

              <footer>
              </footer>

          </div>
          );
        }
      }
