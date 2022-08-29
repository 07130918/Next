import { createContext, useContext, useReducer } from "react";

export const CalcContext = createContext();
export const CalcDispatchContext = createContext();

export const CalcProvider = ({ children }) => {
    const [state, dispatch] = useReducer((state, { type, payload }) => {
        switch (type) {
            case "change": {
                const { name, value } = payload;
                return { ...state, [name]: value };
            }
            case "add": {
                return { ...state, result: state.a + state.b };
            }
            case "minus": {
                return { ...state, result: state.a - state.b };
            }
            case "divide": {
                return { ...state, result: state.a / state.b };
            }
            case "multiply": {
                return { ...state, result: state.a * state.b };
            }
            default:
                throw new Error("operator is invalid");
        }
    }, {
        a: 1,
        b: 2,
        result: 3,
    });

    return (
        <CalcContext.Provider value={state}>
            <CalcDispatchContext.Provider value={dispatch}>
                {children}
            </CalcDispatchContext.Provider>
        </CalcContext.Provider>
    );
};

export const useCalc = () => useContext(CalcContext);
export const useDispatchCalc = () => useContext(CalcDispatchContext);
