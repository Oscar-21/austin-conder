/*
 *
 * Blue
 *
 */

import React from 'react';
import Helmet from 'react-helmet';
import {Link} from "react-router";
import Responsive from 'react-responsive';
/*import NavBar from 'components/NavBar';*/
import ArticleStyle from 'components/ArticleStyle';
import MainStyle from 'components/MainStyle';
export default class Blue extends React.PureComponent {
    render() {
        return (
            <div>
                <Helmet title="Blue" meta={[ { name: 'description', content: 'Description of Blue' }]}/>

                <header>

                </header>

                <main>
                    <div>
                        <MainStyle/>
                        <ArticleStyle/>
                    </div>

                </main>

                <footer>

                </footer>

            </div>
    );
  }
}
