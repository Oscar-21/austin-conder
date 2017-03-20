/*
 *
 * About
 *
 */

import React from 'react';
import Helmet from 'react-helmet';
import {Link} from "react-router";

export default class About extends React.PureComponent {
  render() {
    return (
    <div>
        <Helmet title="About" meta={[ { name: 'description', content: 'Description of About' }]}/>
        <header>
            <nav>
                <Link to= "/">Home</Link>
                <Link to= "/About">About</Link>
            </nav>
        </header>
            //Remove this line and you can start writing your code here.
        <main>
        </main>

        <footer>
        </footer>


    </div>
    );
  }
}
