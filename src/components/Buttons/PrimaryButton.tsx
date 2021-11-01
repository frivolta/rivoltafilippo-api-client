import React from "react";

interface PrimaryButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    label: string
}

export const PrimaryButton = ({label, ...props}: PrimaryButtonProps) => {
    return <button
        className="bg-primary rounded text-white text-sm px-4 py-4 hover:bg-primaryLight transition duration-500 ease-in-out"
        data-testid="outline-button" {...props}>{label}</button>
}