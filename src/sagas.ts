import { call, takeLatest, put, delay } from "@redux-saga/core/effects";
import { AnyAction } from "redux";
import createSagaMiddleware from "redux-saga";
import { showDetailsFetchedAction, showsFetchedAction, SHOWS_DETAILS_FETCH, SHOWS_FETCH } from "./actions/shows";
import { getShowDetails, getShows } from "./api";

export const sagaMiddleware= createSagaMiddleware()

function* fetchShowsSaga(action:AnyAction):Generator<any, any, any>{
    yield delay(500)
    const query=action.payload;
    if(!query) {
        return
    }
const data = yield call(getShows, query);
console.log('data', data)
yield put(showsFetchedAction(query, data))
};

function* fetchShowDetailsSaga(action:AnyAction):Generator<any, any, any>{
    const id=action.payload;
    if(!id) {
        return
    }
const data = yield call(getShowDetails, id);
console.log('data', data)
yield put(showDetailsFetchedAction(data))
};

export function* rootSaga(){
    yield takeLatest(SHOWS_FETCH, fetchShowsSaga)
    yield takeLatest(SHOWS_DETAILS_FETCH, fetchShowDetailsSaga)
}