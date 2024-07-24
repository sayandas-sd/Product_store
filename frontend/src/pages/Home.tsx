import { Banner } from "../components/Banner"
import { Catagory } from "../components/Catagory"
import { Navbar } from "../components/Navbar"
import { Product } from "../components/Product"

export const Home = ({placeholder}:{placeholder : string})=>{
    return <div >
        <div>
            <Navbar placeholder={placeholder}/>
            <Banner />
            <div className="text:xl md:text-3xl md:font-semibold tracking-wide text-slate-800 flex justify-center items-center p-8 mt-3">
                TOP DEALS
            </div>
            <Catagory />
            <div className="text:xl md:text-3xl md:font-semibold tracking-wide text-slate-800 flex justify-center items-center p-8 mt-3">
                COLLECTIONS
            </div>
            <Product />
        </div>
    </div>
}