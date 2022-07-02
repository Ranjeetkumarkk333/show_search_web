import { normalize, schema } from "normalizr";
import { Reducer } from "redux";
import { ACTORS_FETCHED } from "../Actions/shows";
import { Actor } from "../Modles/actor";

type actorState = {
  entities: {
    [id: number]: Actor;
  };
};

const initialActorState: actorState = {
  entities: {},
};

const actorReducer: Reducer<actorState> = (
  state = initialActorState,
  action
) => {
  switch (action.type) {
    case ACTORS_FETCHED:
      const actors = action.payload.actors;
      const actorEntity = new schema.Entity("actors");
      const normalized = normalize(actors, [actorEntity]);
      const normalizedShows = normalized.entities.actors;
      return {
        ...state,
        entities: { ...state.entities, ...normalizedShows },
      };

    default:
      return state;
  }
};

export default actorReducer;
