const myStore = {
    value : 0
}

export  function reducer( store = myStore, action){
    switch(action.type){
        case 'increment' : return ({ ...store, value : store.value + 1})
        case 'incrementByVal' : return ({ ...store, value : store.value + action.payload})
        case 'decrement' : return ({ ...store, value : store.value - 1}) 
        default : return store;
    }
}

// action looks like { type : 'increment'}