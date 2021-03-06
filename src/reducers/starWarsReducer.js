import /* we need our action types here*/ "../actions";
import { FETCHING, SUCCESS, FAILURE} from "../actions"

const initialState = {
  // Array characters, Boolean fetching, null error.
  characters: [],
  fetching: false,
  error: null
  
};
export const charsReducer = (state = initialState, action) => {
  switch (action.type) {
    // Fill me in with the important reducers
    // action types should be FETCHING, SUCCESS and FAILURE
    // your switch statement should handle all of these cases.
    case FETCHING: {
      return {
        ...state, 
        fetching: true,
        error: ''
      }
    }

    case SUCCESS: {
      return {
        fetching: false,
        error: null,
        characters: action.payload
      }
    }

    case FAILURE: {
      return {
        ...state,
        fetching: false,
        error: action.payload 
      }
    }

    default:
      return state;
  }
};
