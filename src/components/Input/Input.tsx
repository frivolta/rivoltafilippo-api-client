import * as React from "react";
import {useRef} from "react";

interface FormGroupProps {
    children: React.ReactChild | React.ReactChild[]
    half?: boolean;
    inline?: boolean;
}

export const FormGroup = ({children, half, inline}: FormGroupProps) => {
    return (
        <div className={`form-group flex ${inline? 'flex-row':'flex-col'} ${half? 'w-1/2':'w-full'}`}>
            {children}
        </div>
    )
}


interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label: string;
    subLabel?: string;
    error?: string|null
}

export const Input = ({label, subLabel, error, ...props}: InputProps) => {
    return (
        <>
            <label data-testid="input-label" className="text-textLight font-normal text-primary">{label}</label>
            {subLabel &&
            <label data-testid="input-subLabel" className="text-textLight text-xs font-normal">{subLabel}</label>}
            <input className="my-4 p-3 text-textLight font-light font-normal rounded-md border border-secondaryLighter focus:border-transparent focus:outline-none focus:ring-1 focus:ring-primary focus:border-transparent" {...props}/>
            {error &&
            <label data-testid="input-error" className="text-xs font-normal text-primary">{error}</label>}
        </>
    )
}