// Steps
// 1. think about the state you have in the Feed.js
// 2. Now bring that back here little bit pure function way


 const cartReducers = (state=[], action) =>{
    switch (action.type) {
        case 'TOGGLE_TO_CART':
            const id = action.id;
            return state.includes(id)?
                    state.filter(item => item !==id) : [...state, id]
        default:
            return state;
    }
}

export default cartReducers;