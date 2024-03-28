import {useState, useEffect} from 'react';
import axios from "axios";

const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;

const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;

function useGif(tag){

    const [gif, setGif] = useState('');
    const [loading, setLoading] = useState(false);
  
    async function fetchData(tag){
        try{
            setLoading(true);
            const {data} = await axios.get(tag ? `${url}&tag=${tag}` : url);
            const imageSource = data.data.images.downsized_large.url;
            setGif(imageSource);
            console.log(imageSource);
            setLoading(false);
        }catch(error){
            if(error.response && error.response.status === 429){
                console.log('Rate limit exceeded');
            }
            else{
                console.log(error.message);
            }
        }
    }

    useEffect(() => {
        fetchData('tag');
    },[]);

    return {gif, loading, fetchData};
}

export default useGif