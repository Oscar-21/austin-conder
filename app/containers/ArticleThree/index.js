
import React from 'react';
import Helmet from 'react-helmet';
import {Link} from "react-router";
import Responsive from 'react-responsive';
import ArticleStyle from 'components/ArticleStyle';
import Snackbar from 'material-ui/Snackbar';

/*import Share from 'material-ui/svg-icons/social/share'
import Whatshot from 'material-ui/svg-icons/social/whatshot'*/

/* allow us to link to different pages in project folder*/
export default class ArticleThree extends React.PureComponent {

  render() {


        // content Parent
    const backgroundStyle = {
     background: "  #F5F5F5",
      display: "flex",
      flexDirection: "row",
      width: "100%",
    }

    const backgroundContentBox = {
      marginTop: "3%",
      display: "flex",
      flexDirection: "row",
      borderLeft: "2.8vw solid  #408193",
      borderRight: "2.8vw solid #408193"
    }

    // article styling
    const contentHolder = {
      marginTop: "2%",
      width: "33.33%"
    }


    // article title
    const contentTitle = {
      fontFamily: "Franklin Gothic",
      fontSize: "2.4em",
      marginLeft: "33.33%",
      marginBottom: "2%",
      fontWeight: "bold",
      textTransform: "uppercase"
    }

    //article body
    const contentStyle = {
      fontFamily: "Cormorant",
      marginLeft: "33.33%",
      marginBottom: "2%",
      fontWeight: "bold"
    }

    // table styling
    const tableHolder = {
      marginLeft: "5%",
      marginTop: '8%',
      width: "33.33%",
      position: "fixed",
      bottom:"248.3096466064453",
      height:"24.545454025268555",
      left:"900.414794921875",
      right:"1519.46875",
      top: "100",
      /*top:"223.76419067382812",*/
      width:"473.053955078125",
    }

    const tableStyle = {
      fontFamily: "Work Sans",
      fontWeight: "medium",
      textTransform: "uppercase",
      fontSize: ".9em",
      /*textAlign: "center",*/
      marginLeft: "1%",
      marginRight: "10%",
      marginBottom: "2%",
      borderTop: "2px solid  #A9641E",
      borderBottom: "2px solid #A9641E",
    }


    // article image styling
    const articleImage = {
      width:"90%",
      height: "30vh",
      marginLeft: "33.33%",
      marginBottom: "2%"
    }

    const tableImage = {
      width:"65px",
      height: "65px",
      marginTop: "2px",
      marginBottom:"2px"
      /*marginLeft: "33.33%",
      marginBottom: "2%"*/
    }
        const titleStyleLapMobile= {

      fontFamily: "Trebuchet MS",
      fontStyle: "light",
      fontWeight: "400",
      fontSize: "1.1em",
      color: "#eeeeee",
      textAlign: "center",
      /*paddingLeft: "*/
      marginTop: "1%"
    }

    const navStyleMobile = {
      marginTop: "3%",
      textTransform: "uppercase",
      textAlign: "center",
      verticalAlign: "middle",
      textTransform: "uppercase",
      letterSpacing: "2.5px",
      fontSize: ".7em",
      fonFamily: "Montserrat",
      textDecoration:"None",
      color: "#eeeeee"
    }

    // content Parent
    const backgroundStyleMobile = {
      background: "  #F5F5F5",
      display: "flex",
      flexDirection: "column",
      width: "100%",
    }

    const backgroundContentBoxMobile= {
      display: "flex",
      flexDirection: "column",
      borderLeft: "4vw solid  #408193",
      borderRight: "4vw solid #408193"
    }

    // article styling
    const contentHolderMobile = {
      width: "100%"
    }


    // article title
    const contentTitleMobile  = {
      fontFamily: "Franklin Gothic",
      fontSize: "2em",
      /*marginLeft: "33.33%",
      marginBottom: "2%",*/
      fontWeight: "bold",
      textTransform: "uppercase",
      padding: "5%",
      paddingLeft: "10%"
    }

    //article body
    const contentStyleMobile  = {
      padding:"5%",
      fontFamily: "Cormorant",
      /*marginLeft: "33.33%",
      marginBottom: "2%",*/
      fontWeight: "bold"
    }

    // table styling
    const tableHolderMobile  = {
      /*marginLeft: "5%",
      marginTop: '8%',*/
      width: "100%",
      /*position: "fixed",
      bottom:"248.3096466064453",
      height:"24.545454025268555",
      left:"1047.414794921875",
      right:"1520.46875",
      top: "100",
      /*top:"223.76419067382812",
      width:"473.053955078125",*/
    }

    const tableStyleMobile  = {
      fontFamily: "Work Sans",
      fontWeight: "medium",
      textTransform: "uppercase",
      fontSize: ".9em",
      /*textAlign: "center",*/
      /*marginLeft: "7%",
      marginRight: "10%",
      marginBottom: "2%",*/
      borderTop: "2px solid  #A9641E",
      borderBottom: "2px solid #A9641E",
    }


    // article image styling
    const articleImageMobile  = {
      width:"100%",
      paddingTop: "5%",
      paddingBottom: "5%",
      paddingLeft: "8%",
      paddingRight: "8%",
      /*height: "30vh",*/
    }

    const tableImageMobile  = {
      width:"60%",
      paddingLeft: "5%",
      paddingRight: "5%",
      paddingTop: "2%",
      height: "25vh"
      /*height: "65px",*/
      /*marginLeft: "33.33%",
      marginBottom: "2%"*/
    }




    return (
      <div>
        <Helmet title="ArticleThree" meta={[ { name: 'description', content: 'Description of Home' }]}/>

        <header>
          <ArticleStyle/>
        </header>

        <main>
          <Responsive minDeviceWidth = {1025}>
            <div style = {backgroundStyle}>

              <div style = {backgroundContentBox}>
                <div style = {contentHolder}>

                  <div style = {contentTitle}>
                    What 1955's "All that Heaven Allows" can Teach us Today
                  </div>

                  <img style = {articleImage} src="https://i.ytimg.com/vi/OtpvVIZP5O0/maxresdefault.jpg" alt=""/>


                  <div style = {contentStyle}>
                    <span style = {{fontFamily: "Playfair Text", fontSize:"1.8em"}}>L</span>orem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                  </div>

                  <div style = {contentStyle}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                  </div>

                  <div style = {contentStyle}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                  </div>

                </div>

                <div style = {tableHolder}>

                  <div style = {tableStyle}>

                    <img style = {tableImage} src="https://68.media.tumblr.com/6592dd0c94e522cd649b37d34564354d/tumblr_onmo7oQX4i1ui53xxo1_1280.png" alt=""/>
                    and stuff
                  </div>

                  <div style = {tableStyle}>

                    <img style = {tableImage} src="http://68.media.tumblr.com/297b1524bf497b54287a391dddc041b7/tumblr_on8bvj5R991t15yufo1_1280.jpg" alt=""/>
                    and stuff
                  </div>

                  <div style = {tableStyle}>

                    <img style = {tableImage} src="https://68.media.tumblr.com/2963863333a53592395331c524e11957/tumblr_omo46c9cjs1utmnjno1_1280.jpg" alt=""/>
                    and stuff
                  </div>

                  <div style = {tableStyle}>

                    <img style = {tableImage} src="https://s-media-cache-ak0.pinimg.com/564x/82/88/b5/8288b5b4c1ebbc253c01d84cdacc88da.jpg" alt=""/>
                    and stuff
                  </div>

                </div>

              </div>
            </div>
          </Responsive>


          <Responsive maxDeviceWidth = {1024}>
            <div style = {backgroundStyleMobile }>

              <div style = {backgroundContentBoxMobile }>
                <div style = {contentHolderMobile }>

                  <div style = {contentTitleMobile }>
                    What 1955's "All that Heaven Allows" can Teach us Today
                  </div>

                  <img style = {articleImageMobile } src="https://i.ytimg.com/vi/OtpvVIZP5O0/maxresdefault.jpg" alt=""/>


                  <div style = {contentStyleMobile }>
                    <span style = {{fontFamily: "Playfair Text", fontSize:"1.8em"}}>L</span>orem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                  </div>

                  <div style = {contentStyleMobile }>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

                  </div>

                  <div style = {contentStyleMobile }>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                  </div>

                </div>

                <div style = {tableHolderMobile }>

                  <div style = {tableStyleMobile }>

                    <img style = {tableImageMobile } src="https://68.media.tumblr.com/6592dd0c94e522cd649b37d34564354d/tumblr_onmo7oQX4i1ui53xxo1_1280.png" alt=""/>
                    and stuff
                  </div>

                  <div style = {tableStyleMobile }>

                    <img style = {tableImageMobile } src="http://68.media.tumblr.com/297b1524bf497b54287a391dddc041b7/tumblr_on8bvj5R991t15yufo1_1280.jpg" alt=""/>
                    and stuff
                  </div>

                  <div style = {tableStyleMobile }>

                    <img style = {tableImageMobile } src="https://68.media.tumblr.com/2963863333a53592395331c524e11957/tumblr_omo46c9cjs1utmnjno1_1280.jpg" alt=""/>
                    and stuff
                  </div>

                  <div style = {tableStyleMobile }>

                    <img style = {tableImageMobile } src="https://s-media-cache-ak0.pinimg.com/564x/82/88/b5/8288b5b4c1ebbc253c01d84cdacc88da.jpg" alt=""/>
                    and stuff
                  </div>

                </div>

              </div>
            </div>
          </Responsive>
          </main>

        <footer>
          <Snackbar
        open={true}
      />

        </footer>
      </div>
    );
  }
}
