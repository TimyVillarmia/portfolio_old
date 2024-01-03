import { useState } from 'react'
import Icon from '@mdi/react';
import { mdiAccount } from '@mdi/js';
 

export default function Carousel() {

    const images = [
        {
            src: "/images/1.jpg",
            alt: "Profile"
        },
        {
            src: "/images/2.jpg",
            alt: "Profile"
        },
        {
            src: "/images/3.jpg",
            alt: "Profile"
        },
        {
            src: "/images/4.jpg",
            alt: "Profile"
        },
        {
            src: "/images/5.jpg",
            alt: "Profile"
        },
        {
            src: "/images/6.jpg",
            alt: "Profile"
        },
    ]



    const [index , setIndex] = useState(0);
    // const [current, setCurrent] = useState(Array(images.length).fill(false))
    
    const handlePrevious = () => {
        const newIndex = index - 1;
       setIndex(newIndex < 0 ? images.length - 1 : newIndex);
    };
      
    const handleNext = () => {
        const newIndex = index + 1;
        setIndex(newIndex >= images.length ? 0 : newIndex);
    };








    return (
        <>
        <div className="">
            <img src={images[index].src} alt="" className="object-cover w-full h-64 rounded-[18px]"/>
        </div>
        {/* <button onClick={() => handlePrevious()}>
            <h1>Previous</h1>
        </button>
        <button onClick={() => handleNext()}>
            <h1>Next</h1>
        </button> */}
        <div className='flex space-x-2 py-4 items-center justify-center'>
            {images.map(() => <span className='w-[10px] h-[10px] rounded-[50%] bg-white inline-block'></span>)}
        </div>
        </>
    );

}




