import React, { useState ,useEffect} from "react";
import './ImageGrid.css';
import axios from 'axios';
const ImageGrid=()=>{
    const [images,setImages]=useState([]);
    const [page,setPage]=useState(1);

    useEffect(() => {
        fetchImages(page);
    }, [page]);

    const fetchImages=async(page)=>{
        try{
            const response=await axios.get(`https://picsum.photos/v2/list?page=2&limit=100`);
            setImages([...images,...response.data]);
        }catch(error){
            console.error("Error Fetching images",error);
        }
    }
    return(
        <div className="container">
            <div className="row">
                {images.map((image,index)=>(
                    <div key={index} className="picture">
                        <img src={image.download_url} alt={image.author}/>
                    </div>
                ))}
                hello
            </div>

        </div>
    )
}
export default ImageGrid