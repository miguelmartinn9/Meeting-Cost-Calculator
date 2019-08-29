import { ADD_ATTENDEE, RESET_MEETING } from '../actions/actions';

const initialState = [];

export default  (state = initialState, action) => {

    switch(action.type){
        case ADD_ATTENDEE:
            return [...state, action.attendee];
        case RESET_MEETING:
            return [];
        default:
            return state;
    }
};