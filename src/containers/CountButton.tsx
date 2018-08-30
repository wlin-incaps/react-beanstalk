import { StoreState } from "../types/StoreState";
import Button, { ButtonProps } from "../components/Button";
import { CountAction, incrementCount, decrementCount } from "../actions/count";
import { Dispatch } from "redux";
import { connect } from "react-redux";

function mapStateToProps(state: StoreState, props: ButtonProps) {
    return props;
}

function mapDispatchToProps(dispatch: Dispatch<CountAction>, props: ButtonProps) {
    return {
        onClick: () => props.isDecrement ? dispatch(decrementCount()) : dispatch(incrementCount())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Button);