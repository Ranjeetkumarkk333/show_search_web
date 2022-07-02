import { Actor } from "../Modles/actor";
import { Show } from "../Modles/show";

export const SHOWS_FETCH = 'shows fetch';
export const SHOWS_FETCHED = 'shows fetched';

export const SHOW_DETAILS_FETCH = 'shows details fetch';
export const SHOW_DETAILS_FETCHED = 'shows details fetched';

export const ACTORS_FETCH = 'actors fetch';
export const ACTORS_FETCHED = 'actors fetched';

export const showsFetchAction =(query:string)=>({
    type:SHOWS_FETCH,
    payload:query
});

export const showsFetchedAction=(query:string, shows:Show[])=>({
    type:SHOWS_FETCHED,
    payload:{query, shows}
});

export const showDetailsFetchAction =(id:number)=>({
    type:SHOW_DETAILS_FETCH ,
    payload:id
});

export const showDetailsFetchedAction =(show:Show)=>({
    type:SHOW_DETAILS_FETCHED,
    payload:show
});

export const actorsFetchAction =(showId:number)=>({
    type:ACTORS_FETCH,
    payload:showId
});

export const actorsFetchedAction=(showId:number, actors:Actor[])=>({
    type:ACTORS_FETCHED,
    payload:{showId, actors}
});
