const initialState = {
    cards: [
        { id: 1, title: 'Alex', body: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias natusaut quam excepturi eum provident omnis.'},
        { id: 2, title: 'Joop', body: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias natusaut quam excepturi eum provident omnis.'},
        { id: 3, title: 'Sasha', body: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias natusaut quam excepturi eum provident omnis.'}

    ]
}

const rootReducer = (state = initialState, action) => {
    return state;
}

export default rootReducer