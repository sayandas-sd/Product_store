
import { useNavigate } from 'react-router-dom';

interface Image {
  id: number;
  src: string;
  name: string;
}

const deskTopImages: Image[] = [
  {
    id: 1,
    name: "Clothes",
    src: "https://cdn.linenclub.com/media/catalog/product/cache/d8d099ed0f54be45d4eb2c71c1a3b40d/c/o/comsf614ck08318-b6_0_1.jpg",
  },
  {
    id: 2,
    name: "Casual Outfit",
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9Wjm7eHDMEU2ENkIZ1mTT4Unw_l7gulL1NA&s",
  },
  {
    id: 3,
    name: "T-shirt",
    src: "https://www.snitch.co.in/cdn/shop/files/4MST2255-05-M5_1800x1800.jpg?v=1709377679",
  },
  {
    id: 4,
    name: "Pants",
    src: "https://assets.ajio.com/medias/sys_master/root/20240129/pJX1/65b6d6a616fd2c6e6ac558cc/-1117Wx1400H-467016973-black-MODEL.jpg",
  }, 
  {
    id: 5,
    name: "Shirt",
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYQqYkavV3rtgOUnNjjMUaH2M6R_eNPUt3Vw&s",
  },
  {
    id: 6,
    name: "Jacket",
    src: "https://assets.ajio.com/medias/sys_master/root/20231013/GuRP/65295576ddf77915193a646a/-473Wx593H-443011920-olive-MODEL2.jpg",
  }
  
];

export const Catagory = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/products");
  };

  return (
    <div className="container mx-auto p-4 bg-slate-50 rounded-lg cursor-pointer">
      <div className="flex flex-wrap justify-center justify-evenly">
        {deskTopImages.map((item) => (
          <div 
          className="flex flex-col items-center m-2" 
          key={item.id}
          onClick={handleClick}>
            <img src={item.src} className="w-24 h-24 md:w-27 md:h-27 object-cover rounded-full" alt={item.name} />
            <span className="mt-2 text-sm font-semibold md:text-base font-semibold">{item.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};
