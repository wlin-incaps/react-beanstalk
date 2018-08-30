import { StoreState } from "../types/StoreState";
import { CountAction } from "../actions/count";
import { INCREMENT_COUNT, DECREMENT_COUNT } from "../constants/counter";

export default function count(state: StoreState, action: CountAction): StoreState {
    switch(action.type) {
        case INCREMENT_COUNT: return { ...state, count: state.count + 1 };
        case DECREMENT_COUNT: return { ...state, count: state.count - 1 };
        default: return state;
    }
}