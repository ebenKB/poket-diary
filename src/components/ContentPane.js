import React from 'react';

function contentPane(props) {
  return (
    <div className="content-pane"> {props.children} </div>
  )
}
export default contentPane;