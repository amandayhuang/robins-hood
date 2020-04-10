import { combineReducers } from 'redux';
import SessionReducer from './session_reducer'
import ErrorsReducer from './errors_reducer'
import EntitiesReucer from './entities_reducer'

const RootReducer = combineReducers({
    entities: EntitiesReucer,
    session: SessionReducer,
    errors: ErrorsReducer,
})

export default RootReducer;