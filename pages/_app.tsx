import React from 'react'
import { Global, css } from "@emotion/core"
import { AppProps } from 'next/app'

const App = ({ Component, pageProps }: AppProps) => {
  return (<>
    <Global
      styles={css`
      html,
      * {
        padding: 0;
        margin: 0;
        box-sizing:border-box;
        font-family: "Nunito", sans-serif;
      }

      
      `}
    />
    <Component {...pageProps} />
  </>)
}

export default App