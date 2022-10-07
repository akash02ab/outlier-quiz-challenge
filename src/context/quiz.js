import React, { createContext, useState } from 'react'

export const QuizContext = createContext()

export const QuizProvider = (props) => {
  const [quiz, setQuiz] = useState([])
  const [totalQuestions, setTotalQuestions] = useState(0)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [answered, setAnswered] = useState(0)
  const [answeredCorrectly, setAnsweredCorrectly] = useState(0)
  const isQuizCompleted = currentIndex === totalQuestions
  return (
    <QuizContext.Provider value={{
      quiz,
      setQuiz,
      totalQuestions,
      setTotalQuestions,
      currentIndex,
      setCurrentIndex,
      answered,
      setAnswered,
      answeredCorrectly,
      setAnsweredCorrectly,
      isQuizCompleted
    }}>
      { props.children }
    </QuizContext.Provider>
  )
}
