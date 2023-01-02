import { useState } from "react"
import { ContactForm } from "../components/ContactForm"
import { ContactAddress } from "../components/ContactAddress"
import { ContactModal } from "../components/ContactModal"

export const ContactPage = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [message, setMessage] = useState("")
    const [modalOpen, setModalOpen] = useState(false)

    return (
        <section className="w-full h-full flex flex-col justify-start items-center gap-5 xs:gap-8 px-2 py-8">
            <div className="w-full flex justify-around items-center gap-3 xs:gap-5">
                <ContactForm
                    name={name}
                    setName={setName}
                    email={email}
                    setEmail={setEmail}
                    message={message}
                    setMessage={setMessage}
                    setModalOpen={setModalOpen}
                />
                <ContactAddress />
            </div>
            <ContactModal
                name={name}
                email={email}
                modalOpen={modalOpen}
                setModalOpen={setModalOpen}
            />
        </section>
    )
}
