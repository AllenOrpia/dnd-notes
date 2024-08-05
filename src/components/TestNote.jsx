import React from 'react'

const TestNote = ({ note }) => {
    const body = JSON.parse(note.body)
  return (
    <div> {body} </div>
  )
}

export default TestNote