import { combineReducers } from 'redux'

import common from './common.reducer'

// COMBINE REDUCERS
const rootReducer = combineReducers({
    common,
})

export default rootReducer
