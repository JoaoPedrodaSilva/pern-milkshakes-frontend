import { useState } from "react"
import { AiOutlinePlusCircle, AiOutlineMinusCircle } from "react-icons/ai"

export const FaqPage = () => {
    const [isOpen, setIsOpen] = useState({
        q1: false,
        q2: false,
        q3: false
    })

    const toggleOpen = () => {
        setIsOpen(!isOpen)
    }

    return (
        <section className="h-full flex flex-col gap-4 p-2">
            <article className="flex flex-col gap-2 text-xs bg-orange-200 rounded-md p-2">
                <div className="flex justify-between items-center">
                    <p className="font-bold">
                        Why our milkshakes are the best?
                    </p>
                    {isOpen ?
                        <AiOutlineMinusCircle
                            className="text-base"
                            onClick={toggleOpen}
                        />
                        :
                        <AiOutlinePlusCircle
                            className="text-base"
                            onClick={toggleOpen}
                        />
                    }
                </div>
                {isOpen &&
                    <p className="text-justify">
                        Cronut pop-up pitchfork enamel pin sustainable authentic fit. Freegan tofu bicycle rights leggings letterpress, beard tumblr live-edge. Drinking vinegar keytar edison bulb selfies literally scenester, copper mug cardigan street art iceland.
                    </p>
                }
            </article>

            <article className="flex flex-col gap-2 text-xs bg-orange-200 rounded-md p-2">
                <div className="flex justify-between items-center">
                    <p className="font-bold">
                        Who are you guys?
                    </p>
                    {isOpen ?
                        <AiOutlineMinusCircle
                            className="text-base"
                            onClick={toggleOpen}
                        />
                        :
                        <AiOutlinePlusCircle
                            className="text-base"
                            onClick={toggleOpen}
                        />
                    }
                </div>
                {isOpen &&
                    <p className="text-justify">
                        Next level big mood selfies slow-carb affogato pork belly godard pop-up woke schlitz chartreuse organic. Letterpress raw denim JOMO cliche brunch tousled, squid copper mug tilde polaroid drinking vinegar hashtag. Stumptown vice etsy austin tilde hashtag tonx tacos beard trust fund tbh ennui.
                    </p>
                }
            </article>

            <article className="flex flex-col gap-2 text-xs bg-orange-200 rounded-md p-2">
                <div className="flex justify-between items-center">
                    <p className="font-bold">
                        What's new in the hood?
                    </p>
                    {isOpen ?
                        <AiOutlineMinusCircle
                            className="text-base"
                            onClick={toggleOpen}
                        />
                        :
                        <AiOutlinePlusCircle
                            className="text-base"
                            onClick={toggleOpen}
                        />
                    }
                </div>
                {isOpen &&
                    <p className="text-justify">
                        Photo booth roof party irony, DSA adaptogen ramps green juice trust fund affogato readymade pop-up cred.
                    </p>
                }
            </article>
        </section>
    )
}
