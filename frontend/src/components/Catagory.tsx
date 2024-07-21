import image1 from '../assets/images/home.png';
import image2 from '../assets/images/beauty.png';
import image3 from '../assets/images/phone.png';
import image4 from '../assets/images/fashio.png';
import image5 from '../assets/images/electronics.png';
import image6 from '../assets/images/kids.png';
import image7 from '../assets/images/furniture.png';

interface Image {
  id: number;
  src: string;
  name: string;
}

const deskTopImages: Image[] = [
  { id: 1, src: image1, name: "Home" },
  { id: 2, src: image2, name: "Beauty" },
  { id: 3, src: image3, name: "Mobiles" },
  { id: 4, src: image4, name: "Fashion" },
  { id: 5, src: image5, name: "Electronics" },
  { id: 6, src: image6, name: "Kids" },
  { id: 7, src: image7, name: "Furniture" },
];


export const Catagory = () => {
  return (
    <div className="container mx-auto p-4">
      <div className="flex flex-wrap justify-center justify-evenly">
        {deskTopImages.map((image, index) => (
          <div className="flex flex-col items-center m-2" key={index}>
            <img src={image.src} className="w-24 h-24 md:w-27 md:h-27 object-cover" alt={image.name} />
            <span className="mt-2 text-sm md:text-base">{image.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};
