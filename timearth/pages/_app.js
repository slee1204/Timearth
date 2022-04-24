import AppContext from '../src/context/AppContext'
import '../styles/globals.css'
import { useState, useContext } from 'react';

function MyApp({ Component, pageProps }) {
  const [total, setTotal] = useState(0);
  const [optionChosen, setOptionChosen] = useState("");

  return (
    <AppContext.Provider value = {{total, setTotal, optionChosen, setOptionChosen}}>
  <Component {...pageProps} />
  </AppContext.Provider>
  )
}

export default MyApp
