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
        Width:"100%",
        /*height:"auto",*/
    }

    const mainStyleMobile = {
        display: "flex",
        flexDirection: "column",
        /*flexWrap: "no-wrap",*/
        /*padding: "13.5%",*/
        background:"url(https://68.media.tumblr.com/8ba6be52a6cb41fe964cd7fbb94a3e02/tumblr_on2pafGDUw1vieawno1_1280.jpg)",
        backgroundSize:"cover",
        Width:"100%",
        /*height:"auto",*/
    }

    const navStyle = {
        display: "flex",
        flexDirection: "column",

    }

    const navStyleMobile = {
        display: "flex",
        flexDirection: "column",

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
        marginTop: "15%",
        marginBottom: "160px"

    }

    const currentIssueMobile = {
        display: "flex",
        /*flexDirection: "coloumn*/
        color: "#FFFFFF",
        /*justifyContent: "center",*/
        fontSize: ".9em",
        fontFamily: "Source Sans Pro",
        fontStyle: "light",
        fontWeight: "400",
        textTransform: "uppercase",
        letterSpacing: "6px",
        textAlign: "center",
        marginTop: "20%",
        marginBottom: "15px"
        /*marginBottom: "160px"*/

    }


    const backgroundStyle = {

        display: "flex",
        justifyContent: "center",
        background: "  #E9FFFF",
        height: "20%",
        paddingTop: "6.5%"



        /* #B4CFEC*/

    }

    const backgroundStyleMobile = {

        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        background: "  #E9FFFF",
        /*height: "10%",*/
        /*paddingTop: "6.5%"*/


}


        const picBox = {
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        width: "13%",
        height: "8vh",
        /*height: "175px",*/
        marginRight: "6px",
        marginTop: "75px"

    }

        const picBoxMobile = {
        display: "flex",
        flexDirection: "column",
        width: "100%",
        /*height: "175px",*/
        /*marginRight: "6px",*/
        marginTop: "7px"

}

       const articleStyle = {
            marginBottom: "255px"
        }

        const articleStyleMobile = {

         }

        const articleImg = {
            width: "100%",
            height: "120px",

        }

        const articleImgMobile = {
            width: "100%",
            height: "auto",

        }

        const articleTitle = {
            fontFamily: "Romantic",
            fontSize: ".84em",
            fontWeight: "bold",
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
            display: "flex",
            flexDirection: "column",
            fontFamily: "Romantic",
            fontSize: ".63em",
            fontWeight: "bold",
            marginLeft: "130px",
            color: "  ##0C090A"

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
            /*marginLeft: "50px",
            marginRight: "#878787",#201D1E"#6C6C6C50px"*/
        }

        const footStyleMobile = {
            display: "flex",
            flexDirection: "column",
            background:  "#6C6C6C",
            height: "25vh",
            width: "100%",
            /*marginLeft: "50px",
            marginRight: "#878787",#201D1E"#6C6C6C50px"*/
        }


    return (
    <div>
        <Helmet title="Home" meta={[ { name: 'description', content: 'Description of Home' }]}/>
        <header>

        </header>


        <main>
            <Responsive minDeviceWidth = {1024}>
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
                        A tribute to the Blue
                    </div>

                </div>
            </Responsive>

            <Responsive maxDeviceWidth = {1023}>
                <div style = {mainStyleMobile}>

                    <div style = {navStyleMobile}>
                        <div style = {{
                            color: "#eeeeee",
                            fontFamily: "Trebuchet MS",
                            fontStyle: "light",
                            fontWeight: "400",
                            fontSize: "1.5em",
                            textTransform: "uppercase",
                            textAlign: "center",
                            }}>
                            word on reel weekly
                        </div>


                        <nav style = {{
                            marginTop: "6px",
                            color: "#eeeeee",
                            fontSize: ".7em",
                            fontFamily: "courier",
                            fontStyle: "light",
                            textTransform: "uppercase",
                            textAlign: "center"
                            }}>
                            / current issue / about us / browse by topic / archive /
                        </nav>

                    </div>


                </div>
            </Responsive>

            <Responsive minDeviceWidth = {1024}>
                <div style = {backgroundStyle}>

                    <div style={picBox}>
                        <div style = {articleStyle}>
                            <img style = {articleImg} src="
                            https://68.media.tumblr.com/630ee7e6247d5f16efe7f315bff42707/tumblr_n3uidp4lD71ty9ma3o1_1280.jpg" alt=""/>

                            <div style = {articleTitle}>
                                Lorem ipsum dolor sit
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
                                Lorem Ipsum dolor sit
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
                                <Link to= "/About">Lorem Ipsum dolor sit</Link>
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
                                Lorem Ipsum dolor sit
                            </div>

                            <div style = {authorStyle}>
                                - - - Lorem Ipsum
                            </div>
                        </div>
                    </div>
                </div>
            </Responsive>

            <Responsive maxDeviceWidth = {1023}>
                <div style = {backgroundStyleMobile}>
                    <div style={picBoxMobile}>
                        <div style = {articleStyleMobile}>
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

                    <div style = {articleStyleMobile}>

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
                        <div style = {articleStyleMobile}>
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
                        <div style = {articleStyleMobile}>
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
                        Lorem Ipsum
                    </div>

                </div>
            </Responsive>

            <Responsive maxDeviceWidth = {1023}>
                <div style = {footStyleMobile}>

                    <div style = {{
                        fontSize: "1.3em",
                        fontFamily: "Source Sans Pro",
                        textAlign: "center",
                        color: " #E1EADB"
                        }}>
                        Lorem Ipsum
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
