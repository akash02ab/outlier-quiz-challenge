import { useContext } from 'react'
import { QuizContext } from '../context/quiz'

export const parseQuizData = (questions) => {
  const result = questions.reduce((acc, curr) => {
    const category = decodeURIComponent(curr.category)
    const question = decodeURIComponent(curr.question)
    const correctAnswer = decodeURIComponent(curr.correct_answer)
    const incorrectAnswer = curr.incorrect_answers.map((option) => decodeURIComponent(option))
    return [...acc, {
      ...curr,
      category: category,
      question: question,
      correct_answer: correctAnswer,
      incorrect_answers: incorrectAnswer
    }]
  }, [])
  return result
}

export const getStarRating = (difficulty) => {
  switch (difficulty) {
    case 'hard': return 3
    case 'medium': return 2
    case 'easy': return 1
    default: return 0
  }
}

export const getRandomizeOptions = (options) => {
  for (let i = options.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    const temp = options[i]
    options[i] = options[j]
    options[j] = temp
  }
  return options
}

export const getScore = () => {
  const { answered, answeredCorrectly, totalQuestions } = useContext(QuizContext)
  const currentScore = (Math.round(answeredCorrectly / answered * 100) || 0) + '%'
  const lowestScore = Math.round((answeredCorrectly / totalQuestions * 100) || 0) + '%'
  const remainingQuestion = totalQuestions - answered
  const maxScore = Math.round(((answeredCorrectly + remainingQuestion) / totalQuestions * 100) || 0) + '%'
  return { currentScore, lowestScore, maxScore }
}
