import { RatingStars } from "./RatingStars"
import { IoMdArrowDropleft, IoMdArrowDropright } from "react-icons/io"

export const ReviewCard = ({ review, index, prevReview, nextReview }) => (
    <article key={index} className="w-5/6 h-24 xs:h-28 flex justify-center items-center">
        <IoMdArrowDropleft
            onClick={prevReview}
            className="text-3xl"
        />

        <div className="w-full flex h-full flex-col justify-start items-center gap-2 pt-1 rounded-lg bg-orange-300">
            <div className="w-full flex justify-around">
                <h2 className="font-semi-bold text-xs xs:text-sm font-bold">{review.reviewer_name}</h2>
                <RatingStars averageRating={null} reviewerRating={review.reviewer_rating} />
            </div>
            <p className="text-xs xs:text-sm px-5 text-justify overflow-scroll">{review.reviewer_comment}</p>
        </div>

        <IoMdArrowDropright
            onClick={nextReview}
            className="text-3xl"
        />
    </article>
)

