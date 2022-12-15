import React from 'react'

function Showlist(props) {
  return (
    <div>
      {/* {props.lists.map((lists)=>(
        <li>{lists.list}</li>
      ))} */}
      {props.lists.map((list) => (
        <li>{list}</li>
      ))}
    </div>
  )
}

export default Showlist
