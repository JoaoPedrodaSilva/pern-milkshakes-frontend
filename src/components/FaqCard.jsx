import { AiOutlinePlusCircle, AiOutlineMinusCircle } from "react-icons/ai"

export const FaqCard = ({ id, allQuestions, setAllQuestions }) => {
    const temporaryQuestions = []

    const toggleAnswers = (allQuestions, id) => {
        allQuestions.map(question => {
            if (question.id === id) {
                temporaryQuestions.push({
                    id: question.id,
                    isOpen: !question.isOpen,
                    question: question.question,
                    answer: question.answer
                })
            } else {
                temporaryQuestions.push({
                    id: question.id,
                    isOpen: false,
                    question: question.question,
                    answer: question.answer
                })
            }
        })
        setAllQuestions(temporaryQuestions)
    }

    return (
        <>
            {allQuestions.map(question => {
                if (question.id === id) {
                    return (
                        <article key={question.id} className="flex flex-col gap-2 text-xs xs:text-sm bg-orange-200 rounded-md p-2">

                            {/* question and plus/minus button */}
                            <div
                                className="flex justify-between gap-5 items-center"
                                onClick={() => toggleAnswers(allQuestions, question.id)}
                            >
                                <p className="font-bold">
                                    {question.question}
                                </p>
                                {question.isOpen ? (
                                    <AiOutlineMinusCircle
                                        className="text-lg cursor-pointer"
                                    />
                                ) : (
                                    <AiOutlinePlusCircle
                                        className="text-lg cursor-pointer"
                                    />
                                )}
                            </div>

                            {/* answer */}
                            {
                                question.isOpen && (
                                    <p className="text-justify">
                                        {question.answer}
                                    </p>
                                )
                            }

                        </article>
                    )
                }
            })}
        </>
    )
}


