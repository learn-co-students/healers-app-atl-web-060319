

function reducer(oldState = {healers: [], searchTerm: ""}, action){
    console.log("this is the current state", oldState)
    switch (action.type){
        case 'ADD_ALL_HEALERS':
            return {...oldState, healers:action.value}

        case 'ADD_HEALER':
            return {...oldState, healers:[...oldState.healers, action.value]}

        case 'CHANGE_SEARCH':
            return {...oldState, searchTerm: action.value}

        default:
            return oldState
    }

}

export default reducer;