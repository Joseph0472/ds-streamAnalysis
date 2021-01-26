import authReducer from './authReducer'
import companyReducer from './companyReducer'
import { combineReducers } from 'redux'

const rootReducer = combineReducers({
    auth: authReducer,
    company: companyReducer
});

export default rootReducer;