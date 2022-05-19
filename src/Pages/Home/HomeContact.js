import React from 'react';
import appointment from '../../assets/images/appointment.png'
import PrimaryButton from '../Shared/PrimaryButton';

const HomeContact = () => {
    return (
        <div style={{
            backgroundImage: `url(${appointment})`
        }} className='mb-20'>
            <div className='py-20'>
                <div className='text-center'>
                    <h2 className='text-secondary pb-5 text-2xl'>Contact Us</h2>
                    <h1 className='text-4xl pb-10 text-white'>Stay connected with us</h1>
                </div>
                <form className='w-5/12 grid mx-auto'>

                    <input type="text" name='email' placeholder="Email Address" className="border p-3 mb-5 rounded-md" />

                    <input type="text" name='subject' placeholder="Subject" className="border p-3 mb-5 rounded-md" />


                    <textarea className="border p-3 mb-5 rounded-md" name="message" id="" cols="30" rows="3" placeholder='Your Message'></textarea>

                    <PrimaryButton>Submit</PrimaryButton>

                </form>
            </div>

        </div>
    );
};

export default HomeContact;