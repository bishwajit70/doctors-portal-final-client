import React from 'react';
import Service from './Service';
import flouride from '../../assets/images/fluoride.png'
import cavity from '../../assets/images/cavity.png'
import whitening from '../../assets/images/whitening.png'

const Services = () => {
    const services = [
        {
            _id:1, 
            name:'Fluoride Treatment',
            description:'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the',
            img:flouride,
        },
        {
            _id:2, 
            name:'Cavity Treatment',
            description:'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the',
            img:cavity,
        },
        {
            _id:3, 
            name:'Whitening Treatment',
            description:'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the',
            img:whitening,
        },
    ]

    return (
        <div className='my-28'>
            <div className='text-center'>
                <h3 className='text-primary pb-5 uppercase text-2xl font-bold'>Our Services</h3>
                <h2 className='text-5xl'>Services We Provide</h2>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 pt-40 items-center justify-between'>
                {
                    services.map(service=><Service
                        key={service._id}
                        service={service}
                        ></Service>)
                }
                
            </div>
        </div>
    );
};

export default Services;