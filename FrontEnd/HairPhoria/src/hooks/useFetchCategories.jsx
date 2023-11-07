import { useState, useEffect } from "react";

export function useFetchCategories() {
    const url = "http://52.91.14.141:8080/categorias";
    const [dataFetch, setData] = useState();
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(url);
                const data = await response.json();
                setData(data);
                console.log(data)
                setIsLoading(false);
            } catch (error) {
                console.error(error);
                setIsLoading(false);
            }
        };

        fetchData();
    }, []);

    return { dataFetch, isLoading };
}