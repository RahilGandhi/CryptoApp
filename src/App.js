import React, { useEffect, useState } from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import axios from 'axios';
import Navbar from './components/Navbar';
import Home from './pages/Home'
import Signin from './pages/Signin'
import Signup from './pages/Signup'
import Account from './pages/Account'
import CoinPage from './pages/CoinPage';
import Footer from './components/Footer';
import { AuthContextProvider } from './context/AuthContext';
import { CoinContext } from './context/SavedCoinContext';

function App() {
  const [coins, setCoins] = useState([])
  const [savedCoin, setSavedCoin] = useState([])
  const url = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=20&page=1&sparkline=false&locale=en'
  useEffect(() => {
    axios.get(url).then((response) => {
      setCoins(response.data)
      console.log(response.data)
    })
  }, [url])
  return (
    <ThemeProvider>
      <AuthContextProvider>
        <CoinContext.Provider value={{savedCoin, setSavedCoin}}>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home coins={coins}/>}/>
          <Route path='/signin' element={<Signin/>}/>
          <Route path='/signup' element={<Signup/>}/>
          <Route path='/account' element={<Account/>}/>
          <Route path='/coin/:coinId' element={<CoinPage/>}>
            <Route path=':coinId'/>
          </Route>
        </Routes>
        <Footer /> 
        </CoinContext.Provider>
      </AuthContextProvider>      
    </ThemeProvider>
 );
}

export default App;
