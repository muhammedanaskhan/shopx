/*
Reducer handles all the events, dispatch actions on adding , removing to/from basket
*/ 

export const initialState = {
    basket : [],
};

//selector, .reduce() iterates over items and addUp the price

export const getBasketTotal = (basket) => 
    basket?.reduce((amount, item) => amount + item.price,0);


const reducer = (state,action) => {
    console.log(action)
    switch(action.type){

        case 'ADD_TO_BASKET':
            return{
                ...state,
                basket: [...state.basket, action.item],
            };

        default:
        return state;
    }
}

export default reducer;
