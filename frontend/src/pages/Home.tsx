import { Banner } from "../components/Banner"
import { Catagory } from "../components/Catagory"
import { Navbar } from "../components/Navbar"
import { Product } from "../components/Product"

export const Home = ({placeholder}:{placeholder : string})=>{
    return <div >
        <div>
            <Navbar placeholder={placeholder}/>
            <Catagory />
            <Banner />
            <Product />
        </div>
    </div>
}