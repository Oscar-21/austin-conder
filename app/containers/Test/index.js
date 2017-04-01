/*
 *
 * Test
 *
 */

import React from 'react';
import Helmet from 'react-helmet';

export default class Test extends React.PureComponent {


  constructor(props) {
    super(props);
    this.state = {
      title:"myTitle",
      body:"myBody",
      image:"myImage",
      preview:"mypreview"
    }
  }

  readProps = () => {
    console.log(this.state);
  }



  displayList = () => {
    return (
      <div>
          <ol>
            <li>1</li>
            <li>1</li>
            <li>1</li>
          </ol>
        </div>

      )
    }


  render() {
    return (
      <div>
        <Helmet title="Test" meta={[ { name: 'description', content: 'Description of Test' }]}/>

      {this.readProps()}

      {this.displayList()}

      </div>
    );
  }
}
