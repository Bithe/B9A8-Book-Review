import axios from "axios";
import { useEffect, useState } from "react";

const PagesToRead = () => {

    const [readBooks, setReadBooks] = useState([]);

    useEffect(()=>{
        axios.get('booksData.json')
        .then(data => console.log(data.data));
    },[])

    return (
        <div>
            <h1>Chart</h1>
        </div>
    );
};

export default PagesToRead;