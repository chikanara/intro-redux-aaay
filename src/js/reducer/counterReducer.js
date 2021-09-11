import { DECREMENT, INCREMENT } from "../const";

const intialState = {
    count:0
}

const counterReducer = (state=intialState,{type,payload}) => {
    switch (type) {
        case INCREMENT:
            return {...state,count:state.count+payload}
    
        case DECREMENT : 
         return {...state,count:state.count-payload}

         default:
             return state;
    }
}
 
export default counterReducer;