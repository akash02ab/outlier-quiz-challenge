import React from 'react'

const Question = ({ question }) => {
  return (
    <h3 className='mb-md-5 mb-sm-2' data-testid='question'>{question}</h3>
  )
}

export default Question
