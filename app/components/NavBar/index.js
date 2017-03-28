/**
*
* NavBar
*
*/

import React from 'react';
import Responsive from 'react-responsive';
import {Link} from "react-router";
import AppBar from 'material-ui/AppBar';
import Menu from 'material-ui/svg-icons/navigation/menu';
import RaisedButton from 'material-ui/RaisedButton';
import FontAwesome from 'react-fontawesome';

class NavBar extends React.PureComponent {

    constructor(props) {
        super(props);
        this.state = {
            menuOpen: false,
            siteName:"Bootcamp"
        }
    }

    handleMenu = () => {
        if(this.state.menuOpen == false)
        {
            this.setState({
                menuOpen:true
            })
        }
        else if(this.state.menuOpen == true)
        {
            this.setState({
                menuOpen:false
            })
        }
    }

    showMenu = () => {
        const nav = {
            display: "flex",
            flexDirection: "column",
            alignSelf: "center"
        }

        const navLink = {
            margin : "5px",
            border: "1px solid #99999",
            padding: "5px"
        };

        if(this.state.menuOpen == true)
        {
            return(
                <nav style = {nav}>
                    <Link style = {navLink}>Link One</Link>
                    <Link style = {navLink}>Link One</Link>
                    <Link style = {navLink}>Link One</Link>
                </nav>
            )
        }
    }
    render() {
        const buttonStyle = {
            fontFamily: "Montserrat",
            width: "7vw",
            letterSpacing: "2px",
            fontWeight: "bold"
            /*display: inline-block;
            vertical-align: middle;
            width: 100%;
            font-size: 11px;
            font-family: "montserratbold";
            text-transform: uppercase;*/
        }

        const ripStyle = {
            background: "white"
        }


        const mainStyle = {
            display: "flex",
            flexDirection: "column",
            /*flexWrap: "no-wrap",*/
            /*padding: "13.5%",*/
            background:"url(https://68.media.tumblr.com/8ba6be52a6cb41fe964cd7fbb94a3e02/tumblr_on2pafGDUw1vieawno1_1280.jpg)",
            backgroundSize:"cover",
            Width:"100vw",
            /*height:"auto",*/

        }

        const titleStyleLap = {
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
            /*marginTop: "15%",*/
            paddingTop: "12%",
            paddingBottom: "10%",
            marginBottom: "3%"
            /*marginBottom: "160px"*/

        }




/*        const titleStyle = {
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

        }*/


        const navStyle = {

            marginTop: "6px",
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
            color: "#fff",
            textDecoration:"None"

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

        const square = {
            background: "black",
            height: "340.59px",
            width: "50px"
        }


    return (
    <div>
        <div>

            <Responsive minDeviceWidth = {1024}>

                <div style = {mainStyle}>

                    <RaisedButton label="Secondary" fullWidth={false} backgroundColor="black"  labelColor="white" style={buttonStyle} labelStyle={buttonStyle} />

                    <FontAwesome name='facebook-official' />

                    <div style = {titleStyleLap}>
                        word on reel weekly
                    </div>

                    <nav style = {navStyle}>
                        <Link to="/Blue"> / Home /</Link> about us / browse by topic / archive /
                    </nav>

                    <div style = {currentIssue}>
                        When your Cinema gets the blues...
                    </div>
                </div>
            </Responsive>

            <Responsive maxDeviceWidth = {1023}>
            <div>

            <AppBar onLeftIconButtonTouchTap={this.handleMenu} title="Word on Reel Weekly" disabledLabelColor="black" disabledBackgroundColor="black" titleStyle = {navStyleMobile} style = {colorStyle}/>
                <FontAwesome
                      className='super-crazy-colors'
                      name='rocket'
                      size='2x'
                      spin
                      style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}
                    />

            </div>

            {this.showMenu()}
            </Responsive>

        </div>
    </div>
    );
  }
}

export default NavBar;
