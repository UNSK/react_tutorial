import React from 'react'

class CommentBox extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div class="commentBox">
        Hello, world! I am a CommentBox.
      </div>
    );
  }
}

React.render(
  <CommentBox />,
  document.getElementById('container')
);
