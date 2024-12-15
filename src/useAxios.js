import axios from "axios"
import { useState } from "react"

const UseAxios=()=>{
    let url ="https://catfact.ninja/fact"
    const [response, setResponse] = useState()
    const [error, setError] = useState()
    const [loading, setLoading] = useState(false)

    const fetchData= async (configObj)=> {
        const {method} = configObj;

        setLoading(true)
        try {
            const {data} = await axios[method](url)
            console.log(data);

            setResponse(data.fact)
            
        } catch (error) {
            setError(error.message);

        }
        finally{
            setLoading(false)
        }
    }
    return [error,response,loading,fetchData]
}

export default UseAxios