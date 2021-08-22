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
        primary: {
            main: '#202021',
        },
        secondary: {
            main: '#19857b',
        },
        error: {
            main: red.A400,
        },
    },
    shape: {
        borderRadius: 6,
    },
    typography: {
        fontFamily: [
            'Rubik',
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