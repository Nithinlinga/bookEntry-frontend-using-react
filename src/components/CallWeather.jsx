import { useEffect, useState } from 'react';
import './App.css'
import apiCall from './api/api';

function CallWeather() {

  const [data, setData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            const result = await apiCall("");
            setData(result);
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

export default CallWeather
