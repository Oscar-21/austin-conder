/**
*
* ArticleStyle
*
*/

import React from 'react';

class ArticleStyle extends React.PureComponent {
    render() {
        const testStyle = {
            display: "flex",
            flexDirection: "row",
            background: "#3e3e74",
            width: "100%",
            height: "1px"
        }

        const testStyle2 = {
            width: "16.66%",
            background: "#3e3e74",
            height: "200vh"
        }

        const testStyle3 = {
            width: "16.66%",
            height: "200vh",
            background: "#3e3e74",
            marginLeft: "80vw"
        }


    /*const square = {
        background: "#3e3e74",
        height: "70px",
        width: "100%",
        borderRadius: '50%',
    }*/
    return (
        <div>
            <div style = {testStyle}>
                <div style = {testStyle2}>
</div>
                    <div style = {testStyle3}></div>

</div>
</div>
    );
  }
}

export default ArticleStyle;
