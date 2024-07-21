
interface Type {
    placeholder: string;
}

export const SearchBar = ({placeholder} : Type) => {
    return <div>
        <div>  
                <label className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                <div className="relative flex">
                    <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                        <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                        </svg>
                    </div>
                    <input 
                        id="search-input"
                        type="search"  
                        className="w-full px-7 w-96 py-2 ps-10 text-sm text-gray-900 outline-none rounded-lg bg-slate-100" 
                        placeholder={placeholder} 
                        required 
                    />
                </div>
        </div>
    </div>
}