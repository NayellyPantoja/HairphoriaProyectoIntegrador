import { useEffect, useState } from 'react';
import axios from 'axios';

const useGetCitys = () => {
  const apiUrl = "http://52.91.14.141:8080/ubicaciones";
  const [cities, setCities] = useState([]);
  const [error, setError] = useState(null);

  const getCities = async () => {
    try {
      const response = await axios.get(apiUrl);
      setCities(response.data);
    } catch (error) {
      setError(error);
    }
  };

  useEffect(() => {
    getCities();
  }, []);

  return { cities, error, getCities };
};

export default useGetCitys;