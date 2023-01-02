import { RatingStars } from "./RatingStars"
import { IoMdArrowDropleft, IoMdArrowDropright } from "react-icons/io"

export const ReviewCard = ({ review, index, prevReview, nextReview }) => (
    <article key={index} className="w-full h-28 xs:h-32 flex justify-center items-center">
        <IoMdArrowDropleft
            onClick={prevReview}
            className="text-3xl hover:scale-125 cursor-pointer"
        />

        <div className="w-full flex h-full flex-col justify-start items-center gap-2 pt-1 rounded-lg bg-orange-300">
            <div className="w-full flex justify-between px-5">
                <h2 className="font-semi-bold text-xs xs:text-base font-bold">{review.reviewer_name}</h2>
                <RatingStars averageRating={null} reviewerRating={review.reviewer_rating} />
            </div>
            <p className="text-xs xs:text-base text-justify px-5 overflow-auto scrollbar overflow-x-hidden">{review.reviewer_comment}</p>
        </div>

        <IoMdArrowDropright
            onClick={nextReview}
            className="text-3xl hover:scale-125 cursor-pointer"
        />
    </article>
)

