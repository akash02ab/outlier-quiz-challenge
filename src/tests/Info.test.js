import React from 'react'
import '@testing-library/jest-dom'
import { cleanup, render, screen } from '@testing-library/react'
import { QuizProvider } from '../context/quiz'
import Info from '../components/quiz/Info'

afterAll(cleanup)

describe('Info component', () => {
  test('should render with question index and category', () => {
    render(
      <QuizProvider>
        <Info />
      </QuizProvider>
    )

    const questionIndex = screen.getByTestId('question-index')
    expect(questionIndex).toBeInTheDocument()
    const category = screen.getByTestId('category')
    expect(category).toBeInTheDocument()
  })

  test('should have index of question to be less than or equal to total questions', () => {
    render(
      <QuizProvider>
        <Info index={0} />
      </QuizProvider>
    )

    const questionIndex = screen.getByTestId('question-index')
    const questionIndexValue = questionIndex.innerHTML.match(/\d+/g)
    const currentQuesIndex = Number(questionIndexValue[0])
    const totalQuestions = Number(questionIndexValue[1])
    expect(currentQuesIndex).toBeLessThanOrEqual(totalQuestions)
  })
})
