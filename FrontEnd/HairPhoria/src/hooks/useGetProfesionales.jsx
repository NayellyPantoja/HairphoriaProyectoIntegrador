import { useState, useEffect } from "react";

export function useGetProfesionales() {
  const url = "http://52.91.14.141:8080/profesionales";
  const [dataFetchProfesionales, setDataProfesionales] = useState();
  const [isLoadingProfesionales, setIsLoadingProfesionales] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = sessionStorage.getItem("token");
        const response = await fetch(url, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        const data = await response.json();
        setDataProfesionales(data);
        setIsLoadingProfesionales(false);
      } catch (error) {
        console.error(error);
        setIsLoadingProfesionales(false);
      }
    };

    fetchData();
  }, []);

  return { dataFetchProfesionales, isLoadingProfesionales };
}