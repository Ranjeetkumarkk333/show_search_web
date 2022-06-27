import { createSelector } from "reselect";
import { State } from "./store";
// import { createSelector } from "react-redux";
const showsStateSelector =(s:State)=> s.shows;

export const showsQuerySelector = createSelector(
    showsStateSelector, 
    (showState) =>showState.query );

export const showEntitiesSelector = createSelector(
    showsStateSelector, 
    (showState)=>showState.entities);

const showsAgainstQuerySelector = createSelector(
    showsStateSelector, 
    (showState)=> showState.againstQuery);

    const showsIdSelector = createSelector(
        showsQuerySelector,
        showsAgainstQuerySelector,
        (query, againstQuery)=> againstQuery[query] || []
    );

    export const showsSelector = createSelector(
        showsIdSelector,
        showEntitiesSelector,
        (ids, entities)=> ids.map((id) => entities[id])
        );
