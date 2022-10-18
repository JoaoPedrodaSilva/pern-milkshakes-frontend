import { useState } from "react"
import { FaqCard } from "../components/FaqCard"

export const FaqPage = () => {

    // dummy data
    const [allQuestions, setAllQuestions] = useState([
        {
            id: "q1",
            isOpen: false,
            question: "What is your milkshake the best?",
            answer: "Cronut pop-up pitchfork enamel pin sustainable authentic fit. Freegan tofu bicycle rights leggings letterpress, beard tumblr live-edge. Drinking vinegar keytar edison bulb selfies literally scenester, copper mug cardigan street art iceland. Mustache letterpress brunch cornhole butcher dreamcatcher. Echo park master cleanse bitters readymade sriracha you probably."
        },
        {
            id: "q2",
            isOpen: false,
            question: "Who are you guys?",
            answer: "Next level big mood selfies slow-carb affogato pork belly godard pop-up woke schlitz chartreuse organic. Letterpress raw denim JOMO cliche brunch tousled, squid copper mug tilde polaroid drinking vinegar hashtag. Stumptown vice etsy austin tilde hashtag tonx tacos beard trust fund tbh ennui. Cardigan hashtag cray bushwick, irony tumblr marfa tote bag sartorial offal fit."
        },
        {
            id: "q3",
            isOpen: false,
            question: "What's new in the hood?",
            answer: "Photo booth roof party irony, DSA adaptogen ramps green juice trust fund affogato readymade pop-up cred. Butcher tacos sus humblebrag authentic hell of single-origin coffee franzen tote bag. Semiotics adaptogen four dollar toast kinfolk raw denim butcher quinoa williamsburg. I'm baby ethical pork belly artisan tonx subway tile typewriter. Gluten-free neutra blue bottle stumptown."
        }
    ])


    return (
        <section className="h-full flex flex-col gap-4 p-2">
            {allQuestions.map(question => (
                <FaqCard
                    key={question.id}
                    id={question.id}
                    allQuestions={allQuestions}
                    setAllQuestions={setAllQuestions}
                />
            ))}
        </section>
    )
}
