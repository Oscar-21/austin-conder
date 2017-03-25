/**
*
* MainStyle
*
*/

import React from 'react';

class MainStyle extends React.PureComponent {
    render() {
    const mainStyle = {
        display: "flex",
        flexDirection: "row",
        background: "white"
    }

    const currentIssue = {
        display: "flex",
        color: "white",
        justifyContent: "center",
        fontSize: "2.1em",
        fontFamily: "Ubuntu mono",
        fontStyle: "light",
        fontWeight: "400",
        textTransform: "uppercase",
        letterSpacing: ".2px",
        textAlign: "center"
        /*marginBottom: "160px"*/
    }

    const test = {
        position: "fixed",
        marginLeft: "40%",
        width: "100%",
        paddingTop: "3vh",
        fontSize: ".75em",
        wordSpacing: "50px",
        textTransform: "uppercase",
        letterSpacing: "4px"
    }


    const circle = {
        position: "fixed",
        background: "#3e3e74",
        height: "70px",
        width: "70px",
        borderRadius: '50%',
        marginLeft: "20vw"
    }

    return (
    <div>
        <div style = {mainStyle}>
</div>


            <div style = {currentIssue}>
                <div style = {circle}>
                    WW
                </div>
            </div>
            <div style = {test}>
                one two three four
            </div>



    </div>
    );
  }
}

export default MainStyle;
