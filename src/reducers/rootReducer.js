const initialState = {
    cards: [
        { id: 1, title: 'Alex', body: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias natusaut quam excepturi eum provident omnis.'},
        { id: 2, title: 'Joop', body: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias natusaut quam excepturi eum provident omnis.'},
        { id: 3, title: 'Sasha', body: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias natusaut quam excepturi eum provident omnis.'}

    ],
    users: []
}

const rootReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'DELETE_CARD':
            let newCard = state.cards.filter((card) => {
                return action.id !== card.id
            })
            return {
                ...state,
                cards: newCard
            }
        case 'FETCH_USERS':
            return {
                ...state,
                users: action.payload
            }
            default:
                return state
    }
}

export default rootReducer