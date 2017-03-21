/*
 *
 * Home
 *
 */

import React from 'react';
import Helmet from 'react-helmet';
import {Link} from "react-router"; /* allow us to link to different pages in project folder*/

export default class Home extends React.PureComponent {
  render() {

    const titleStyle = {
        display: "flex",
        flexDirection: "column",
        padding: "13.5%",
        background:"url(https://68.media.tumblr.com/8ba6be52a6cb41fe964cd7fbb94a3e02/tumblr_on2pafGDUw1vieawno1_1280.jpg)",
        backgroundSize:"cover",
        width:"100%",
        height:"300px",
    }

    const titlePage = {
        color: "#eeeeee",
        fontSize: "5em",
        fontFamily: "Source Sans Pro",
        fontStyle: "light",
        fontWeight: "400",
        textTransform: "uppercase",
        letterSpacing: "6px",
        textAlign: "center",
        /*marginBottom: "160px"*/

    }


    const screenshotStyle = {
        display: "flex",
        justifyContent: "center",
        background: " #BED9F6",
        height: "30vh"
        /* #B4CFEC*/

    }
    /*const picBox = {
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        width: "13%",
        height: "150px",
        background: "red"
    }*/

        const picBox = {
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        width: "13%",
        height: "150px",
        margin: "5px",
    }

       const thumbNails = {

            width: "100%",
            height: "128px"
        }

        const placeHoldertext = {
            display: "flex",
            textAlign: "center",
            justifyContent: "center",
            fontFamily: "Merriweather",
            color:"#000000"
        }

        const footStyle = {
            display: "flex",
            flexDirection: "column",
            background: "#9E9E9E",
            height: "100vh",
            width: "100%"
        }

    /*
        const thirdPic = {
        width: "13%",
        height: "150px",
        background:"#0000ff"
    }

        const fourthPic = {
        width: "13%",
        height: "150px",
        background:"#ff0000"
    }*/



    return (
    <div>
        <Helmet title="Home" meta={[ { name: 'description', content: 'Description of Home' }]}/>
        <header>

        </header>

        <main>
            <div style = {titleStyle}>
                <div style = {titlePage}>
                    Cinema, so blue...
                </div>

            </div>

            <div style = {screenshotStyle}>

                <div style={picBox}>
                    <div>
                        <img style = {thumbNails} src="
                            https://68.media.tumblr.com/630ee7e6247d5f16efe7f315bff42707/tumblr_n3uidp4lD71ty9ma3o1_1280.jpg" alt=""/>
                    </div>

                    <div style = {placeHoldertext}>
                        <h1>
                            <Link to= "/" style={{
                            textDecoration:'none',
                            fontFamily: 'Merriweather',
                            color:'black'
                            }}>Home</Link>
                        </h1>
                    </div>
                </div>


                <div style={picBox}>
                    <div>
                        <img style = {thumbNails} src="https://68.media.tumblr.com/618291bc87361d807acd04604f0966d7/tumblr_n3uidp4lD71ty9ma3o3_1280.jpg" alt=""/>
                    </div>
                    <div style = {placeHoldertext}>
                        <h1>
                            <Link to= "/About" style={{
                            textDecoration:'none',
                            fontFamily: 'Merriweather',
                            color:'black'
                            }}>About</Link>
                        </h1>
                    </div>
                </div>


                <div style={picBox}>
                    <div>
                        <img style = {thumbNails} src="https://68.media.tumblr.com/9ee7cb189d0abfe5a3168cf8b07ac066/tumblr_n3uidp4lD71ty9ma3o2_1280.jpg" alt=""/>
                    </div>
                    <div style = {placeHoldertext}>
                        <h1>Tres</h1>
                    </div>
                </div>

                <div style={picBox}>
                    <div>
                        <img style = {thumbNails} src="https://68.media.tumblr.com/cbc5d0a14637c62e9a7c36bbf166286d/tumblr_n3uidp4lD71ty9ma3o4_1280.jpg" alt=""/>
                    </div>
                    <div style = {placeHoldertext}>
                        <h1>Quatro</h1>
                    </div>


                </div>


            </div>

            <div style = {footStyle}>
            </div>
        </main>

        <footer>
        </footer>

    </div>
    );
  }
}
