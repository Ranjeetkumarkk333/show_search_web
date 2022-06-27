import axios from "axios"
import { Show } from "./Modles/show";

export const getShows = async (query:string)=> {
    console.log("query", query)
    const response = await axios.get<{show:Show}[]>("https://api.tvmaze.com/search/shows?q=" + query);
    return response.data.map((s)=>s.show)
};

export const getShowDetails = async (id:number)=> {
    console.log("id", id)
    const response = await axios.get<{show:Show}[]>("https://api.tvmaze.com/shows/" + id);
    // console.log("rrrrrrrrrrrrrr", response.data)
    return response.data
};