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

        case 'REMOVE_FROM_BASKET':
            const index = state.basket.findIndex(
                (basketItem) => basketItem.id === action.id
            );

            let newBasket = [...state.basket];

            if(index>=0){  //item found
                newBasket.splice(index,1);     // .splice -> At position (index) remove 1 Item
            }else{
                console.warn('Item not present')
            }
            return{
                ...state,
                basket: newBasket
            }


        default:
        return state;
    }
}

export default reducer;
