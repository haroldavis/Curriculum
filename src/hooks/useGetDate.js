import { useState, useEffect } from 'react';


const useGetDate = (url) => {
    const [mydata, setData] = useState([]);

    useEffect(() => {
        fetch(url)
            .then(response => response.json())
            .then(data => setData(data))
    }, []);

    return mydata;
} 

export default useGetDate;