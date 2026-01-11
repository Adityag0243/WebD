import axios from 'axios'
import { useDispatch } from 'react-redux'

const PRODUCT_LIST_LOADING = 'loading'
const PRODUCT_LIST_ERROR = 'error'
const PRODUCT_LIST_FETCH = 'fetchProd'

export const loading = () => ({
    type : 'loading',
})

export const errorProd = (payload) => ({
    type : 'errorProd',
    payload
})

export const fetchProd = (payload) => ({
    type : 'fetchProd',
    payload
})

export const thunkHandler = () => {
    // const dispatch = useDispatch();
    return async function(dispatch){
        dispatch(loading())
        try{
            const res = await axios.get('https://dummyjson.com/products')
            dispatch(fetchProd(res.data))
        }catch(error){
            dispatch(errorProd(error))
        }finally{
            dispatch(loading())
        }
    } 
}


