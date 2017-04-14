/*
 *
 * ArticleUpdate
 *
 */

import React from 'react';
import Helmet from 'react-helmet';
/*import {cyan500} from 'material-ui/styles/colors';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';*/
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';

import Paper from 'material-ui/Paper';
import MenuItem from 'material-ui/MenuItem';
import Menu from 'material-ui/Menu';

export default class ArticleUpdate extends React.PureComponent {\
  constructor(props) {
    super(props);
    this.state = {

    }
  }
  render() {
    return (
      <div>
        <Helmet title="ArticleUpdate" meta={[ { name: 'description', content: 'Description of ArticleUpdate' }]}/>

      //Remove this line and you can start writing your code here.
      </div>
    );
  }
}
