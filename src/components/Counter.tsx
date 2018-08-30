import * as React from 'react';

export interface CounterProps {
    count?: number
}

function Counter(props: CounterProps) {
    return (
        <div>{props.count}</div>
    );
}

export default Counter;