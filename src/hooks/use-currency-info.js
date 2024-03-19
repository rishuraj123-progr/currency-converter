import {useEffect, useState} from "react"


function useCurrencyInfo(currency){
    const [data, setData] = useState({})
    useEffect(() => {
        fetch(`http://localhost:8000/store-api
        /currency.json`)
        .then((res) => res.json())
        .then((res) => setData(res[currency]))
        
    }, [currency])
    return data
}

export default useCurrencyInfo;