import { combinedReducers } from 'redux'
import todos from './todos'
import visibilityFilter from './visibilityFilter'

export default combinedReducers({
    todos,
    visibilityFilter
})