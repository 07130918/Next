import { useSelector } from "react-redux"
import { add, addAsyncWithStatus, minus } from "../store/modules/counter"

import CounterButton from "./CounterButton"
import CounterResult from "./CounterResult"

const Counter = () => {
    const status = useSelector(state => state.counter.status);
    return (
        <>
            <CounterResult />
            <CounterButton step={2} calcType="+" actionCreator={add} />
            <CounterButton step={2} calcType="-" actionCreator={minus} />
            <CounterButton step={2} calcType="非同期(+)" actionCreator={addAsyncWithStatus} />
            <h3>{status}</h3>
        </>
    )
}
export default Counter;
