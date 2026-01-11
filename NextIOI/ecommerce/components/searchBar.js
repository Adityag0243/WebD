'use client'
import { useDispatch, useSelector } from "react-redux"
import { setQuery } from "@/store/slices/searchSlice";
import { useRouter, useSearchParams } from "next/navigation";
import { useState ,useEffect } from "react";

function SearchBar(){
    const searchParams =  useSearchParams();
    const router = useRouter();
    const dispatch = useDispatch();

    const query = useSelector((state) => state.search.query)
    const [localQuery, setLocalQuery] = useState(query);

    const handleChange = (e) =>{
        const value = e.target.value;
        setLocalQuery(value);
    }

    useEffect(()=>{
        const timer = setTimeout(() => {
            dispatch(setQuery(localQuery));
            const params = new URLSearchParams(searchParams.toString());
            if (localQuery) {
                params.set("search", localQuery);
            } else {
                params.delete("search");
            }
            router.replace(`?${params.toString()}`, { scroll: false });
        }, 600);
        return () => clearTimeout(timer);
    }, [localQuery]);

    return (
        <>
            <div className="flex ">
                <input 
                    placeholder="search item" 
                    type='text' 
                    name = 'search'
                    className="w-64 m-2 px-4 py-2 border rounded-xl shadow-gray-300 shadow-md"
                    onChange = {handleChange}
                /> 
                
            </div>
        </>
    )
}

export default SearchBar