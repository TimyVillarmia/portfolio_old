
import { useState } from 'react';
import ChevronLeft from 'mdi-react/ChevronLeftIcon';
import ChevronRight from 'mdi-react/ChevronRightIcon';



export default function Carousel({ slides }) {

    const defaultDot = {
        width: "5px",
        height: "5px",
        borderRadius: "50%",
        backgroundColor: "white",
    }

    const activeDot = {
        width: "5px",
        height: "5px",
        borderRadius: "50%",
        backgroundColor: "#7BD3EA",
    }



    const [index , setIndex] = useState(0);
    
    const handlePrevious = () => {
        const newIndex = index - 1;
        setIndex(newIndex < 0 ? slides.length - 1 : newIndex);
    };


    const handleNext = () => {
        const newIndex = index + 1;
        setIndex(newIndex >= slides.length ? 0 : newIndex);
    };

    return (
        <div className=''>
            <div className="relative text-2xl">
                <div className=''>
                    <img src={slides[index].src} alt="" className='object-cover w-full h-64 rounded-[18px] bg-gradient-to-r from-black' />
                </div>
                <div className='flex justify-between absolute inset-0'>
                    <button  onClick={() => handlePrevious()}>
                        <ChevronLeft size={32}/>
                    </button>
                    <button onClick={() => handleNext()}>
                        <ChevronRight size={32}/>
                    </button>
                </div>
            </div>

            <div className='flex space-x-2 py-2 items-center justify-center'>
                {slides.map((_,slideIndex) => <button key={slideIndex} style={index == slideIndex ? activeDot : defaultDot}></button>)}
            </div>
        </div>
    );

}




