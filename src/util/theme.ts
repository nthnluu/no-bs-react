import {red} from '@material-ui/core/colors';

const theme = {
    components: {
        MuiButton: {
            defaultProps: {
                disableElevation: true
            },
        },
    },
    palette: {
        type: 'dark',
        primary: {
            main: '#4285F4',
        },
        secondary: {
            main: '#19857b',
        },
        error: {
            main: red.A400,
        },
        white: {
            main: "#fff"
        }
    },
    shape: {
        borderRadius: 6,
    },
    typography: {
        button: {
            textTransform: "none" as const,
            fontWeight: 600
        },
        fontFamily: [
            'IBM Plex Sans',
            '-apple-system',
            'BlinkMacSystemFont',
            '"Segoe UI"',
            'Roboto',
            '"Helvetica Neue"',
            'Arial',
            'sans-serif',
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"',
        ].join(','),
    },
};

export default theme;