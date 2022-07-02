import axios from "axios"
import { Actor } from "./Modles/actor";
import { Show } from "./Modles/show";

export const getShows = async (query:string)=> {
    console.log("query", query)
    const response = await axios.get<{show:Show}[]>("https://api.tvmaze.com/search/shows?q=" + query);
    return response.data.map((s)=>s.show)
};

export const getShowDetails = async (id:number)=> {
    console.log("id", id)
    const response = await axios.get<{show:Show}[]>("https://api.tvmaze.com/shows/" + id);
    return response.data
};

export const getActors = async (showId:number)=> {
    const response = await axios.get<{person:Actor}[]>("https://api.tvmaze.com/shows/" + showId + "/cast");
    return response.data
};