import React from 'react';

const UserOutput = (props) => {
  return (
    <div>
      <p>This is nice users output.</p>
      <p>Username: {props.userName} I like rendering here paragraph.</p>
    </div>
  )
}

export default UserOutput;