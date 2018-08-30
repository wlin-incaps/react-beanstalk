import { StoreState } from "../types/StoreState";
import Counter, { CounterProps } from "../components/Counter";
import { connect } from "react-redux";

function mapStateToProps(state: StoreState, props: CounterProps) {
    return {
        count: state.count
    }
}

export default connect(mapStateToProps, null)(Counter);