import App from 'next/app'
import { ThemeProvider } from 'styled-components'
import GlobalStyle from '../components/GlobalStyles/';

const theme= {
  colors: {
    primary: '#0070f3',
  },
}

export default class MyApp extends App {
  render() {
    const { Component, pageProps } =this.props
    return (
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    )
  }
}