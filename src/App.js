import React, { useEffect, useState } from "react";
import Header from "./component/Header";
import Login from "./component/Login";
import Dashboard from "./component/Dashboard";
import Card from "./component/Card";
import { Routes, Route, Navigate } from "react-router-dom";
import { Details } from "./component/Details";
import Cookies from "js-cookie";
import { EthereumClient, w3mConnectors, w3mProvider } from '@web3modal/ethereum'
import { Web3Modal } from '@web3modal/react'
import { configureChains, createConfig, WagmiConfig } from 'wagmi'
import { arbitrum, mainnet, polygon, polygonMumbai} from 'wagmi/chains'
const chains = [arbitrum, mainnet, polygon, polygonMumbai]
const projectId = 'f86b7211f8024a869a2c4c0acdcbf616'

const { publicClient } = configureChains(chains, [w3mProvider({ projectId })])
const wagmiConfig = createConfig({
  autoConnect: true,
  connectors: w3mConnectors({ projectId, chains }),
  publicClient
})
const ethereumClient = new EthereumClient(wagmiConfig, chains)

const App = () => {
  const [isAuth, setIsAuth] = useState(false);
  useEffect(() => {
    // Check if the user is authenticated
    const user = Cookies.get('user');
    
    if (user) {
        setIsAuth(true);
        console.log(user, isAuth)
    }
  }, []);
  return (
    <>
    <WagmiConfig config={wagmiConfig}>
      <Header />
      
      <Routes>
          <Route path="/" element = {!isAuth?<Navigate to ="/login"/>:<Card/>} />
          <Route path="/card" element = {!isAuth?<Navigate to ="/login"/>:<Dashboard/>} />
          {/* <Route path="/dashbord" Component={Dashboard} /> */}
          <Route path="/details" element = {!isAuth?<Navigate to ="/login"/>:<Details/>} />
          <Route path="/login" element = {!isAuth?<Login/>:<Navigate to="/"/>} />
      </Routes>
    </WagmiConfig>

      
      <Web3Modal projectId={projectId} ethereumClient={ethereumClient} />
    </>
  );
};

export default App;
