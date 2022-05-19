import React from 'react';
import doctor from '../../assets/images/doctor.png'
import appointment from '../../assets/images/appointment.png'
import PrimaryButton from '../Shared/PrimaryButton';

const MakeAppointment = () => {
    return (
        <section style={{
            background: `url(${appointment})`
        }} className='flex mt-72 p-3 justify-between items-center'>
            <div className='flex-1 hidden lg:block'>
                <img className='mt-[-300px]' src={doctor} alt="" />
            </div>
            {/* <div className='flex-1'>
                <h3 className='text-xl text-primary font-bold pb-5'>Appointment</h3>
                <h2 className='text-4xl text-white py-5 pb-5'>Make an appointment Today</h2>
                <article className='pb-10 text-white'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</article>
                <PrimaryButton>Make An Appointment</PrimaryButton>
            </div> */}
        </section>
    );
};

export default MakeAppointment;