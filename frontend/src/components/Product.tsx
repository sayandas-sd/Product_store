import { useNavigate } from "react-router-dom";
import Footer from "./Footer"

interface Product {
    id: number;
    src: string;
    name: string;
}

const product : Product[] = [
    {
        id: 1,
        src: "https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/product-images/3_Shirts_Po9GHja.jpg?format=webp&w=480&dpr=2.0",
        name: "White Check-Shirt",
    },
    {
        id: 2,
        src: "https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1739620211_5451831.jpg?format=webp&w=360&dpr=2.0",
        name: "White Check-Shirt",
    },
    {
        id: 3,
        src: "https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/product-images/2_OS_Tshirts_copy_2_Pv3UiEz.jpg?format=webp&w=480&dpr=2.0",
        name: "White Check-Shirt",
    },
    {
        id: 4,
        src: "https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/banner-images/shirts-homepage-banner.jpg?format=webp&w=1500&dpr=2.0",
        name: "White Check-Shirt",
    },{
        id: 5,
        src: "https://www.snitch.co.in/cdn/shop/files/1_3602d423-981d-4353-bbfc-0168aa16952d.jpg?v=1739862812&width=360",
        name: "shirts"
    },
    {
        id: 6,
        src: "https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1739791198_5840083.jpg?format=webp&w=480&dpr=2.0",
        name: "shirts"
    },
    {
        id: 7,
        src: "https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1713174134_2917548.jpg?format=webp&w=480&dpr=2.0",
        name: "shirts"
    },
    {
        id: 8,
        src: "https://www.snitch.co.in/cdn/shop/files/4MSS3838-01_1_d0688433-c381-4884-8ae9-2bdbbb192790.jpg?v=1739286958&width=360",
        name: "shirts"
    },
    {
        id: 9,
        src: "https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/product-images/polo_GdaaKnQ.jpg?format=webp&w=480&dpr=2.0",
        name: "shirts"
    },  
    {
        id: 10,
        src: "https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/product-images/bottoms_R88vrYi.jpg?format=webp&w=480&dpr=2.0",
        name: "shirts"
    },
    {
        id: 11,
        src: "https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/product-images/bestseller_shirts.jpg?format=webp&w=480&dpr=2.0",
        name: "shirts"
    },
    {
        id: 12,
        src: "https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1739953218_3146721.jpg?format=webp&w=480&dpr=2.0",
        name: "shirts"
    },
    {
        id: 13,
        src: "https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1710926252_4620002.jpg?format=webp&w=480&dpr=2.0",
        name: "shirts"
    },
    {
        id: 14,
        src: "https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1709619744_5984984.jpg?format=webp&w=480&dpr=2.0",
        name: "shirts"
    },
    {
        id: 15,
        src: "https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1738129932_5725144.jpg?format=webp&w=480&dpr=2.0",
        name: "shirts"
    },
    
    
    
]

export const Product = ()=>{
    const navigate = useNavigate();

  const handleClick = () => {
    navigate("/products");
  };
  

    return <div >
        <div className="container mx-auto cursor-pointer" onClick={handleClick}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-4">
                <div className="bg-red-100 h-96 rounded-3xl overflow-hidden">
                   <img 
                     src={product[0].src} 
                     alt={product[0].name}
                     className="w-full h-full object-cover"
                   />
                </div>
                <div className="bg-red-100 h-96 rounded-3xl overflow-hidden">
                   <img src={product[1].src} alt={product[1].name} />
                </div>
                <div className="bg-red-100 h-96 rounded-3xl overflow-hidden">
                    <img src={product[2].src} alt={product[2].name} />
                </div>
            </div>
        </div>
        <div className=" container bg-blue-100 mx-auto p-5 mt-8 rounded-xl cursor-pointer overflow-hidden" onClick={handleClick}>
            <img src={product[3].src} alt={product[3].name} className="rounded-xl" />
        </div>
        <div className="text:2xl font-semibold md:text-3xl md:font-semibold tracking-wider font-mono text-slate-800 flex justify-center items-center p-8 mt-7">
            LATEST COLLECTION
        </div>
        <div className="container mx-auto cursor-pointer" onClick={handleClick}>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4  mt-4">
                <div className="bg-red-100 h-96 overflow-hidden">
                    <img src={product[4].src} alt={product[4].name} />
                </div>
                <div className="bg-red-100 h-96 overflow-hidden">
                    <img src={product[5].src} alt={product[5].name} />
                </div>
                <div className="bg-red-100 h-96 overflow-hidden">
                    <img src={product[6].src} alt={product[6].name} />
                </div>
                <div className="bg-red-100 h-96 overflow-hidden">
                    <img src={product[7].src} alt={product[7].name} />
                </div>
            </div>  
        </div>
        <div className="text:2xl font-semibold  md:text-3xl md:font-semibold tracking-wider font-mono text-slate-800 flex justify-center items-center p-8 mt-7">
            BEST SELLERS
        </div>
        <div className="container mx-auto cursor-pointer" onClick={handleClick}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4  mt-4">
                <div className="bg-red-100 h-96 overflow-hidden">
                    <img src={product[8].src} alt={product[8].name} />
                </div>
                <div className="bg-red-100 h-96 overflow-hidden">
                    <img src={product[9].src} alt={product[9].name} />
                </div>
                <div className="bg-red-100 h-96 overflow-hidden">
                    <img src={product[10].src} alt={product[10].name} />
                </div>
            </div>
        </div>
        <div className="text:2xl font-semibold md:text-3xl md:font-semibold tracking-wider font-mono text-slate-800 flex justify-center items-center p-8 mt-5">
            SHOP BY RANDOM
        </div>
        <div className="container mx-auto cursor-pointer" onClick={handleClick}>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4  mt-4">
                <div className="bg-red-100 h-96 overflow-hidden">
                    <img src={product[11].src} alt={product[11].name} />
                </div>
                <div className="bg-red-100 h-96 overflow-hidden">
                    <img src={product[12].src} alt={product[12].name} />
                </div>
                <div className="bg-red-100 h-96 overflow-hidden">
                    <img src={product[13].src} alt={product[13].name} />
                </div>
                <div className="bg-red-100 h-96 overflow-hidden">
                    <img src={product[14].src} alt={product[14].name} />
                </div>
            </div>  
        </div>

       

        <div className="text:2xl font-semibold md:text-3xl md:font-semibold tracking-wider font-mono text-slate-800 flex justify-center items-center p-8 mt-5" >
            DISCOUNT PRODUCTS
        </div>

        <div className="text:2xl font-semibold tracking-widest text-white md:text-3xl md:text-white md:font-semibold tracking-wide text-slate-800 flex justify-center items-center p-3 mt-7 bg-red-600 md:bg-red-600">
            BEST BRAND
        </div>
        <div>
            ok
        </div>
        <div className="mx-auto bg-zinc-900 text-white md:text-white">
            <Footer/>
        </div>
    </div>
}