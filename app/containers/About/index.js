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

export default class About extends React.PureComponent {
  render() {

    return (
    <div>
        <Helmet title="About" meta={[ { name: 'description', content: 'Description of Home' }]}/>

        <header>
        </header>


        <main>

        </main>

        <footer>
        </footer>

    </div>
    );
  }
}
