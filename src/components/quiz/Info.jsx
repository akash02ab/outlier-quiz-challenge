import React from 'react'
import { getStarRating } from '../../utils'
import StarRatings from 'react-star-ratings'

const Info = (props) => {
  const { category, difficulty, index, totalQuestions } = props
  const rating = getStarRating(difficulty)

  return (
    <div className='d-flex flex-column mb-5'>
      <h1 className='mb-0 text-dark' data-testid='question-index'>{`Question ${index} of ${totalQuestions}`}</h1>
      <span className='font-weight-bold text-secondary' data-testid='category'>{category}</span>
      <StarRatings
        rating={rating}
        numberOfStars={3}
        starDimension='25px'
        starRatedColor='#000'
      />
    </div>
  )
}

export default Info
