import {ThemeProvider} from "@material-ui/core";
import theme from "../src/theme";
import {createTheme} from "@material-ui/core/styles";

export const parameters = {
    actions: {argTypesRegex: "^on[A-Z].*"},
    controls: {
        matchers: {
            color: /(background|color)$/i,
            date: /Date$/,
        },
    }
};

const muiTheme = createTheme(theme);
export const decorators = [
    (Story) => (
        <ThemeProvider theme={muiTheme}>
            <Story />
        </ThemeProvider>
    ),
];