import React, { useContext } from 'react'
import { QuizContext } from '../context/quiz'
import styled from 'styled-components'

const ScoreBar = styled.div`
  height: 2rem;
`
const LowestScore = styled.div`
  z-index: 3;
  width: ${props => props.score};
  height: 100%;
`
const CurrentScore = styled.div`
  z-index: 2;
  width: ${props => props.score};
  height: 100%;
`
const MaxScore = styled.div`
  z-index: 1;
  width: ${props => props.score};
  height: 100%;
  background-color: lightgrey;
`

const Score = () => {
  const { answered, answeredCorrectly, totalQuestions } = useContext(QuizContext)
  const currentScore = (Math.round(answeredCorrectly / answered * 100) || 0) + '%'
  const lowestScore = Math.round((answeredCorrectly / totalQuestions * 100) || 0) + '%'
  const remainingQuestion = totalQuestions - answered
  const maxScore = Math.round(((answeredCorrectly + remainingQuestion) / totalQuestions * 100) || 0) + '%'

  return (
    <div>
      <div className='d-flex align-items-center justify-content-between mb-2'>
        <h6 data-testid='score'>Score: {currentScore}</h6>
        <h6 data-testid='max-score'>Max Score: {maxScore}</h6>
      </div>
      <ScoreBar className='progress bg-white position-relative border border-secondary'>
        <LowestScore
          aria-valuemin='0'
          aria-valuemax='100'
          className='progress-bar bg-dark position-absolute'
          role='progressbar'
          name='progressbar'
          score={lowestScore}
        />
        <CurrentScore
          aria-valuemin='0'
          aria-valuemax='100'
          className='progress-bar bg-secondary position-absolute'
          role='progressbar'
          name='progressbar'
          score={currentScore}
        />
        <MaxScore
          aria-valuemin='0'
          aria-valuemax='100'
          className='progress-bar position-absolute'
          role='progressbar'
          name='progressbar'
          score={maxScore}
        />
      </ScoreBar>
    </div>
  )
}

export default Score
