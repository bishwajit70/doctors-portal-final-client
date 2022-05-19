import React from 'react';

const Service = ({ service, setTreatment }) => {
    const { name, slots } = service;
    return (
        <div className="card uppercase text-center bg-base-100 shadow-xl">
            <div className="card-body">
                <h2 className='text-2xl capitalize'>{name}</h2>
                <p>
                    {
                        slots.length > 0 ?
                            <span>
                                {slots[0]}
                            </span>
                            :
                            <span className='text-red-500'>
                                No slot available
                            </span>
                    }
                </p>


                <p className='uppercase'>{slots.length} {slots.length > 1 ? 'spaces' : 'space'} Available</p>


                <div className="">
                    <label
                        onClick={() => setTreatment(service)}
                        disabled={slots.length === 0}
                        htmlFor="booking-modal" className="btn btn-primary uppercase text-white font-bold bg-gradient-to-r from-secondary to-primary">Book Appointment</label>
                </div>
            </div>
        </div>
    );
};

export default Service;