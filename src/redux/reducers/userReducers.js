import actionType from '../action/Users/actionType';

const initialState = {
    users: [],
}
  
const userReducers = (state = initialState, action) => {
    switch (action.type) {
        case actionType.GET_USERS: return (
            {...state, users: action?.payload?.employees}
        )
        case actionType.DELETE_USERS : return (
            {...state,users : action?.payload}
        )
        case actionType.ADD_USERS : return (
            {...state,users : action?.payload}
        )
        case actionType.UPDATE_USERS : return (
            {...state,users : action?.payload?.employees}
        )

        default: return state
    }
}
  
export default userReducers