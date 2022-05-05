import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

import { rootReducer } from './reducers'

const initialStore: object = {}

export const store = createStore(rootReducer, initialStore, applyMiddleware(thunk))