
import logo from "../assets/images/logo.png";
import { useNavigate } from "react-router-dom";
import { LoginButton } from "./LoginButton";



export const Navbar = ({ 
    placeholder 
}: {placeholder: string})=>{
    const navigate = useNavigate();

  const handleClick = () => {
    navigate("/");
  };

    return <div className="border-b flex justify-evenly items-center md:justify-evenly p-1 cursor-pointer">
        <div className="flex justify-center flex-col cursor-pointer" onClick={handleClick}>
            <Logo/>
        </div>
        <div className="flex justify-center flex-col hidden lg:block">
            <SearchBar placeholder={placeholder}/>
        </div>
        <div className="flex justify-center relative flex-col">
            <Cart />
            <div className="bg-red-600 text-white w-5 h-5 p-1 rounded-full flex items-center justify-center absolute left-4 bottom-4">
                <p className="text-xs">0</p>
            </div>
        </div>
        <div className="flex justify-center flex-col">
            <Collection />
        </div>
        <div className="flex justify-center flex-col">
            <LoginButton/>
        </div>
    </div>
}


interface Type {
    placeholder: string;
}

const SearchBar = ({placeholder} : Type) => {
    return <div>
        <div> 
            <label className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                <div className="relative flex">
                    <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                        <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                        </svg>
                    </div>
                    <input 
                        id="search-input"
                        type="search"  
                        className="w-96 px-5 py-2 ps-10 text-sm text-gray-900 outline-none rounded-lg bg-slate-100" 
                        placeholder={placeholder} 
                        required 
                    />
                </div>
        </div>
    </div>
}


const Collection = ()=>{
    const navigate = useNavigate();

  const handleClick = () => {
    navigate("/products");
  };
    return <div>
        <div className="flex justify-center cursor-pointer" onClick={handleClick}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-8">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
            </svg>
            <div className="px-2 flex justify-center flex-col">
                Collections
            </div>
        </div>
    </div>
}




const Logo = ()=>{
    return <div>
        <img src={logo} alt="logo" className="h-14 w-14"/>
    </div>
}

const Cart = () => {
    const navigate = useNavigate();

    const handleClick = ()=>{
        navigate("/cart");
    }

    return <div>
        <div className="flex justify-center" onClick={handleClick}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-8">
                <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
            </svg>
            <div className="px-2 flex justify-center flex-col">
                Cart
            </div>
        </div>

    </div>
}