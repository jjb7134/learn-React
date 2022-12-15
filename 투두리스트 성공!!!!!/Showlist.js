import React from 'react'

function Showlist(props) {
  return (
    <div>
      {/* {props.lists.map((lists)=>(
        <li>{lists.list}</li>
      ))} */}
      {/* {props.lists.map((list) => (
        <li>{list}</li>
      ))} */}
      {/* {<ul>{props.lists.map((new) => (
        <li>{new}</li>
      ))}</ul>} */}
      <ul>
        {props.lists.map((list) =>
        <li>{list}</li>
        )}
      </ul>
    </div>
  )
}

export default Showlist
