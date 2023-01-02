import { FaMapMarkerAlt, FaPhoneAlt, FaMailBulk } from 'react-icons/fa'

export const ContactAddress = () => (
    <article className='w-1/3 xs:w-2/5 h-full flex flex-col justify-center text-[0.6rem] xs:text-[0.9rem] gap-3'>
        <div className='flex items-center gap-1'>
            <FaMapMarkerAlt />
            <div className='flex flex-col'>
                <h4>Milkshake Project</h4>
                <p>Somewhere, SW</p>
            </div>
        </div>

        <div className='flex items-center gap-1'>
            <FaPhoneAlt />
            <h4>(555)555-5555</h4>
        </div>

        <div className='flex items-center gap-1'>
            <FaMailBulk />
            <h4>milk@shakes.com</h4>
        </div>
    </article>
)

