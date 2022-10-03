import React from 'react'

const Question = ({ question }) => {
  return (
    <h3 className='mb-5' data-testid='question'>{question}</h3>
  )
}

export default Question
