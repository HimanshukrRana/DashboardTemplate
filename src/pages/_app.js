import { wrapper } from "@/store/store";
import "@/styles/globals.css";
import { Provider } from "react-redux";

/**
 * !Guide: info
 * ? `Layout` component is called in every page using `np` snippets. If you have consistent layout across all page, you can add it here too
 */

function MyApp({ Component, pageProps, ...rest }) {
    const { store, props } = wrapper.useWrappedStore(rest);

    return (
        <Provider store={store}>
            <Component {...pageProps} />;
        </Provider>)
}

export default MyApp;
