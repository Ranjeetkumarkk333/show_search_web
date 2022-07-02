import { combineReducers } from "redux";
import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import actorReducer from "../Reducers/actorsReducer";
import showReducer from "../Reducers/showReducer";
import { rootSaga, sagaMiddleware } from "../Sagas/sagas";

const reducer = combineReducers({
  shows: showReducer,
  actors: actorReducer,
});

const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(rootSaga);

export type State = ReturnType<typeof store.getState>;

export default store;
