import React from 'react'
import CommentBox from './components/CommentBox.jsx'

React.render(
  <CommentBox url="comments.json" pollInterval={2000} />,
  document.getElementById('container')
);

