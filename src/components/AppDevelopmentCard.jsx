import React from 'react';

const AppDevelopmentCard = ({ top, bottom, left, right, image, title, description }) => {
    return (
        <div>
            <div className='my-20 sm:my-10'>
                <div className='w-2/3  mx-auto relative'>
                    <img className='w-full' src={image} alt="Tech Used" />
                    <div className='sm:w-[60%] bg-white border-2 flex flex-col gap-6 border-gray-700 px-8 py-6 w-2/3 absolute drop-shadow-3xl' style={{ top, bottom, left, right }}>
                        <h1 className=' text-2xl font-bold'>{title}</h1>
                        <p className=''>{description}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AppDevelopmentCard;
