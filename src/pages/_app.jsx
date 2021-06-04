//import '../styles/globals.css'
//import p from 'prop-types';

import { ThemeProvider } from "styled-components"
import { theme } from "../styles/theme"

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp