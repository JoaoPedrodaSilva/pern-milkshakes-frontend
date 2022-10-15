import axios from "../axios"
import { useState, useEffect } from "react"
import { Link, useParams } from "react-router-dom"
import { IoMdReturnLeft, IoMdArrowDropleft, IoMdArrowDropright } from "react-icons/io"

export const ReviewsPage = () => {
    const { id } = useParams()
    const [selectedMilkshake, setSelectedMilkshake] = useState(null)
    const [milkshakeReviews, setMilkshakeReviews] = useState(null)
    const [reviewIndex, setReviewIndex] = useState(0)

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
        <section className="w-full h-full bg-orange-200 relative">
            <Link to={`/milkshake/${id}`} className="absolute top-1 left-[5%] ">
                <IoMdReturnLeft className="text-xl text-orange-600" />
                <p className="text-xs text-orange-600">Back</p>
            </Link>
            {selectedMilkshake && (
                <div className="h-full flex flex-col justify-around items-center">
                    <header className="flex flex-col text-sm xs:text-lg justify-center items-center">
                        <h1 className="font-bold">{selectedMilkshake.title}</h1>
                        <h2 className="font-semi-bold text-xs xs:text-sm">Flavor: {selectedMilkshake.flavor}</h2>
                    </header>
                    <img
                        src={selectedMilkshake.image_url}
                        alt=""
                        className="w-1/2 rounded-lg border-2 border-orange-400"
                    />

                    {milkshakeReviews.length === 0 && (<p className="h-24 xs:h-28">NO REVIEWS YET</p>)}

                    {milkshakeReviews && milkshakeReviews.map((review, index) => {
                        if (reviewIndex === index) {
                            return (
                                <article key={index} className="h-24 xs:h-28 flex justify-center items-center">
                                    <IoMdArrowDropleft
                                        onClick={prevReview}
                                        className="text-xl"
                                    />

                                    <div className="w-4/5 flex h-full flex-col justify-start items-center gap-2 rounded-lg bg-orange-300">
                                        <h2 className="font-semi-bold text-xs xs:text-sm text-center font-bold">{review.reviewer_name}</h2>
                                        <p className="text-xs xs:text-sm px-5 text-justify">{review.reviewer_comment}</p>
                                    </div>

                                    <IoMdArrowDropright
                                        onClick={nextReview}
                                        className="text-xl"
                                    />
                                </article>
                            )
                        }
                    })}
                </div>
            )}
        </section>
    )
}
