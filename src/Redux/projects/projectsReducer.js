const initialState = [];

const projectsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'TEST':
      return action.payload;

    default:
      return state;
  }
};

export default projectsReducer;
