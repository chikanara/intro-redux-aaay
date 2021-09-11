import { DECREMENT, INCREMENT } from "../const"

// export const increment = (i) => {
//     return {
//         type:INCREMENT,
//         payload:i
//     }
// }

export const increment = (payload) => ({
    //+1 +2 : payload
    type: INCREMENT,
    payload
})

export const decrement = (payload) => ({
    type: DECREMENT,
    payload
})

