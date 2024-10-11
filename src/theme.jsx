import { createTheme } from "@mui/material/styles";

export const getTheme = (mode) =>
    createTheme({
        palette: {
            mode,  // This will dynamically switch between 'light' and 'dark'
            ...(mode === "light"
                ? {
                    // Light theme specific settings
                    background: {
                        default: "#f4f6f8",
                        paper: "#fff",
                    },
                    text: {
                        primary: "#000",
                    },
                }
                : {
                    // Dark theme specific settings
                    background: {
                        default: "#121212",
                        paper: "#1d1d1d",
                    },
                    text: {
                        primary: "#fff",
                    },
                }),
        },
        typography: {
            fontFamily: "Raleway", // Customize your font family if needed
        },
    });

