import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import BookingModal from './BookingModal';
import Service from './Service';
import Loading from '../../Shared/Loading'

const AvailableAppointment = ({ date }) => {
    // const [services, setServices] = useState([])
    const [treatment, setTreatment] = useState(null);
    const formattedDate = format(date, 'PP');


    const { data: services, isLoading, refetch } = useQuery(['available', formattedDate], () => fetch(`http://localhost:5000/available?date=${formattedDate}`).then(res =>
        res.json()))

    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div>
            <h2 className='text-center text-2xl text-secondary'>Available Appointment On: {format(date, 'PP')}</h2>
            <div className='grid lg:grid-cols-3 gap-10 gap-y-10 py-20'>
                {
                    services?.map(service => <Service
                        key={service._id}
                        service={service}
                        setTreatment={setTreatment}
                        

                    ></Service>)
                }
            </div>
            {treatment && <BookingModal 
            date={date} 
            treatment={treatment} 
            setTreatment={setTreatment}
            refetch={refetch}
            ></BookingModal>}
        </div>
    );
};

export default AvailableAppointment;