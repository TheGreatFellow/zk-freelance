import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ClientPage from "./pages/ClientPage";
import FreelancerPage from "./pages/FreelancerPage";
import GigPage from "./pages/GigPage";
import NavBar from "./components/NavBar/NavBar";
import React, { useState, useEffect } from "react";

function App() {
  const [currentAccount, setCurrentAccount] = useState(null);

  useEffect(() => {
    checkWalletIsConnected();
  }, []);

  const checkWalletIsConnected = async () => {
    const { ethereum } = window;

    if (!ethereum) {
      alert("Make sure you have Metamask installed!");
      return;
    } else {
      console.log("Wallet exists! We're ready to go!");
    }

    const accounts = await ethereum.request({ method: "eth_accounts" });

    if (accounts.length !== 0) {
      const account = accounts[0];
      console.log("Found an authorized account: ", account);
      setCurrentAccount(account);
    } else {
      console.log("No authorized account found");
    }
  };

  const connectWalletHandler = async () => {
    const { ethereum } = window;

    if (!ethereum) {
      alert("Please install Metamask!");
    }

    try {
      const accounts = await ethereum.request({
        method: "eth_requestAccounts",
      });
      console.log("Found an account! Address: ", accounts[0]);
      setCurrentAccount(accounts[0]);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Router>
      <NavBar
        currentAccount={currentAccount}
        connectWalletHandler={connectWalletHandler}
      />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/gigs" element={<GigPage />}></Route>
        <Route
          path="/freelancer"
          element={<FreelancerPage currentAccount={currentAccount} />}
        ></Route>
        <Route path="/client" element={<ClientPage />}></Route>
        {/* <Route path='collect' element={<Collect />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
