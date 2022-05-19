import React from 'react';
import { format } from 'date-fns';
import auth from '../../../firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';
const BookingModal = ({ treatment, date, setTreatment }) => {
    const { name, slots } = treatment;

    const [user, loading, error] = useAuthState(auth);

    const handleBooking = event => {
        event.preventDefault()
        const slot = event.target.slot.value;
        setTreatment(null)
    }
    return (
        <div>


            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="font-bold text-secondary text-lg">{name}</h3>
                    <form onSubmit={handleBooking} className='grid grid-cols-1 mt-5 gap-y-3 justify-items-center'>
                        <input type="text" disabled value={format(date, 'PP')} className="input input-bordered w-full max-w-xs" />

                        <select name="slot" className="select select-bordered w-full max-w-xs">
                            {
                                slots.map((slot, index) => <option 
                                    key={index}
                                    value={slot}
                                    >{slot}</option>)
                            }
                        </select>

                        <input type="text" name="name" disabled value={user?.displayName || ''} className="input input-bordered w-full max-w-xs" />

                        <input type="email" name="email" disabled value={user?.email || ''} className="input input-bordered w-full max-w-xs" />

                        <input type="text" name="phone" placeholder="Phone Number" className="input input-bordered w-full max-w-xs" />
                        <input type="submit" value='Submit' className="btn btn-primary uppercase text-white font-bold bg-gradient-to-r from-secondary to-primaryinput input-bordered w-full max-w-xs" />

                    </form>

                </div>
            </div>
        </div >
    );
};

export default BookingModal;