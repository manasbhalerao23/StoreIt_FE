import axios from "axios";
import { useEffect, useState } from "react";

export function usecontents(){
    const [contents, setcontents] = useState<any[]>([]);

    useEffect(() => {
        axios.get(`${import.meta.env.VITE_API_URL}/api/v1/content`,{
            headers: {
                "Authorization": localStorage.getItem("token")
            }
        })
        .then((response) => {
            setcontents(response.data.content)
        })
    }, [])
    return contents;
}