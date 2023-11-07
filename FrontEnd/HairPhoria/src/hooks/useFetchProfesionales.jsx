import { useState, useEffect } from "react";

export function useFetchProfesionales() {
    const url = "http://52.91.14.141:8080/profesionales"
    const [dataFetch, setData] = useState()
    useEffect(() => {
        fetch(url)
            .then((res) => res.json())
            .then((data) => setData(data))
    }, [])
    return dataFetch;
}