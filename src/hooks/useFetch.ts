import { useEffect, useState } from "react"


type FetchType<T> ={
    data: T | null;
    loading: boolean;
    error: string | null
}

export const useFetch = <T>(url:string) => {
    const [state, setState] = useState<FetchType<T>>({data: null, loading: true, error:null})


    useEffect(() => {

        const fetchData = async() => {
            try{
                const res = await fetch(url)

                if(!res.ok){
                    throw new Error('Failed to fetch data')
                }

                const json = await res.json();
                setState({data: json, loading: false, error: null})


            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            }catch(err: any){
                setState({data: null, loading: false, error: err.message})
            }
        }

        fetchData();

    },[url]);

    return state;

}