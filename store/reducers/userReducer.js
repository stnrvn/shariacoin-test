const initialState = {
  email: "",
  password: "",
  isLoading: false,
  error: null,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_USER":
      const { _id, username, email, company_name, category } = action.payload;
      return {
        ...state,
        _id,
        username,
        email,
        company_name,
        category,
      }

    case "GET_USER_HISTORY":
      const history = action.payload;
      return {
        ...state,
        history,
        filteredHistory: history
      }
    default:
      return state;
  }
};

export default userReducer;
