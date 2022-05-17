const initialState = {
    photos: [],
};

const productsReducer = (state = initialState, action) => {
    switch (action.type) {
        case "SET_PHOTOS":
            return {
                ...state,
                photos: action.payload,
            };
        default:
            return state;
    }
};
export default productsReducer;