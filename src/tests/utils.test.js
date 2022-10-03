import '@testing-library/jest-dom'
import { getRandomizeOptions, getStarRating, parseQuestions } from '../utils'

describe('get star rating', () => {
  it('easy should return 1', () => {
    expect(getStarRating('easy')).toBe(1)
  })
  it('medium should return 2', () => {
    expect(getStarRating('medium')).toBe(2)
  })
  it('hard should return 3', () => {
    expect(getStarRating('hard')).toBe(3)
  })
  it('any random string or non-string value should return 0', () => {
    expect(getStarRating('very-hard')).toBe(0)
    expect(getStarRating(null)).toBe(0)
  })
})

const options = ['A', 'B', 'C', 'D']

describe('get randomize options', () => {
  it('should return shuffled array of same length', () => {
    expect(getRandomizeOptions(options)).toHaveLength(options.length)
  })
  test('should return shuffled array that contains all the elemnts which was originally present in options array', () => {
    expect(getRandomizeOptions(options).every(value => options.includes(value))).toBe(true)
  })
})

const questions = [
  {
    'category': 'Entertainment%3A%20Video%20Games',
    'type': 'multiple',
    'difficulty': 'hard',
    'question': 'What%20was%20the%20name%20of%20the%20hero%20in%20the%2080s%20animated%20video%20game%20%27Dragon%27s%20Lair%27%3F',
    'correct_answer': 'Dirk%20the%20Daring',
    'incorrect_answers': [
      'Arthur',
      'Sir%20Toby%20Belch',
      'Guy%20of%20Gisbourne'
    ]
  },
  {
    'category': 'Animals',
    'type': 'boolean',
    'difficulty': 'easy',
    'question': 'Kangaroos%20keep%20food%20in%20their%20pouches%20next%20to%20their%20children.',
    'correct_answer': 'False',
    'incorrect_answers': [
      'True'
    ]
  }
]

describe('parse question', () => {
  it('should return parsed (encoded uri format) array of same length', () => {
    expect(parseQuestions(questions)).toHaveLength(questions.length)
  })
  test('should return encoded string correctly', () => {
    const result = parseQuestions(questions)
    expect(result[0]['question']).toEqual(decodeURIComponent(questions[0]['question']))
  })
})
