import { createStore,compose,applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { rootReducers } from '../reducers/rootReducers'

const componseEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose

export const store = createStore(
    rootReducers,
    componseEnhancers(applyMiddleware(thunk))
)