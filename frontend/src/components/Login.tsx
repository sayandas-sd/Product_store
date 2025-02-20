import { useNavigate } from "react-router-dom";

export const Login = ()=> {
    const navigate = useNavigate();
    return <div>
        <div>
            <button onClick = {()=>{
                navigate("/login");
            }}
            type="button" 
            className="w-full text-white bg-gray-700 hover:bg-gray-900 font-medium rounded-lg text-sm px-6 py-2">Login</button>
        </div>   
    </div>
}
