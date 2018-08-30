import * as React from 'react';

export interface ButtonProps {
    text: string,
    isDecrement?: boolean,
    onClick?: () => void;
}

function Button(props: ButtonProps) {
    return (
        <button onClick={props.onClick}>{props.text}</button>
    );
}

export default Button;