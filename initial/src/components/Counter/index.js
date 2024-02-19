import './index.css'
import {useSelector, useDispatch} from 'react-redux'
import {inrement, decrement} from '../../actions/counterActions'

const Counter = () => {
  const dispatch = useDispatch()
  const count = useSelector(state => state.counter.count)

  const onIncrement = () => {
    dispatch(increment())
  }
  const onDecrement = () => {
    dispatch(decrement())
  }

  return (
    <div className='container'>
      <h1 className='heading'>Counter</h1>
      <p className='count'>{count}</p>
      <div>
        <button className='button' onClick={onIncrement}>
          Increase
        </button>
        <button className='button' onClick={onDecrement}>
          Decrease
        </button>
      </div>
    </div>
  )
}

export default Counter
