import axios from 'axios';
import { useEffect, useState } from 'react'


function useGif(tag) {

    const API_KEY = import.meta.env.VITE_REACT_APP_GIPHY_API_KEY;
    const randomGifUrl = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`
    const tagGifUrl = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}`

    const [gif, setGif] = useState('')
    const [loading, setloading] = useState(false)

    async function fetchData() {
        setloading(true)
        const { data } = await axios.get(tag ? tagGifUrl : randomGifUrl)
        const imageSource = data.data.images.downsized_medium.url
        console.log(data)
        setGif(imageSource)
        setloading(false)
    }

    useEffect(() => {
        fetchData()
    }, [])

    return { gif, loading, fetchData }
}

export default useGif
