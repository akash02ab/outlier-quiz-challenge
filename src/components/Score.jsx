import React from 'react'
import styled from 'styled-components'
import { getScore } from '../utils'

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
  const score = getScore()

  return (
    <div>
      <div className='d-flex align-items-center justify-content-between mb-2'>
        <h6 data-testid='score'>Score: {score.currentScore}</h6>
        <h6 data-testid='max-score'>Max Score: {score.maxScore}</h6>
      </div>
      <ScoreBar className='progress bg-white position-relative border border-secondary'>
        <LowestScore
          aria-valuemin='0'
          aria-valuemax='100'
          className='progress-bar bg-dark position-absolute'
          role='progressbar'
          name='progressbar'
          score={score.lowestScore}
        />
        <CurrentScore
          aria-valuemin='0'
          aria-valuemax='100'
          className='progress-bar bg-secondary position-absolute'
          role='progressbar'
          name='progressbar'
          score={score.currentScore}
        />
        <MaxScore
          aria-valuemin='0'
          aria-valuemax='100'
          className='progress-bar position-absolute'
          role='progressbar'
          name='progressbar'
          score={score.maxScore}
        />
      </ScoreBar>
    </div>
  )
}

export default Score
