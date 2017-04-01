/*
 *
 * Blue
 *
 */

import React from 'react';
import Helmet from 'react-helmet';
import {Link} from "react-router";
import Responsive from 'react-responsive';
/*import NavBar from 'components/NavBar';*/
import ArticleStyle from 'components/ArticleStyle';
import MainStyle from 'components/MainStyle';
export default class Blue extends React.PureComponent {
    render() {

    const mainStyle = {
    display: "flex",
    flexDirection: "column",
    width:"100%",
    position: "fixed",
    top: "0",
    border: "1px solid black",
    background:"url(https://68.media.tumblr.com/8ba6be52a6cb41fe964cd7fbb94a3e02/tumblr_on2pafGDUw1vieawno1_1280.jpg)",
    backgroundSize: "cover"
  }

    const titleStyleLap = {

      fontFamily: "Trebuchet MS",
      fontStyle: "light",
      fontWeight: "400",
      fontSize: "1.1em",
      color: "#eeeeee",
      paddingLeft: "5%",
      marginTop: "1%"
    }

    const navStyle = {
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

    // MOBILE STYLE
    //
    //
    //

    // Navbar and Title begins hear

    const mainStyleMobile = {
      display: "flex",
      flexDirection: "column",
      justifyContent: 'center',
      width:"100%",
      border: "1px solid black",
      background:"url(https://68.media.tumblr.com/8ba6be52a6cb41fe964cd7fbb94a3e02/tumblr_on2pafGDUw1vieawno1_1280.jpg)",
      backgroundSize: "cover"
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
                <Helmet title="Blue" meta={[ { name: 'description', content: 'Description of Blue' }]}/>

                <header>

                </header>

                <main>
                    <div>

                    </div>

                </main>

                <footer>

                </footer>

            </div>
    );
  }
}
