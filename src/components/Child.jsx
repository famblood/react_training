import React from 'react'

export default function Child(props) {
  return (
    <><p>{props.score}</p>
    <p>{props.home}</p>
    <p>{props.away}</p></>
  )
}
