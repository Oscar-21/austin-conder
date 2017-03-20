/*
 *
 * Home
 *
 */

import React from 'react';
import Helmet from 'react-helmet';

export default class Home extends React.PureComponent {
  render() {
    return (
      <div>
        <Helmet title="Home" meta={[ { name: 'description', content: 'Description of Home' }]}/>
          <p>Inside of the div</p>
      </div>
    );
  }
}
