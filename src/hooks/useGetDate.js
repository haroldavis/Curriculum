import { useState, useEffect } from 'react';

const api = 'https://us-central1-cvharold-627d6.cloudfunctions.net/api'
const useGetDate = () => {
    const [mydata, setData] = useState([]);

    useEffect(() => {
        fetch(api)
            .then(response => response.json())
            .then(data => setData(data))
    }, []);

    return mydata;
} 

export default useGetDate;