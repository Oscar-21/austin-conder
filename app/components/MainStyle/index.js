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
        fontFamily: "consolas",
        fontStyle: "light",
        fontWeight: "400",
        textTransform: "uppercase",
        letterSpacing: ".2px",
        textAlign: "center"
        /*marginBottom: "160px"*/
    }

    const test = {
        marginLeft: "70%",
        width: "100%",
        paddingTop: "3vh",
        fontSize: ".9em",
        wordSpacing: "50px",
        textTransform: "uppercase",
        letterSpacing: "4px",
    }


    const circle = {
        background: "#3e3e74",
        height: "70px",
        width: "70px",
        borderRadius: '50%',
    }

    return (
    <div>
        <div style = {mainStyle}>



            <div style = {currentIssue}>
                <div style = {circle}>
                    WW
                </div>
            </div>
            <div style = {test}>
                one two three four
            </div>

        </div>

    </div>
    );
  }
}

export default MainStyle;
