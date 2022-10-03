import React, { useContext, useEffect } from 'react'
import { parseQuestions } from '../utils'
import { QuizContext } from '../context/quiz'
import questions from '../questions.json'
import styled from 'styled-components'
import ProgressBar from './ProgressBar'
import Quiz from './quiz/Quiz'
import Report from './Report'
import Score from './Score'
import Spinner from './Spinner'

const Wrapper = styled.div`
  height: calc(100vh - 1rem);
  padding: 2rem 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media screen and (max-width: 378px) {
    padding: 1rem 0;
  }
`

const App = () => {
  const { quiz, setQuiz, currentIndex, totalQuestions, setTotalQuestions } = useContext(QuizContext)
  const isQuizCompleted = currentIndex === totalQuestions

  useEffect(() => {
    if (questions && questions.length) {
      setTotalQuestions(questions.length)
      setQuiz(parseQuestions(questions))
    }
  }, [setQuiz, setTotalQuestions])

  if (!quiz.length) return <Spinner />

  return (
    <>
      <ProgressBar />
      <div className='container'>
        <Wrapper>
          {isQuizCompleted ? <Report /> : <Quiz />}
          <Score />
        </Wrapper>
      </div>
    </>
  )
}

export default App
