
import { ShoppingCart, Heart } from "lucide-react"

import { Navbar } from "../components/Navbar"

interface Product {
  id: number
  name: string
  price: number
  originalPrice?: number
  image: string
  noRestock?: boolean
  discount?: number
}

const products: Product[] = [
  {
    id: 1,
    name: "White Check-Shirt",
    price: 1849,
    originalPrice: 2500,
    discount: 26,
    image:
      "https://cdn.linenclub.com/media/catalog/product/cache/d8d099ed0f54be45d4eb2c71c1a3b40d/c/o/comsf614ck08318-b6_0_1.jpg",
    noRestock: true,
  },
  {
    id: 2,
    name: "Checkered Casual Dark Blue Shirt",
    price: 999,
    image:
      "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSbN_Av8MPW-I_tFR0H08MHK4Y3NNZzF80xV1fi6cs6U3IuDbyZhrkX6_5tHYUvI1oQQHnyQKbHobyuWlOGanPTyPnLrtX0RDVWKPs79FIAPh911N5tKClNOw&usqp=CAE",
  },
  {
    id: 3,
    name: "Roadster Men Grey Solid Shirt",
    price: 1299,
    originalPrice: 2850,
    discount: 28,
    image:
    "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSkm204Q5g7Ld2EA2LOYIje5HAA0O9zGlQVt6c2mzBxuJNOCIRzZvf34gLvYl6ZQ97eunU6vmE172RmpeuN-3GUlcIX_6CJwALKCbHpGewT&usqp=CAE"
  },
  {
    id: 4,
    name: "Cotton Linen: Sky Blue",
    price: 899,
    image:
    "https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1716543492_6546785.jpg?format=webp&w=480&dpr=2.0",
  },
  {
    id: 5,
    name: "Shirtease Olive Shirt",
    price: 999,
    image:
    "https://cdn.shopify.com/s/files/1/0420/7073/7058/files/5716535ea2d61553bcf8f789efe797b1.webp?v=1716357265&quality=50",
  },
  {
    id: 6,
    name: "Cream Structured Regular Shirt",
    price: 799,
    image:
    "https://cdn-media.powerlook.in/catalog/product/d/p/dp11162621.jpg?aio=w-1080",
    noRestock: true,
  },
  {
    id: 7,
    name: "Ecru Beige Tactile Casual Shirt",
    price: 899,
    image:
    "https://adn-static1.nykaa.com/nykdesignstudio-images/pub/media/catalog/product/6/6/66b79fbSS24_CSMSSRT6834_1.jpg?rnd=20200526195200&tr=w-256",
  },
  {
    id: 8,
    name: "Men Checked Shirt Cream",
    price: 999,
    image:
    "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSTe-qxwLXz3wkxPV3m8SHz6t0CB0iHTYt_ae_Iq7rx3ZWKJjCUtxGBA2ELQTl8DXLEZRPLv16nxzZCwUUbbNyQSlV0xGrgmA-iN43cHKE&usqp=CAE",
  },
]

export const Productspage = () => {
  return (
    <div>
          <Navbar placeholder="What are you looking for?"/>
      <div className="container mx-auto px-4 py-8 cursor-pointer">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div key={product.id} className="group relative border-0 rounded-none">
              <div className="p-0">
                <div className="relative aspect-[4/5] overflow-hidden bg-gray-100">
                  <img
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    className="object-cover transition-transform group-hover:scale-105 w-full h-full"
                  />
                  <div className="absolute top-4 right-4 flex flex-col gap-2">
                    <button className="h-8 w-8 rounded-full bg-white hover:bg-white/90">
                      <ShoppingCart className="h-4 w-4" />
                    </button>
                    <button className="h-8 w-8 rounded-full bg-white hover:bg-white/90">
                      <Heart className="h-4 w-4" />
                    </button>
                  </div>
                  {product.noRestock && (
                    <div className="absolute top-4 left-4 bg-red-500 text-xs px-2 py-1 rounded">
                      NO RESTOCK
                    </div>
                  )}
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-sm mb-2">{product.name}</h3>
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-semibold">RS.{product.price}</span>
                    {product.originalPrice && (
                      <>
                        <span className="text-sm text-muted-foreground line-through">RS.{product.originalPrice}</span>
                        <span className="text-xs text-red-500 font-medium">{product.discount}%OFF</span>
                      </>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

