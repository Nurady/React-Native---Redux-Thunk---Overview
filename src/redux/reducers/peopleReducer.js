import {
  FETCHING_PEOPLE_FAILURE,
  FETCHING_PEOPLE_REQUEST,
  FETCHING_PEOPLE_SUCCESS,
} from '../actions/types';

const initState = {
  people: [],
  errorMessage: '',
  isFetching: false,
};

const peopleReducer = (state = initState, action) => {
  switch (action.type) {
    case FETCHING_PEOPLE_REQUEST:
      return {
        // ...state,
        isFetching: true,
      };
    case FETCHING_PEOPLE_FAILURE:
      return {
        ...state,
        errorMessage: action.payload,
        isFetching: false,
      };
    case FETCHING_PEOPLE_SUCCESS:
      return {
        ...state,
        people: action.payload,
        isFetching: false,
      };
    default:
      return state;
  }
};

export default peopleReducer;
