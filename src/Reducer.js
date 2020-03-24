export const reducer = (state, action) => {
  switch (action.type) {
    case "GET_DATA": {
      return { ...state, users: action.users };
    }
    case "ADD_USERS": {
      return { ...state, users: [...state.users, ...action.newUsers] };
    }
    case "SEARCH_USER": {
      return { ...state, users: action.searchResults };
    }
    case "SORT_USERS_INC": {
      return {
        ...state,
        users: state.users.sort((a, b) =>
          a.name.first > b.name.first ? 1 : a.name.first < b.name.first ? -1 : 0
        )
      };
    }
    case "SORT_USERS_DEC": {
      return {
        ...state,
        users: state.users.sort((a, b) =>
          a.name.first < b.name.first ? 1 : a.name.first > b.name.first ? -1 : 0
        )
      };
    }
    default:
      return state;
  }
};
