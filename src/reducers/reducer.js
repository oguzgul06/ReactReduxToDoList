import { ADD, TOGGLE } from "../actions/methods";

const INITIAL_STATE = {
  list: [
    { id: 1, title: "Go Shopping", done: false },
    { id: 2, title: "Pay Bill", done: true },
    { id: 3, title: "Do Homework", done: false },
  ],
};

export const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD:
      return {
        ...state,
        list: [
          ...state.list,
          {
            id: state.list.length + 1,
            title: action.payload,
            done: false,
          },
        ],
      };
    case TOGGLE:
      return {
        ...state,
        list: state.list.map((item) =>
          item.id === action.payload ? { ...item, done: !item.done } : item
        ),
      };

    default:
      return state;
  }
};
