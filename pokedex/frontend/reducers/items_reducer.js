import { RECEIVE_A_POKEMON} from '../actions/pokemon_actions';
import { merge } from 'lodash';

const itemsReducer = (state = {}, action) => {
  switch(action.type) {
    case RECEIVE_A_POKEMON:
      return merge({}, state, action.payload.items);
    default:
      return state;
  }
};

export default itemsReducer;
