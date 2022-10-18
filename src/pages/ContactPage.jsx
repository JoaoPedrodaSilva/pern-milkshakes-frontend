import { useState } from "react"
import { ContactForm } from "../components/ContactForm"

export const ContactPage = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [message, setMessage] = useState("")

    return (
        <section>
            <ContactForm
                name={name}
                setName={setName}
                email={email}
                setEmail={setEmail}
                message={message}
                setMessage={setMessage}
            />
        </section>
    )
}
