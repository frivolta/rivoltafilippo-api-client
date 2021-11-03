module.exports = {
    purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
    darkMode: false, // or 'media' or 'class'
    theme: {
        maxWidth: {
            "1/4": "25%",
            "1/2": "50%",
            "3/4": "75%",
        },
        extend: {
            colors: {
                primary: "#0248FF",
                primaryLight: "#0069FF",
                primaryLighter: "#0080FF",
                primaryDark: "#031B4E",
                secondary: "#5B6987",
                secondaryLight: "#99A1B3",
                secondaryLighter: "#E5E8ED",
                secondaryDark: "#010E28",
                altBlack: "#444444",
                altWhite: "#f1f1f1",
                textBg: "#F3F5F9",
                textLight: "#676767"
            },
            fontFamily: {
                poppins: ['"Poppins"', "sans-serif"],
                fira: ['"Fira Sans"', "sans-serif"],
            },
            fontSize: {
                h1: [
                    "2.375rem",
                    {
                        lineHeight: "3.675rem",
                    },
                ],
            },
        },
    },
    variants: {
        extend: {
            padding: ["first, last"],
        },
    },
    plugins: [
        require("@tailwindcss/forms")({
            strategy: 'class',
        }),
    ],
};