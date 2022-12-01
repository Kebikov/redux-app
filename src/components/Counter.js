import {dec, inc, rnd} from '../actions';

import { useSelector, useDispatch } from "react-redux";
//useSelector амтоматом получает state

const Counter = () => {

    //const {value} = useSelector(state => state);
    const value = useSelector(state => state.value);
    //аналог mapStateToProps из connect

    //...отличие от mapStateToProps
    //может вернуть все что угодно, mapStateToProps только обьект который пойдет на props
    //в хук нельзя передать свои props для отслеживания
    //dispatch проверяет изминилось ли состояние state и не будет перерендор если ни чего не изминилось
    //проверка изминения в случае вытаскивания всего state идет по всему обьекту, что плохо для оптимизации 

    //...как улучшить оптимизация при использовании useSelector
    //вытаскивать по дной переменной за раз
    //использование сторонней библиотеки reselect
    //добавление вторым аргументом функцию shallowEqual, вытаскиваем ее из redux

    const dispatch = useDispatch();
    //функция для назначения различных событий
    //если передаем действие ниже по ерархии, то используем useCallback(см.ниже пример №2)

    return(
        <div className="jumbotron">
            <h1>{value}</h1>
            <button onClick={() => dispatch(dec())} className="btn btn-primary">DEC</button>
            <button onClick={() => dispatch(inc())} className="btn btn-primary">INC</button>
            <button onClick={() => dispatch(rnd())} className="btn btn-primary">RND</button>
        </div>
    )
}

export default Counter;

// const mapStateToProps = (state) => {
//     return {
//         counter: state.value,
//         snth: state.foo
//     }
// }

// export default connect(mapStateToProps, actions)(Counter);


//...пример №2
// import React, { useCallback } from 'react'
// import { useDispatch } from 'react-redux'

// export const CounterComponent = ({ value }) => {
//   const dispatch = useDispatch()
//   const incrementCounter = useCallback(
//     () => dispatch({ type: 'increment-counter' }),
//     [dispatch]
//   )

//   return (
//     <div>
//       <span>{value}</span>
//       <MyIncrementButton onIncrement={incrementCounter} />
//     </div>
//   )
// }

// export const MyIncrementButton = React.memo(({ onIncrement }) => (
//   <button onClick={onIncrement}>Increment counter</button>
// ))



