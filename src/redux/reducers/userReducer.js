const initialState = "";

const userReducer =(state=initialState, action) => {
    switch(action.type){
        case 'SET_USER':
            return action.payload;
            break;
            default:
                return state;
    };
}


export default userReducer;