import React from 'react'

const Band = props => {
    console.log(props.text)
  return (
    <li>      <span>{props.text}</span><button onClick={() => props.delete(props.id)}>DELETE</button>
    </li>
  );
};

export default Band; 
