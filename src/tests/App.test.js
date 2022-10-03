import React from 'react'
import '@testing-library/jest-dom'
import { cleanup, render } from '@testing-library/react'
import { QuizProvider } from '../context/quiz'
import App from '../components/App'

afterAll(cleanup)

describe('App component', () => {
  it('should render the landing page', () => {
    render(
      <QuizProvider>
        <App />
      </QuizProvider>
    )
  })
})
