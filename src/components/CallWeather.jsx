import { useEffect, useState } from 'react';
import axios from 'axios';

const CallWeather=()=> {

  const [data, setData] = useState(null);
  const apiUrl = import.meta.env.VITE_API_URL;

    useEffect(() => {
        const fetchData = async () => {
            const result = await axios.get(`${apiUrl}public/greet`, {
            });
            setData(result.data);
        };

        fetchData();
    }, []);

    return (
      <>
      <h1 className="text-3xl font-bold underline">
        Hello Temari
      </h1>
      <div>{data ? JSON.stringify(data) : "Loading..."}</div>
      
    </>
  )

}

export default CallWeather;