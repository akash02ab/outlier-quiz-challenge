import React, { useContext } from 'react'
import Info from './Info'
import Question from './Question'
import Options from './Options'
import { QuizContext } from '../../context/quiz'

const Quiz = () => {
  const { currentIndex, totalQuestions, quiz } = useContext(QuizContext)
  const problem = quiz[currentIndex]
  const isLastQuestion = currentIndex === totalQuestions - 1

  return (
    <div className='d-flex flex-column'>
      <Info
        index={currentIndex + 1}
        category={problem.category}
        difficulty={problem.difficulty}
        totalQuestions={totalQuestions}
      />
      <Question
        question={problem.question}
      />
      <Options
        correctAnswer={problem.correct_answer}
        incorrectAnswers={problem.incorrect_answers}
        isLastQuestion={isLastQuestion}
      />
    </div>
  )
}

export default Quiz
