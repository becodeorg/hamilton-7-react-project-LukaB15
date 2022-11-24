import React from 'react'

export default function List({data}) {
  // console.log(data.id);
  return (
    <ul>
      {data.map(item=>(
        <li key={item.id}>
          <p>{item.name}</p>
        </li>
      ))}
    </ul>
  )
}
