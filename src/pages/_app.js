import Theme from "../styles/theme";

console.log("inside _app");
function MyApp({ Component, pageProps }) {
  return (
    <>
      <Theme>
        <Component {...pageProps} />
      </Theme>
    </>
  );
}

export default MyApp;
