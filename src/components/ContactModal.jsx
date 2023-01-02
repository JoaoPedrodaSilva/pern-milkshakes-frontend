import { useEffect } from "react"

export const ContactModal = ({ name, email, modalOpen, setModalOpen }) => {

    useEffect(() => {
        const timer = setTimeout(() => {
            setModalOpen(false)
        }, 5000)
        return () => clearTimeout(timer)
    }, [modalOpen])

    return (
        <aside className={modalOpen ? `rounded-md p-2 bg-orange-200 xs:mt-2` : `hidden`}>
            <p className="text-xs xs:text-lg text-center text-green-600">
                Hello <strong>{name}</strong>, if it was a real website we would answer you at <strong>{email}</strong>. But thanks anyway!
            </p>
        </aside>
    )
}
