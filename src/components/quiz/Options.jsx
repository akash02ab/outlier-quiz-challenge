import React, { useContext, useMemo, useState } from 'react'
import { QuizContext } from '../../context/quiz'
import { getRandomizeOptions } from '../../utils'

const Options = (props) => {
  const [isCorrect, setIsCorrect] = useState(false)
  const [showResponse, setShowResponse] = useState(false)
  const { setAnswered, setAnsweredCorrectly, setCurrentIndex } = useContext(QuizContext)
  const { correctAnswer, incorrectAnswers, isLastQuestion } = props
  const options = useMemo(() => getRandomizeOptions([correctAnswer, ...incorrectAnswers]), [correctAnswer, incorrectAnswers])

  const validateAnswer = (selectedAnswer) => {
    const isCorrect = correctAnswer === selectedAnswer

    if (isCorrect) {
      setAnsweredCorrectly((prev) => prev + 1)
      setIsCorrect(true)
    } else {
      setIsCorrect(false)
    }

    setAnswered((prev) => prev + 1)
    setShowResponse(true)
  }

  const switchToNextQuestion = () => {
    setCurrentIndex((prev) => prev + 1)
    setShowResponse(false)
  }

  return (
    <>
      <div className='h-auto row-fluid'>
        {
          options.map((option, index) => (
            <button
              key={index}
              type='button'
              disabled={showResponse}
              onClick={() => validateAnswer(option)}
              className='btn btn-lg btn-outline-secondary my-2 mx-lg-2 col-md-12 col-lg-5'
            >{option}</button>
          ))
        }
      </div>
      <div className='w-100 d-flex flex-row flex-sm-column align-items-center justify-content-between'>
        {showResponse && <h2 className='my-2' data-testid='response'>{isCorrect ? 'Correct!' : 'Sorry!'}</h2>}
        {showResponse && <button className='btn btn-dark' onClick={switchToNextQuestion} data-testid='next-btn'>
          {isLastQuestion ? 'Finish!' : 'Next Question'}
        </button>}
      </div>
    </>
  )
}

export default Options
