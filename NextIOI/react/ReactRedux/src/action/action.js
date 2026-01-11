
// action type
const INCREMENT = 'increment'
const INCREMENTBYVAL = 'incrementByVal'
const DECREMENT = 'decrement'


// 
export const increment = () => ({
    type : 'increment'
});

export const decrement = () => ({
    type  : 'decrement'
})

export const incrementByVal = (payload) => ({
    type : 'incrementByVal',
    payload
})