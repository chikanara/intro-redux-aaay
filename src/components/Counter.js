import React from 'react'
import { connect, useDispatch, useSelector } from 'react-redux'
import { decrement, increment } from '../js/action/counterAction'

const Counter = (props) => {
    const count = useSelector(state => state.count)
    const dispatch = useDispatch()
    return (
        <div>
            {/* <button onClick = {() => props.increment(1)}>+</button> */}
            <button onClick = {() => dispatch(increment(2))}>+</button>
              <h2>{count}</h2>
            {/* <button onClick = {() => props.decrement(1)}>-</button> */}
            <button onClick = {() => dispatch(decrement(15))}>-</button>
        </div>
    )
}

// const mapStateToProps = (state) => {
//       return {
//           count : state.count
//       }
// }
// const mapDispatchToProps = (dispatch) => {
//     return {
//         increment : (payload) => dispatch(increment(payload)),
//         decrement : (x) => dispatch(decrement(x))
//     }
// }
// export default connect(mapStateToProps,mapDispatchToProps)(Counter)
export default Counter
