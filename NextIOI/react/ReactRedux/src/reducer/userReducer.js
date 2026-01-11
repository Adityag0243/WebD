const myStore = {
    isLoggedIn : true
}

export function userReducer( store = myStore, action){
    switch(action.type){
        case 'toggleState' : return ({ ...store, isLoggedIn : !(store.isLoggedIn)})
        default : return store;
    }
}