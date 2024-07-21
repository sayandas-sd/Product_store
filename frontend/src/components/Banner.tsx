import image1 from '../assets/images/summer.jpg';
import image2 from '../assets/images/shoes.jpg';
import image3 from '../assets/images/shirt.jpg';
import image4 from '../assets/images/sale.jpg';
import image5 from '../assets/images/pant.jpg';

import { useEffect, useState } from 'react';


interface Image {
  src: string;
}

const deskTopImages: Image[] = [
  { src: image1 },
  { src: image2 },
  { src: image3 },
  { src: image4 },
  { src: image5 }
];

export const Banner = () => {
    const [currentImage, setCurrentImage] = useState<number>(0);

    const nextClick = () => {
        if(deskTopImages.length - 1 > currentImage){
            setCurrentImage(preve => preve + 1)
        }
    }

    const prevClick = () => {
        if(currentImage!=0) {
            setCurrentImage(preve => preve - 1);
        }
    }

    useEffect(()=>{
        const interval = setInterval(()=>{
            if(deskTopImages.length - 1 > currentImage){
                nextClick();
            } else {
                setCurrentImage(0);
            }
        },5000);
        
        return ()=>{
            clearInterval(interval)
        };

    },[currentImage])
        
     
  return (
    <div className="container mx-auto rounded md:h-full">
      <div className="h-full md:h-96 mx-auto w-full relative ">

        <div className='absolute z-10 w-full h-full md:flex items-center hidden '>
            <div className='flex justify-between w-full text-3xl'>
                <button onClick={prevClick} className='text-gray-400 p-3 pr-0 rounded-r-lg bg-white'><LeftArrow /></button>
                <button onClick={nextClick} className='text-gray-400 p-3 pr-0 rounded-l-lg bg-white'><RightArrow /></button>
            </div>
        </div>

            {/* desktop */}

        <div className='hidden md:flex h-full w-full overflow-hidden'>
            {deskTopImages.map((image, index) => (
            <div className="w-full h-full min-w-full min-h-full transition-transform duration-500 ease-in-out " 
            key={index}
            style={{transform: `translateX(-${currentImage * 100}%)`}}>
                <img src={image.src} className="w-full h-full" />
            </div>
            ))}
        </div>

            {/* mobile */}

        <div className='flex h-full w-full overflow-hidden md:hidden'>
            {deskTopImages.map((image, index) => (
            <div className="w-full h-full min-w-full min-h-full transition-transform duration-500 ease-in-out" 
            key={index}
            style={{transform: `translateX(-${currentImage * 100}%)`}}>
                <img src={image.src} className="w-full h-full" />
            </div>
            ))}
        </div>
            
      </div>
    </div>
  );
};

const LeftArrow = ()=>{
    return <div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
            <path fillRule="evenodd" d="M7.72 12.53a.75.75 0 0 1 0-1.06l7.5-7.5a.75.75 0 1 1 1.06 1.06L9.31 12l6.97 6.97a.75.75 0 1 1-1.06 1.06l-7.5-7.5Z" clipRule="evenodd" />
        </svg>
    </div>
}



export const RightArrow = ()=>{
    return <div>
         <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
            <path fillRule="evenodd" d="M16.28 11.47a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 0 1-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 0 1 1.06-1.06l7.5 7.5Z" clipRule="evenodd" />
        </svg>
    </div>
}
