/**
*
* NavBar
*
*/

import React from 'react';
import Responsive from 'react-responsive';
import {Link} from "react-router";
import AppBar from 'material-ui/AppBar';
class NavBar extends React.PureComponent {
    render() {

        const titleStyle = {
            display: "flex",
            flexDirection: "column",
            background:"url(https://68.media.tumblr.com/8ba6be52a6cb41fe964cd7fbb94a3e02/tumblr_on2pafGDUw1vieawno1_1280.jpg)",
            backgroundSize:"cover",
            Width:"100%",
            color: "#eeeeee",
            fontFamily: "Trebuchet MS",
            fontStyle: "light",
            fontWeight: "400",
            fontSize: "2.5em",
            textTransform: "uppercase",
            textAlign: "center",

        }


        const navStyle = {

            marginTop: "6px",
            color: "#eeeeee",
            fontSize: "1.2em",
            fontFamily: "courier",
            fontStyle: "light",
            textTransform: "uppercase",
            textAlign: "center",

        }

        /*const navStyle2Mobile = {

            marginTop: "6px",
            color: "#eeeeee",
            fontSize: "1.2em",
            fontFamily: "courier",
            fontStyle: "light",
            textTransform: "uppercase"

        }*/
        const navStyleMobile = {
        /*    display: "flex",
            flexDirection: "column",*/
            /*backgroundSize:"cover",
            Width:"100%",
            color: "#eeeeee",*/
            fontFamily: "Trebuchet MS",
            fontStyle: "light",
            fontWeight: "400",
            fontSize: "1.1em",
            textTransform: "uppercase",
            background:"url(https://68.media.tumblr.com/8ba6be52a6cb41fe964cd7fbb94a3e02/tumblr_on2pafGDUw1vieawno1_1280.jpg)"
        }

        const colorStyle = {
            background:"url(https://68.media.tumblr.com/8ba6be52a6cb41fe964cd7fbb94a3e02/tumblr_on2pafGDUw1vieawno1_1280.jpg)"
        }

    return (
    <div>
        <div>
            <Responsive minDeviceWidth = {1024}>
                <div style = {titleStyle}>
                    word on reel weekly
                </div>

                <nav style = {navStyle}>
                    <Link to="/Blue">/Current issue</Link> / about us / browse by topic / archive /
                </nav>
            </Responsive>

            <Responsive maxDeviceWidth = {1023}>
            <div>
                <AppBar title="Word on Reel Weekly" style ={colorStyle} titleStyle= {navStyleMobile} iconClassNameRight="muidocs-icon-navigation-expand-more"/>
            </div>
            </Responsive>

        </div>
    </div>
    );
  }
}

export default NavBar;
