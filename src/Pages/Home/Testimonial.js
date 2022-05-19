import React from 'react';
import quote from '../../assets/icons/quote.svg'
import people1 from '../../assets/images/people1.png'
import people2 from '../../assets/images/people2.png'
import people3 from '../../assets/images/people3.png'
import SingleTestimonial from './SingleTestimonial';
const Testimonial = () => {
    const reviews = [
        {
            _id: 1,
            img: people1,
            name: 'Winson Herry',
            description: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            address: 'California'
        },
        {
            _id: 2,
            img: people2,
            name: 'Jammy',
            description: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            address: 'Dhaka'
        },
        {
            _id: 3,
            img: people3,
            name: 'Robin Herry',
            description: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            address: 'Chattogram'
        },
    ]
    return (
        <div className='pb-20'>
            <div className='flex pt-20 justify-between'>
                <div>
                    <h3 className='text-primary pb-5 text-2xl'>Testimonial</h3>
                    <h1 className='text-4xl'>What Our Patients Says</h1>
                </div>
                <div>
                    <img className='w-24 lg:w-64' src={quote} alt="" />
                </div>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 pt-10'>
                {
                    reviews.map(review => <SingleTestimonial
                        key={review._id}
                        review={review}
                    ></SingleTestimonial>)
                }
            </div>
        </div>
    );
};

export default Testimonial;