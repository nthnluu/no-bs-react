import type {AppProps} from 'next/app';
import {CssBaseline, ThemeProvider} from "@material-ui/core";
import Head from "next/head";
import theme from "../theme";
import createEmotionCache from "../createEmotionCache";
import {CacheProvider, EmotionCache} from "@emotion/react";
import {createTheme} from "@material-ui/core/styles";
import {useMemo} from "react";

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

interface MyAppProps extends AppProps {
    emotionCache?: EmotionCache;
}

function MyApp(props: MyAppProps) {
    const {Component, emotionCache = clientSideEmotionCache, pageProps} = props;
    const muiTheme = useMemo(() => createTheme(theme), []);

    return (
        <CacheProvider value={emotionCache}>
            <Head>
                <title>No BS React</title>
                <meta name='viewport' content='minimum-scale=1, initial-scale=1, width=device-width'/>
            </Head>
            <ThemeProvider theme={muiTheme}>
                <CssBaseline/>
                <Component {...pageProps} />
            </ThemeProvider>
        </CacheProvider>
    );
}

export default MyApp;
