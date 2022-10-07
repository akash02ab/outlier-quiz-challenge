import React from 'react'
import '@testing-library/jest-dom'
import { cleanup, fireEvent, render, screen } from '@testing-library/react'
import { QuizProvider } from '../context/quiz'
import Options from '../components/quiz/Options'

afterAll(cleanup)

describe('Option component', () => {
  test('should have option buttons', () => {
    const correctAnswer = 'A'
    const incorrectAnswers = ['B', 'C', 'D']
    const options = [correctAnswer, ...incorrectAnswers]

    render(
      <QuizProvider>
        <Options
          correctAnswer={correctAnswer}
          incorrectAnswers={incorrectAnswers}
        />
      </QuizProvider>
    )

    const buttons = screen.getAllByRole('button')
    expect(buttons).toHaveLength(options.length)

    buttons.forEach((item) => {
      expect(options).toEqual(expect.arrayContaining([item.innerHTML]))
    })
  })

  test('should not display response when user has not clicked on options', () => {
    const correctAnswer = 'A'
    const incorrectAnswers = ['B', 'C', 'D']

    render(
      <QuizProvider>
        <Options
          correctAnswer={correctAnswer}
          incorrectAnswers={incorrectAnswers}
        />
      </QuizProvider>
    )

    const response = screen.queryByTestId('response')
    expect(response).not.toBeInTheDocument()
    const nextBtn = screen.queryByTestId('next-btn')
    expect(nextBtn).not.toBeInTheDocument()
  })

  test('should disable buttons after user clicks on any of the options', () => {
    const correctAnswer = 'A'
    const incorrectAnswers = ['B', 'C', 'D']
    const options = [correctAnswer, ...incorrectAnswers]

    render(
      <QuizProvider>
        <Options
          correctAnswer={correctAnswer}
          incorrectAnswers={incorrectAnswers}
        />
      </QuizProvider>
    )
    const randomInput = Math.floor(Math.random() * options.length)
    const selectedOption = screen.getByText(options[randomInput])
    fireEvent.click(selectedOption)
    options.forEach(option => {
      expect(screen.getByText(option).closest('button')).toHaveAttribute('disabled')
    })
  })

  test('should show response when user clicks on any of the options', () => {
    const correctAnswer = 'A'
    const incorrectAnswers = ['B', 'C', 'D']
    const options = [correctAnswer, ...incorrectAnswers]

    render(
      <QuizProvider>
        <Options
          correctAnswer={correctAnswer}
          incorrectAnswers={incorrectAnswers}
        />
      </QuizProvider>
    )
    const randomInput = Math.floor(Math.random() * options.length)
    const selectedOption = screen.getByText(options[randomInput])
    fireEvent.click(selectedOption)
    const response = screen.queryByTestId('response')
    expect(response).toBeInTheDocument()
    const nextBtn = screen.queryByTestId('next-btn')
    expect(nextBtn).toBeInTheDocument()
  })

  test('should show "Correct!" when user clicks on correct options other show "Sorry!', () => {
    const correctAnswer = 'A'
    const incorrectAnswers = ['B', 'C', 'D']
    const options = [correctAnswer, ...incorrectAnswers]

    render(
      <QuizProvider>
        <Options
          correctAnswer={correctAnswer}
          incorrectAnswers={incorrectAnswers}
        />
      </QuizProvider>
    )

    const randomInput = Math.floor(Math.random() * options.length)
    const selectedOption = screen.getByText(options[randomInput])
    const isCorrect = selectedOption === correctAnswer
    fireEvent.click(selectedOption)
    const response = screen.queryByTestId('response')
    if (isCorrect) {
      expect(response).toHaveTextContent('Correct!')
    } else {
      expect(response).toHaveTextContent('Sorry!')
    }
  })
})

test('should show "Next Question" as button text along with response', () => {
  const correctAnswer = 'A'
  const incorrectAnswers = ['B', 'C', 'D']
  const options = [correctAnswer, ...incorrectAnswers]

  render(
    <QuizProvider>
      <Options
        correctAnswer={correctAnswer}
        incorrectAnswers={incorrectAnswers}
        isLastQuestion={false}
      />
    </QuizProvider>
  )

  const randomInput = Math.floor(Math.random() * options.length)
  const selectedOption = screen.getByText(options[randomInput])
  fireEvent.click(selectedOption)
  const nextBtn = screen.queryByTestId('next-btn')
  expect(nextBtn).toHaveTextContent('Next Question')
})

test('should show "Finish!" as button text when it\'s the last question of the quiz', () => {
  const correctAnswer = 'A'
  const incorrectAnswers = ['B', 'C', 'D']
  const options = [correctAnswer, ...incorrectAnswers]

  render(
    <QuizProvider>
      <Options
        correctAnswer={correctAnswer}
        incorrectAnswers={incorrectAnswers}
        isLastQuestion
      />
    </QuizProvider>
  )

  const randomInput = Math.floor(Math.random() * options.length)
  const selectedOption = screen.getByText(options[randomInput])
  fireEvent.click(selectedOption)
  const nextBtn = screen.queryByTestId('next-btn')
  expect(nextBtn).toHaveTextContent('Finish!')
})
