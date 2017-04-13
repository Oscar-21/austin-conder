/**
*
* Comments
*
*/

import React from 'react';

import ReactDisqusThread from 'react-disqus-thread';
class Comments extends React.PureComponent {


          	handleNewComment = (comment) => {
        		console.log(comment.text);
        	}

  render() {
  const pushStyle = {

  }

    const lenStyle = {

    }
    return (
      <div>

<div style = {pushStyle}>
	<ReactDisqusThread
                style = {lenStyle}
        				shortname="example"
        				identifier="something-unique-12345"
        				title="Example Thread"
        				url="http://www.example.com/example-thread"
        				category_id="123456"
        				onNewComment={this.handleNewComment}/>

</div>

    </div>
    );
  }
}

export default Comments;
