import React from 'react'
import '@testing-library/jest-dom'
import { cleanup, render, screen } from '@testing-library/react'
import { QuizProvider } from '../context/quiz'
import Score from '../components/Score'

afterAll(cleanup)

describe('Score component', () => {
  test('should have score values in range (0-100)', () => {
    render(
      <QuizProvider>
        <Score />
      </QuizProvider>
    )

    const score = screen.getByTestId('score')
    expect(score).toBeInTheDocument()
    const scoreValue = Number(score.innerHTML.match(/\d+/)[0])
    expect(scoreValue).toBeGreaterThanOrEqual(0)
    expect(scoreValue).toBeLessThanOrEqual(100)
  })

  test('should have max-score values in range (0-100)', () => {
    render(
      <QuizProvider>
        <Score />
      </QuizProvider>
    )

    const maxScore = screen.getByTestId('max-score')
    expect(maxScore).toBeInTheDocument()
    const maxScoreValue = Number(maxScore.innerHTML.match(/\d+/)[0])
    expect(maxScoreValue).toBeGreaterThanOrEqual(0)
    expect(maxScoreValue).toBeLessThanOrEqual(100)
  })

  test('should have all progress bar with width between (0-100%) inclusive', () => {
    render(
      <QuizProvider>
        <Score />
      </QuizProvider>
    )

    const progressbar = screen.getAllByRole('progressbar', { hidden: true })
    const isWidthInRange = progressbar.every((el) => el.clientWidth >= 0 && el.clientWidth <= 100)
    expect(isWidthInRange).toBeTruthy()
  })
})
