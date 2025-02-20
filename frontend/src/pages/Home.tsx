import { Banner } from "../components/Banner"
import { Catagory } from "../components/Catagory"
import { Navbar } from "../components/Navbar"
import { Product } from "../components/Product"


export const Home = ({placeholder}:{placeholder : string})=>{
    return <div >
        <div>
            <Navbar placeholder={placeholder}/>
            <Banner />
            <div className="text:2xl font-semibold md:text-3xl md:font-semibold tracking-wider font-mono text-slate-800 flex justify-center items-center p-8 mt-3">
                TOP DEALS
            </div>
            <Catagory />
            <div className="text:2xl font-semibold md:text-3xl md:font-semibold tracking-wider font-mono text-slate-800 flex justify-center items-center p-8 mt-3">
                COLLECTIONS
            </div>
            <Product />
        </div>
    </div>
}