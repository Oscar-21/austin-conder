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
import {Link} from "react-router";
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import Paper from 'material-ui/Paper';
import MenuItem from 'material-ui/MenuItem';
import Menu from 'material-ui/Menu';
import Responsive from 'react-responsive';

export default class AboutUpdate extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {

    }
  }
  render() {
    return (
      <div>
        <Helmet title="AboutUpdate" meta={[ { name: 'description', content: 'Description of AboutUpdate' }]}/>

      //Remove this line and you can start writing your code here.
      </div>
    );
  }
}
