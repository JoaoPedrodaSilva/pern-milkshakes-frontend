import axios from "../axios"
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { BackButton } from "../components/BackButton"
import { MilkshakeHeader } from "../components/MilkshakeHeader"
import { ReviewCard } from "../components/ReviewCard"

export const ReviewsPage = () => {
    const { id } = useParams()
    const [selectedMilkshake, setSelectedMilkshake] = useState(null)
    const [milkshakeReviews, setMilkshakeReviews] = useState(null)
    const [reviewIndex, setReviewIndex] = useState(0)

    //get selected milkshake from database
    useEffect(() => {
        const getSelectedMilkshake = async () => {
            try {
                const response = await axios.get(`/api/milkshake/${id}`)
                setSelectedMilkshake(response.data.milkshake)
                setMilkshakeReviews(response.data.reviews)
            } catch (error) {
                console.log(error)
            }
        }
        getSelectedMilkshake()
    }, [])

    //previous and next review functions
    const prevReview = () => {
        setReviewIndex(index => {
            if (index === 0) {
                return milkshakeReviews.length - 1
            } else {
                return index - 1
            }
        })
    }
    const nextReview = () => {
        setReviewIndex(index => {
            if (index === milkshakeReviews.length - 1) {
                return 0
            } else {
                return index + 1
            }
        })
    }


    return (
        <section className="w-full h-full flex flex-col justify-start bg-orange-200 relative">
            <BackButton route={`/milkshake/${id}`} />
            {selectedMilkshake && <MilkshakeHeader selectedMilkshake={selectedMilkshake} />}

            {selectedMilkshake && (
                <div className="h-full flex flex-col justify-around items-center">

                    {/* render in case of no reviews */}
                    {milkshakeReviews.length === 0 ? (
                        <div className="w-1/2 flex flex-col justify-center items-center text-xs xs:text-sm p-3 rounded-lg bg-orange-300">
                            <p>No reviews yet!</p>
                        </div>

                        /* render in case of reviews */
                    ) : (
                        milkshakeReviews && milkshakeReviews.map((review, index) => {
                            if (reviewIndex === index) {
                                return (
                                    <ReviewCard
                                        key={index}
                                        review={review}
                                        index={index}
                                        prevReview={prevReview}
                                        nextReview={nextReview}
                                    />
                                )
                            }
                        })
                    )}
                </div>
            )}
        </section>
    )
}
