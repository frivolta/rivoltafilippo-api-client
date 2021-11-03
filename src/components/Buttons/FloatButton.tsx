import React from "react";

interface FloatButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    label: string
}

export const FloatButton = ({label, ...props}: FloatButtonProps) => {
    return <button
        className="fixed bottom-8 right-16 bg-primary rounded text-white text-sm px-4 py-4 hover:bg-primaryLight transition duration-500 ease-in-out"
        {...props}>{label}</button>
}