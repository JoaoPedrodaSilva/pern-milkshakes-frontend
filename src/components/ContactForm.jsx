export const ContactForm = ({ name, setName, email, setEmail, message, setMessage, setModalOpen }) => {
    const handleSubmit = event => {
        event.preventDefault()
        setModalOpen(true)
    }

    return (
        <form
            onSubmit={handleSubmit}
            className="w-2/3 h-full flex flex-col gap-4 text-xs xs:text-lg"
        >
            <div className="flex gap-2">
                <label htmlFor="name">Name: </label>
                <input type="text"
                    id="name"
                    value={name}
                    onChange={event => setName(event.target.value)}
                    maxLength={20}
                    required
                    className="px-1 rounded w-full"
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
                    className="px-1 rounded w-full"
                />
            </div>

            <div className="flex flex-col">
                <label htmlFor="message">Your message: </label>
                <textarea
                    name="message"
                    id="message"
                    cols="30"
                    rows="5"
                    value={message}
                    onChange={event => setMessage(event.target.value)}
                    maxLength={255}
                    required
                    className="px-1 rounded w-full resize-none"
                />
            </div>

            <button type="submit" className="w-1/2 rounded-lg p-1 bg-orange-400 hover:bg-orange-500 hover:text-white">
                Send Message
            </button>
        </form>
    )
}
