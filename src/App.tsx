import React, {useEffect, useState} from 'react';
import './App.css';
import {Routes, Route, BrowserRouter} from 'react-router-dom';
import Main from './routes/main';
function App() {
  const [account, setAccount] = useState<string>("");
  const getAccount = async () => {
    try {

      // 메타마스크가 설치되어있는지 확인
      if (window.ethereum) {
        const accounts = await window.ethereum.request({
          method: 'eth_requestAccounts',
        });

        setAccount(accounts[0]);
      } else {
        alert("Install Metamask");
      }
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getAccount();
  }, []);
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main account={account}/>} />
      </Routes>
  </BrowserRouter>
  );
}

export default App;