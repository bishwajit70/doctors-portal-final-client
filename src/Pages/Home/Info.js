import React from 'react';
import InfoCard from './InfoCard';
import clock from '../../assets/icons/clock.svg'
import marker from '../../assets/icons/marker.svg'
import phone from '../../assets/icons/phone.svg'

const Info = () => {
    return (
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-5'>
            <InfoCard bgColor='bg-gradient-to-r from-secondary to-primary' cardDetail='Lorem Ipsum is simply dummy text of the pri' cardTitle='Opening Hours' img={clock}></InfoCard>
            <InfoCard bgColor='bg-gradient-to-r from-primary to-secondary' cardDetail='Lorem Ipsum is simply dummy text of the pri' cardTitle='Visit Our Location' img={marker}></InfoCard>
            <InfoCard bgColor='bg-gradient-to-r from-secondary to-primary' cardDetail='Lorem Ipsum is simply dummy text of the pri' cardTitle='Contact Us Now' img={phone}></InfoCard>
        </div>
    );
};

export default Info;