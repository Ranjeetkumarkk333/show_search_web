import { combineReducers} from "redux";
import { applyMiddleware, createStore } from "redux"
import { composeWithDevTools } from "redux-devtools-extension";
import showReducer from "./reducers/showReducer";
import { rootSaga, sagaMiddleware } from "./sagas";



const reducer=combineReducers ({
shows:showReducer
})

const store = createStore(reducer, composeWithDevTools(applyMiddleware(sagaMiddleware)));

sagaMiddleware.run(rootSaga)

export type State =ReturnType<typeof store.getState>;


export default store;