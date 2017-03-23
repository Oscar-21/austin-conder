/*
 *
 * Home
 *
 */

import React from 'react';
import Helmet from 'react-helmet';
import {Link} from "react-router";
import Responsive from 'react-responsive';
/* allow us to link to different pages in project folder*/

export default class Home extends React.PureComponent {
  render() {

    const mainStyle = {
        display: "flex",
        flexDirection: "column",
        /*flexWrap: "no-wrap",*/
        /*padding: "13.5%",*/
        background:"url(https://68.media.tumblr.com/8ba6be52a6cb41fe964cd7fbb94a3e02/tumblr_on2pafGDUw1vieawno1_1280.jpg)",
        backgroundSize:"cover",
        maxWidth:"100%",
        height:"475px",
    }

    const navStyle = {
        display: "flex",
        flexDirection: "column",

    }

    const currentIssue = {
        display: "flex",
        color: "#FFFFFF",
        justifyContent: "center",
        fontSize: "4.1em",
        fontFamily: "Source Sans Pro",
        fontStyle: "light",
        fontWeight: "400",
        textTransform: "uppercase",
        letterSpacing: "6px",
        textAlign: "center",
        marginTop: "160px"
        /*marginBottom: "160px"*/

    }


    const backgroundStyle = {

        display: "flex",
        justifyContent: "center",
        background: " #F5FEEF",
        height: "27vh",
        paddingTop: "10%",

        /* #B4CFEC*/

    }

        const picBox = {
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        width: "13%",
        height: "150px",
        margin: "4px"

    }

       const articleStyle = {
            marginBottom: "255px",
        }

        const articleImg = {
            width: "100%",
            height: "120px",
        }

        const articleTitle = {
            fontFamily: "Romantic",
            fontSize: ".84em",
            fontWeight: "bold"

        }

        const authorStyle = {
            display: "flex",
            flexDirection: "column",
            fontFamily: "Romantic",
            fontSize: ".63em",
            fontWeight: "bold",
            marginLeft: "100px"


        }

        const footStyle = {
            display: "flex",
            flexDirection: "column",
            background: "#0C090A",
            height: "20vh",
            width: "100%",
            /*marginLeft: "50px",
            marginRight: "50px"*/
        }


    return (
    <div>
        <Helmet title="Home" meta={[ { name: 'description', content: 'Description of Home' }]}/>
        <header>

        </header>


        <main>
            <div style = {mainStyle}>

                <div style = {navStyle}>
                    <div style = {{
                        color: "#eeeeee",
                        fontFamily: "Trebuchet MS",
                        fontStyle: "light",
                        fontWeight: "400",
                        fontSize: "2em",
                        textTransform: "uppercase",
                        textAlign: "center",
                        }}>
                            word on reel weekly
                    </div>


                    <nav style = {{
                        marginTop: "10px",
                        color: "#eeeeee",
                        fontSize: ".8em",
                        fontFamily: "courier",
                        fontStyle: "light",
                        textTransform: "uppercase",
                        textAlign: "center"
                        }}>
                        / current issue / about us / browse by topic / archive /
                    </nav>

                </div>

                <div style = {currentIssue}>
                    Cinema, so blue...
                </div>

            </div>

            <div style = {backgroundStyle}>

                <div style={picBox}>
                    <div style = {articleStyle}>
                        <img style = {articleImg} src="
                            https://68.media.tumblr.com/630ee7e6247d5f16efe7f315bff42707/tumblr_n3uidp4lD71ty9ma3o1_1280.jpg" alt=""/>

                        <div style = {articleTitle}>
                            Lorem ipsum dolor sit.
                        </div>
                        <div style = {authorStyle}>
                            - - - Lorem Ipsum
                        </div>
                    </div>


                </div>



                <div style={picBox}>
                    <div style = {articleStyle}>
                        <img style = {articleImg} src="https://68.media.tumblr.com/618291bc87361d807acd04604f0966d7/tumblr_n3uidp4lD71ty9ma3o3_1280.jpg" alt=""/>

                        <div style = {articleTitle}>
                            Lorem ipsum dolor sit.
                        </div>

                        <div style = {authorStyle}>
                            - - - Lorem Ipsum
                        </div>

                    </div>
                </div>


                <div style={picBox}>
                    <div style = {articleStyle}>
                        <img style = {articleImg} src="https://68.media.tumblr.com/9ee7cb189d0abfe5a3168cf8b07ac066/tumblr_n3uidp4lD71ty9ma3o2_1280.jpg" alt=""/>


                        <div style = { articleTitle }>
                            Lorem ipsum dolor sit.
                        </div>

                        <div style = {authorStyle}>
                            - - - Lorem Ipsum
                        </div>
                    </div>
                </div>

                <div style={picBox}>
                    <div style = {articleStyle}>
                        <img style = {articleImg}            src="https://68.media.tumblr.com/cbc5d0a14637c62e9a7c36bbf166286d/tumblr_n3uidp4lD71ty9ma3o4_1280.jpg" alt=""/>

                        <div style = {articleTitle}>
                            Lorem ipsum dolor sit.
                        </div>

                        <div style = {authorStyle}>
                            - - - Lorem Ipsum
                        </div>
                    </div>
                </div>


            </div>

            <div style = {footStyle}>

                <div style = {{
                        color: "white"
                    }}>
                    top
                </div>
                <div style = {{

                    }}>
                    box
                </div>

            </div>
        </main>

        <footer>
        </footer>

    </div>
    );
  }
}
