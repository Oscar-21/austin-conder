/*
 *
 * Browse
 *
 */

import React from 'react';
import Helmet from 'react-helmet';

import ArticleStyle from 'components/ArticleStyle';
export default class Browse extends React.PureComponent {
  render() {
        const backgroundStyle = {
     /*background: "  #F5F5F5",*/
      display: "flex",
      flexDirection: "column",
      width: "100%",
      background: "#408193"
    }
    return (
      <div style={backgroundStyle}>
        <Helmet title="Browse" meta={[ { name: 'description', content: 'Description of Browse' }]}/>

<header>
          <ArticleStyle/>
        </header>

      </div>
    );
  }
}
