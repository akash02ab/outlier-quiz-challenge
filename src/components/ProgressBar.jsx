import React, { useContext } from 'react'
import { QuizContext } from '../context/quiz'

const ProgressBar = () => {
  const { answered, totalQuestions } = useContext(QuizContext)
  const width = Math.round(answered / totalQuestions * 100) + '%'

  return (
    <div className='progress rounded-0'>
      <div
        aria-label='Progress-bar'
        aria-valuenow='0'
        aria-valuemin='0'
        aria-valuemax='100'
        className='progress-bar bg-secondary'
        role='progressbar'
        style={{ 'width': width }}
      />
    </div>
  )
}

export default ProgressBar
