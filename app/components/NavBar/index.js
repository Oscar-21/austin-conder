/**
*
* NavBar
*
*/

import React from 'react';

class NavBar extends React.PureComponent {
    render() {

        const navStyle = {
            display: "flex",
            flexDirection: "column",
            background:"url(https://68.media.tumblr.com/8ba6be52a6cb41fe964cd7fbb94a3e02/tumblr_on2pafGDUw1vieawno1_1280.jpg)",
            backgroundSize:"cover",
            Width:"100%",
        }

    return (
      <div>
          <div style = {navStyle}>
              <div style = {{
                  color: "#eeeeee",
                  fontFamily: "Trebuchet MS",
                  fontStyle: "light",
                  fontWeight: "400",
                  fontSize: "2.5em",
                  textTransform: "uppercase",
                  textAlign: "center",

                  }}>
                  word on reel weekly
              </div>


              <nav style = {{
                  marginTop: "10px",
                  color: "#eeeeee",
                  fontSize: "1.2em",
                  fontFamily: "courier",
                  fontStyle: "light",
                  textTransform: "uppercase",
                  textAlign: "center"
                  }}>
                  / current issue / about us / browse by topic / archive /
              </nav>

          </div>
      </div>
    );
  }
}

export default NavBar;
