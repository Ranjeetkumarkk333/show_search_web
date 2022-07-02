import { call, takeLatest, put, delay } from "@redux-saga/core/effects";
import { AnyAction } from "redux";
import createSagaMiddleware from "redux-saga";
import {
  showDetailsFetchedAction,
  showsFetchedAction,
  SHOW_DETAILS_FETCH,
  SHOWS_FETCH,
  actorsFetchedAction,
  ACTORS_FETCH,
} from "../Actions/shows";
import { getActors, getShowDetails, getShows } from "../api";
import { Actor } from "../Modles/actor";

export const sagaMiddleware = createSagaMiddleware();

function* fetchShowsSaga(action: AnyAction): Generator<any, any, any> {
  yield delay(500);
  const query = action.payload;
  if (!query) {
    return;
  }
  const data = yield call(getShows, query);
  console.log("data", data);
  yield put(showsFetchedAction(query, data));
}

function* fetchShowDetailsSaga(action: AnyAction): Generator<any, any, any> {
  const id = action.payload;
  const data = yield call(getShowDetails, id);
  yield put(showDetailsFetchedAction(data));
}

function* fetchActorsSaga(action: AnyAction): Generator<any, any, any> {
  const showId = action.payload;
  const data = yield call(getActors, showId);
  const actors = (data as { person: Actor }[]).map((d) => d.person);
  yield put(actorsFetchedAction(showId, actors));
}

export function* rootSaga() {
  yield takeLatest(SHOWS_FETCH, fetchShowsSaga);
  yield takeLatest(SHOW_DETAILS_FETCH, fetchShowDetailsSaga),
    yield takeLatest(ACTORS_FETCH, fetchActorsSaga);
}
