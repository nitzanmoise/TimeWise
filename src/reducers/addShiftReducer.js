import {
  POST_SHIFT_REQUEST,
  POST_SHIFT_SUCCESS,
  POST_SHIFT_FAILURE,
  UPDATE_SHIFT,
} from "../actions/shiftTypes";

const initialState = {
  loading: false,
  shift: { name: "Nitzan" },
  error: "",
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_SHIFT:
      return {
        shift: action.payload,
      };

    case POST_SHIFT_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case POST_SHIFT_SUCCESS:
      return {
        loading: false,
        shift: action.payload,
        error: "",
      };
    case POST_SHIFT_FAILURE:
      return {
        loading: false,
        shift: {},
        error: action.payload,
      };

    default:
      return state;
  }
};

export default reducer;
