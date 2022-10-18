export const ContactForm = ({ name, setName, email, setEmail, message, setMessage }) => {
    const handleSubmit = event => {
        event.preventDefault()
    }

    return (
        <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-5 p-5 text-xs xs:text-sm"
        >
            <div className="flex gap-2">
                <label htmlFor="name">Name: </label>
                <input type="text"
                    id="name"
                    value={name}
                    onChange={event => setName(event.target.value)}
                    maxLength={20}
                    required
                />
            </div>

            <div className="flex gap-2">
                <label htmlFor="email">Email: </label>
                <input type="email"
                    id="email"
                    value={email}
                    onChange={event => setEmail(event.target.value)}
                    maxLength={30}
                    required
                />
            </div>

            <div className="flex flex-col">
                <label htmlFor="message">Your message: </label>
                <textarea
                    name="message"
                    id="message"
                    cols="30"
                    rows="10"
                    value={message}
                    onChange={event => setMessage(event.target.value)}
                    maxLength={255}
                    required
                />
            </div>

            <button type="submit" className="">
                Send Message
            </button>
        </form>
    )
}
