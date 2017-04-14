
import React from 'react';
import Helmet from 'react-helmet';
import {Link} from "react-router";
import Responsive from 'react-responsive';
import ArticleStyle from 'components/ArticleStyle';
import Comments from 'components/Comments';
import Share from 'material-ui/svg-icons/social/share';
import Email from 'material-ui/svg-icons/communication/email';
import Whatshot from 'material-ui/svg-icons/social/whatshot';
/*import Share from 'material-ui/svg-icons/social/share'
import Whatshot from 'material-ui/svg-icons/social/whatshot'*/
/* allow us to link to different pages in project folder*/
export default class Article extends React.PureComponent {

  constructor(props){
    super(props);
    this.state = {
      article:""
    }
  }

  componentWillMount() {
    fetch("http://localhost:8000/api/showArticle/"+this.props.params.id)
    .then(function(response){
      return response.json();

    })
    .then(function(json){
      this.setState({
        article:json
      })
    }.bind(this))
  }

  render() {


        // content Parent
    const backgroundStyle = {
     /*background: "  #F5F5F5",*/
      display: "flex",
      flexDirection: "column",
      width: "100%",
      background: "#408193"
    }
  const backgroundContentBox = {
      margin: "0 auto",
      marginTop: "3%",
      paddingBottom: "3%",
      display: "flex",
      flexDirection: "row",
      background: "#F5F5F5",
      width: "90%"

    }

    //share icon
    const shareStyle = {
      marginLeft: "4%",
      paddingTop: "20%",
      position: "fixed"
    }
// hot icon
    const hotStyle = {
      marginLeft: "4%",
      paddingTop: "23%",
      position: "fixed"    }

      //git icon

  const gitStyle = {
      marginLeft: "4%",
      paddingTop: "26%",
      position: "fixed"    }

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
      marginLeft: "25%",
      marginTop: '10%',
      width: "33.33%",
      /*position: "fixed",*/
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


const footerStyle = {
      margin: "0 auto",
      /*paddingTop: "3%",*/
      width: "90%",
      background: "#F5F5F5",


  }

const borderStyle = {


}



    const contentStyleFoot = {
      width: "75%",
      margin: "0 auto",
      borderTop: "1px solid  #A9641E",
      paddingTop: "5%",
      fontFamily: "Cormorant",
      /*marginLeft: "33.33%",*/
      marginBottom: "2%",
      fontWeight: "bold"
    }

    return (
      <div style = {backgroundStyle}>
        <Helmet title="Article" meta={[ { name: 'description', content: 'Description of Home' }]}/>

        <header>
          <ArticleStyle/>
        </header>

        <main>
          <Responsive minDeviceWidth = {1025}>

              <div style = {backgroundContentBox}>
                <div style={shareStyle}><Share/></div>
                <div  style={hotStyle}><Whatshot/></div>
                <div style={gitStyle}>
                  <Email/>
                </div>
                <div style = {contentHolder}>

                  <div style = {contentTitle}>
                    {this.state.article.title}
                  </div>

                  <img style = {articleImage} src={this.state.article.image} alt=""/>


                  <div style = {contentStyle}>
                  <span style = {{fontFamily: "Playfair Text", fontSize:"1.5em"}}>{this.state.article.firstCharacter}</span>
                  {this.state.article.body}
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



          </Responsive>


          <Responsive maxDeviceWidth = {1024}>
            <div style = {backgroundStyleMobile }>

              <div style = {backgroundContentBoxMobile }>
                <div style = {contentHolderMobile }>

                  <div style = {contentTitleMobile }>
                    Loss and freedom in Kieslowski's Blue:
                  </div>

                  <img style = {articleImageMobile } src="https://s-media-cache-ak0.pinimg.com/originals/68/12/6d/68126d8250cb7972ee465ef8a71ede8e.jpg" alt=""/>


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

          <footer style = {footerStyle}>
            <div style = {borderStyle}></div>
            <div style = {contentStyleFoot}>
              <Comments/>
            </div>
          </footer>


      </div>
    );
  }
}
