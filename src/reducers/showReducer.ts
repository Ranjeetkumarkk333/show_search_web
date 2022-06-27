import { normalize, schema } from "normalizr"
import { Reducer } from "redux"
import { SHOWS_DETAILS_FECHED, SHOWS_FECHED, SHOWS_FETCH } from "../actions/shows"
import { Show } from "../Modles/show"

type showState ={
    entities:{
        [id:number]:Show
    },
    againstQuery:{
        [q:string]:number[]
    },
    query:string
}

const initialShowState:showState= {
    entities:{},
    againstQuery:{},
    query:''
}

const showReducer:Reducer<showState> =(state=initialShowState, action)=>{

    switch (action.type) {
        case SHOWS_FETCH:
           
            return {...state, query:action.payload}
        case SHOWS_FECHED:
            const {query, shows}=action.payload as {
                query:string,
                shows:Show[]
            };

            const showEntity = new schema.Entity("shows");
            const normalized = normalize(shows, [showEntity]);
            const normalizedShows = normalized.entities.shows;

            const ids = shows.map((s)=>s.id)
            return {
                ...state, 
                entities:{...state.entities, ...normalizedShows},
                againstQuery:{...state.againstQuery, [query]:ids},
            }
            case SHOWS_DETAILS_FECHED:
                const show = action.payload
                console.log("shwddd", show)
                return {
                    ...state, 
                    entities:{...state.entities, [show.id]:show}
                }
        default :
        return state;
    }
}

export default showReducer;