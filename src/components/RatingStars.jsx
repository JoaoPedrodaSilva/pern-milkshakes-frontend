import React from 'react'
import { Link } from 'react-router-dom'
import { FaRegStar, FaStarHalfAlt, FaStar } from 'react-icons/fa'

export const RatingStars = ({ averageRating, totalRatings, id, reviewerRating }) => {
    const stars = []

    if (reviewerRating) {
        for (let i = 1; i <= 5; i++) {
            if (i <= reviewerRating) {
                stars.push(<FaStar key={i} className='text-orange-500' />)
            } else if (i === Math.ceil(reviewerRating) && !Number.isInteger(reviewerRating)) {
                stars.push(<FaStarHalfAlt key={i} className='text-orange-500' />)
            } else {
                stars.push(<FaRegStar key={i} className='text-orange-500' />)
            }
        }
    } else {
        for (let i = 1; i <= 5; i++) {
            if (i <= averageRating) {
                stars.push(<FaStar key={i} className='text-orange-500' />)
            } else if (i === Math.ceil(averageRating) && !Number.isInteger(averageRating)) {
                stars.push(<FaStarHalfAlt key={i} className='text-orange-500' />)
            } else {
                stars.push(<FaRegStar key={i} className='text-orange-500' />)
            }
        }
    }


    return (
        <Link to={`/milkshake/${id}/reviews`} className='flex items-center gap-1 text-xs xs:text-base text-orange-500 hover:underline'>
            {
                reviewerRating ?
                    <>
                        <div className='flex'>
                            {stars}
                        </div>
                    </>
                    :
                    !totalRatings ?
                        <>
                            <div className='flex'>
                                {stars}
                            </div>
                            <p>(0 reviews)</p>
                        </>
                        :
                        <>
                            <div className='flex'>
                                {stars}
                            </div>
                            <p>({totalRatings} reviews)</p>
                        </>
            }
        </Link>
    )
}