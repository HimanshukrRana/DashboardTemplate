import "@/styles/globals.css";

/**
 * !Guide: info
 * ? `Layout` component is called in every page using `np` snippets. If you have consistent layout across all page, you can add it here too
 */

function MyApp({ Component, pageProps }) {
    return <Component {...pageProps} />;
}

export default MyApp;
