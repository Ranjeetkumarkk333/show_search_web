import { createSelector } from "reselect";
import { Actor } from "../Modles/actor";
import { State } from "../Store/store";
const showsStateSelector = (s: State) => s.shows;
const actorsStateSelector = (s: State) => s.actors;

export const showsQuerySelector = createSelector(
  showsStateSelector,
  (showState) => showState.query
);

export const showEntitiesSelector = createSelector(
  showsStateSelector,
  (showState) => showState.entities
);

const showsAgainstQuerySelector = createSelector(
  showsStateSelector,
  (showState) => showState.againstQuery
);

const showsIdSelector = createSelector(
  showsQuerySelector,
  showsAgainstQuerySelector,
  (query, againstQuery) => againstQuery[query] || []
);

export const showsSelector = createSelector(
  showsIdSelector,
  showEntitiesSelector,
  (ids, entities) => ids.map((id) => entities[id])
);

export const showLoadingSelector = createSelector(
  showsStateSelector,
  (showsState) => showsState.showLoading
);

export const showListLoadingSelector = createSelector(
  showsQuerySelector,
  showsStateSelector,
  (query, showsState) => {
    return showsState.showListLoading[query];
  }
);

const showActorIdsSelector = createSelector(
  showsStateSelector,
  (showState) => showState.actors
);

const actorEntitiesSelector = createSelector(
  actorsStateSelector,
  (actorsState) => actorsState.entities
);
export const showActorsSelector = createSelector(
  showActorIdsSelector,
  actorEntitiesSelector,
  (showActorIds, actorEntities) => {
    return Object.keys(showActorIds).reduce<{ [id: number]: Actor[] }>(
      (showActors, showId) => {
        const actorIds = showActorIds[+showId];
        const actors = actorIds.map((id) => actorEntities[id]);
        return { ...showActors, [+showId]: actors };
      },
      {}
    );
  }
);
