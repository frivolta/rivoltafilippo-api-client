import React from "react";

interface OutlineButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    label: string
}

export const OutlineButton = ({label, ...props}: OutlineButtonProps) => {
    return <button
        className="bg-transparent rounded border-primary text-white text-sm px-4 py-4 hover:underline transition duration-500 ease-in-out"
        data-testid="outline-button" {...props}>{label}</button>
}