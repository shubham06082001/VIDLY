import React from 'react';

const Like = (props) => {
  let classes = 'fa fa-heart';
  if (!props.liked) classes += '-o';
  return (
    <div>
      <i
        style={{ cursor: 'pointer' }}
        onClick={props.onClick}
        className={classes}
      ></i>
    </div>
  );
};

export default Like;
