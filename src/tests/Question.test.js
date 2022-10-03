import React from 'react'
import '@testing-library/jest-dom'
import { cleanup, render, screen } from '@testing-library/react'
import { QuizProvider } from '../context/quiz'
import Question from '../components/quiz/Question'

afterAll(cleanup)

describe('Question component', () => {
  it('should render the question', () => {
    const prop = 'What is the height of Mount Everest?'

    render(
      <QuizProvider>
        <Question question={prop} />
      </QuizProvider>
    )

    const question = screen.getByTestId('question')
    expect(question).toBeInTheDocument()
    expect(question).toHaveTextContent(prop)
  })
})
