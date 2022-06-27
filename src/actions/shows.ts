import { Show } from "../Modles/show";

export const SHOWS_FETCH = 'shows fetch';
export const SHOWS_FECHED = 'shows fetched';

export const SHOWS_DETAILS_FETCH = 'shows details fetch';
export const SHOWS_DETAILS_FECHED = 'shows details fetched';

export const showsFetchAction =(query:string)=>({
    type:SHOWS_FETCH,
    payload:query
});

export const showsFetchedAction=(query:string, shows:Show[])=>({
    type:SHOWS_FECHED,
    payload:{query, shows}
});

export const showDetailsFetchAction =(id:number)=>({
    type:SHOWS_DETAILS_FETCH ,
    payload:id
});

export const showDetailsFetchedAction =(show:Show)=>({
    type:SHOWS_DETAILS_FECHED,
    payload:show
});