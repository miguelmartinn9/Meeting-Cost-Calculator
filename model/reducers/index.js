import {combineReducers} from "redux";
import addAttendeeReducer from '../reducers/addAttendees'

const rootReducer = ({
    attendees: addAttendeeReducer,
});

export default rootReducer;