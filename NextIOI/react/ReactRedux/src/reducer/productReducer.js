const myStore = {
    loadingStatus : false,
    prod : [],
    errorStatus : null
}

export  function productReducer( store = myStore, action ){
    switch(action.type){
        case 'loading' : return ({ ...store, loadingStatus : !store.loadingStatus})
        case 'errorProd' : return ({ ...store, errorStatus : action.payload})
        case 'fetchProd' : return ({ ...store, prod : action.payload.products }) 
        default : return store;
    }
}


// action looks like { type : 'increment'}