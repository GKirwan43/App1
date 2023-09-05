import { AppProps } from "next/app";
import Head from "next/head";
import { MantineProvider } from "@mantine/core";

export default function App(props: AppProps) {
  const { Component, pageProps } = props;

  return (
    <>
      <Head>
        <title>Page title</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>

      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        theme={{
          colorScheme: "light",

          colors: {
            blue: ["#06A0DB"],
            black: ["#11232F", "#111E27"],
            white: ["#F1F1F3"],
          },

          primaryColor: "blue",

          fontFamily: "Roboto, sans-serif",
          fontSizes: {
            xs: "0.6rem",
            sm: "0.75rem",
            md: "0.9rem",
            lg: "1rem",
            xl: "1.2rem",
          },

          headings: {
            sizes: {
              h1: { fontWeight: 400, fontSize: "xl" },
            },
          },

          globalStyles: () => ({
            ".center-in-page": {
              margin: "auto",
              width: "50%",
              textAlign: "center",
            },

            ".test": {
              margin: "auto",
              backgroundColor: "blue",
              width: "50px",
              textAlign: "center",
            },
          }),
        }}
      >
        <Component {...pageProps} />
      </MantineProvider>
    </>
  );
}
