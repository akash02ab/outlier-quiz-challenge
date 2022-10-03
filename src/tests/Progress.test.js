import React from 'react'
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import ProgressBar from '../components/ProgressBar'
import { QuizProvider } from '../context/quiz'

describe('Progress bar', () => {
  render(
    <QuizProvider>
      <ProgressBar />
    </QuizProvider>
  )

  it('must have width between 0 to 100 (inclusive)', () => {
    const progressbar = screen.getByRole('progressbar')
    expect(progressbar.clientWidth).toBeGreaterThanOrEqual(0)
    expect(progressbar.clientWidth).toBeLessThanOrEqual(100)
  })
})
