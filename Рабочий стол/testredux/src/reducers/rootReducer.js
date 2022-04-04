
const initialState = {
    data: [],
    cart: [],
    item: {},
    total: 0,
    total_count: 0
};

const getTotal = (data) => {
    let total = 0;
    let total_count = 0;

    data.forEach((el) => {
        total_count += +el.count;
        total += el.count * el.price
    });

    return { total, total_count }
};

const reducer = (state = initialState, action) => {
    switch(action.type){
        case "SET_DATA": 
            return { ...state, data: action.payload }

        case "SET_ITEM": 
            const item = state.data.find(el => el.id == action.payload)
            if(item)
                return { ...state, item: {...item}}
            else
                return state

        case 'SET_CART':
                return { ...state, cart: [...action.payload], total: getTotal(action.payload).total, total_count: getTotal(action.payload).total_count } 
               
        case 'ADD_TO_CART':
            const Cart = JSON.parse(localStorage.getItem('cart')) || [];
            const Check = Cart.find(itm => itm.id == action.payload.id && itm.size == action.payload.size);
            if (Check) {
                Check.count = action.payload.count ? Check.count + +action.payload.count : Check.count + 1;
            } else {
                Cart.push({...action.payload, count: +action.payload.count ? +action.payload.count : 1 });
            }
            localStorage.setItem('cart', JSON.stringify(Cart));
            return { ...state, total_count: getTotal(Cart).total_count }
                    
        case 'DELETE_ITEM':
            const update = [ ...state.cart ];
            update.splice(action.payload, 1);
            localStorage.setItem('cart', JSON.stringify([...update]));
            return { ...state, cart: update, total: getTotal(update).total, total_count: getTotal(update).total_count }
            
        case 'DELETE_CART':
            localStorage.removeItem('cart');
            return {...state, cart: [], total: 0, total_count: 0 }

        case 'CHANGE_COUNT':
            const data = [ ...state.cart ];
            const Item = data.find((el) => el.id == action.payload.id && el.size == action.payload.size);
            Item.count = +action.payload.count;
            localStorage.setItem('cart', JSON.stringify([...data]));
            return { ...state, cart: data, total: getTotal(data).total, total_count: getTotal(data).total_count }   
        
        default: 
            return state
    }
}


export default reducer;
