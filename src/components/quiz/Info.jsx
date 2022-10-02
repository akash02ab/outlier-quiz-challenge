import React, { useContext } from 'react'
import { QuizContext } from '../../context/quiz'
import { getStarRating } from '../../utils'
import StarRatings from 'react-star-ratings'

const Info = (props) => {
  const { index, category, difficulty } = props
  const { totalQuestions } = useContext(QuizContext)
  const rating = getStarRating(difficulty)

  return (
    <div className='d-flex flex-column mb-5'>
      <h1 className='mb-0 text-dark'>{`Question ${index} of ${totalQuestions}`}</h1>
      <span className='font-weight-bold text-secondary'>{category}</span>
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
