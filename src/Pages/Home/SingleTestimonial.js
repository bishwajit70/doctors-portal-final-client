import React from 'react';

const SingleTestimonial = ({ review }) => {
    const { img, description, name, address } = review
    return (
        <div className="card pb-20 bg-base-100 shadow-xl">
            <div className="card-body">
                <p>{description}</p>
            </div>
            <div className='flex justify-start items-center px-10'>
                <div className="avatar mr-5">
                    <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                        <img src={img} alt="" />
                    </div>
                </div>
                <div>
                    <h2 className="card-title">{name}</h2>
                    <h2 className="">{address}</h2>
                </div>
            </div>


        </div>
    );
};

export default SingleTestimonial;