import React, { useContext } from 'react'
import { QuizContext } from '../context/quiz'

const Report = () => {
  const { answeredCorrectly, totalQuestions } = useContext(QuizContext)
  const answeredIncorrectly = totalQuestions - answeredCorrectly
  const score = Math.round(answeredCorrectly / totalQuestions * 100)

  return (
    <div className='h-100 d-flex flex-column justify-content-center'>
      <h2 className='my-4'>Report</h2>
      <table className='table table-bordered'>
        <thead className='thead-dark'>
          <tr>
            <th scope='col'>Total</th>
            <th scope='col'>Correct</th>
            <th scope='col'>Incorrect</th>
            <th scope='col'>Score</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope='row'>{totalQuestions}</th>
            <th>{answeredCorrectly}</th>
            <th>{answeredIncorrectly}</th>
            <th>{score}%</th>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default Report
