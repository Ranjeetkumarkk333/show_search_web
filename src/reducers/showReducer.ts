import { normalize, schema } from "normalizr";
import { Reducer } from "redux";
import {
  SHOW_DETAILS_FETCHED,
  SHOWS_FETCHED,
  SHOWS_FETCH,
  SHOW_DETAILS_FETCH,
  ACTORS_FETCHED,
} from "../actions/shows";
import { Actor } from "../Modles/actor";
import { Show } from "../Modles/show";

type showState = {
  entities: {
    [id: number]: Show;
  };
  againstQuery: {
    [q: string]: number[];
  };
  query: string;
  showLoading: { [id: number]: boolean };
  showListLoading: { [q: string]: boolean };
  actors: { [showId: number]: number[] };
};

const initialShowState: showState = {
  entities: {},
  againstQuery: {},
  query: "",
  showLoading: {},
  showListLoading: {},
  actors: {},
};

const showReducer: Reducer<showState> = (state = initialShowState, action) => {
  switch (action.type) {
    case SHOWS_FETCH:
      console.log("qqqq2", action.payload);
      return {
        ...state,
        query: action.payload,
        showListLoading: { ...state.showListLoading, [action.payload]: false },
      };
    case SHOWS_FETCHED:
      const { query, shows } = action.payload as {
        query: string;
        shows: Show[];
      };
      console.log("qqqqq3", query);

      const showEntity = new schema.Entity("shows");
      const normalized = normalize(shows, [showEntity]);
      const normalizedShows = normalized.entities.shows;

      const ids = shows.map((s) => s.id);
      return {
        ...state,
        entities: { ...state.entities, ...normalizedShows },
        againstQuery: { ...state.againstQuery, [query]: ids },
        showListLoading: { ...state.showListLoading, [query]: true },
      };
    case SHOW_DETAILS_FETCH:
      return {
        ...state,
        showLoading: { ...state.showLoading, [action.payload]: false },
      };
    case SHOW_DETAILS_FETCHED:
      const show = action.payload;
      console.log("shwddd", show.id);
      return {
        ...state,
        entities: { ...state.entities, [+show.id]: show },
        showLoading: { ...state.showLoading, [+show.id]: true },
      };
    case ACTORS_FETCHED:
      const { showId, actors } = action.payload as {
        showId: number;
        actors: Actor[];
      };
      const actorsId = actors.map((a) => a.id);
      return {
        ...state,
        actors: { ...state.actors, [showId]: actorsId },
      };
    default:
      return state;
  }
};

export default showReducer;
