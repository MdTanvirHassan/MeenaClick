import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import Alert from "./components/Alert/Alert";
import "./App.css";
import Header from "./components/Header/Header";
// import Carousel from './components/Carousel/Carousel';
// import Feature from './components/Feature/Feature';
// import Product from './components/Product/Product';
import Footer from "./components/Footer/Footer";
import { Fragment } from "react";
import ScrollButton from "./components/ScrollButton";
import LoadingBar from 'react-top-loading-bar'

// import { Content, Heading } from './components/Styles';

import { Routes, Route } from "react-router-dom";
import Cart from "./components/Cart/Cart";
import Register from "./components/Register/Register";
import Area from "./components/Area/Area";
import LogIn from "./components/LogIn/LogIn";
import Combo from "./components/Combo/Combo";
import Offer from "./components/Offer/Offer";
import TrackOrder from "./components/TrackOrder/TrackOrder";
import Details from "./components/Details/Details";
import Brands from "./components/Brands/Brands";
import Home from "./Pages/Home";
import Coupons from "./components/Coupons/Coupons";

function App() {
  //! preloader
  const [loading, setLoading] = useState(true);
  const preloader = document.getElementById("preloader-active");
  if (preloader) {
    setTimeout(() => {
      preloader.style.display = "none";
      setLoading(false);
    }, 300);
  }
  //todo react top loading progress bar
  const [progress, setProgress] = useState(0)
  //todo Dark mode
  const [mode, setMode] = useState("light");
  const toggleMode = () => {
    if (mode === "dark") {
      setMode("light");
      document.body.style.backgroundColor = "#ffff";
      showAlert("Light mode is Enable.", "success");
    } else {
      setMode("dark");
      document.body.style.backgroundColor = "#132b54";
      showAlert("Dark mode is Enable.", "success");
    }
  };
  //*Alert
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      message: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };
  //*cart
  const [cart, setCart] = useState(0);
  const handleCart = (item, action) => {
    setCart((prevCart) => {
      return {
        ...prevCart,
        [item]: action === "up" ? cart[item] + 1 : cart[item] - 1,
      };
    });
  };
  //todo React-notification
  const notify = () => {
    toast.success("Product quantity updated!", {
      position: "top-center",
      autoClose: 1500,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: false,
      progress: undefined,
      theme: "light",
    });
  };

  return (
    !loading && (
      <>
        <Fragment>
          <Header
            mode={mode}
            toggleMode={toggleMode}
            handleCart={handleCart}
            />
            <LoadingBar
                color='#f11946'
                progress={progress}
                height={3}
                onLoaderFinished={() => setProgress(0)}
            />
          <Alert alert={alert} />

          <Routes>
            <Route
              exact path="/" element={<Home mode={mode} notify={notify} setProgress={setProgress} progress={progress}/>}
            />
            <Route path="/Area" element={<Area />} setProgress={setProgress} progress={progress}/>
            <Route path="/Cart" element={<Cart mode={mode} setProgress={setProgress} progress={progress}/>} />
            <Route path="/Register" element={<Register setProgress={setProgress} progress={progress}/>} />
            <Route path="/LogIn" element={<LogIn setProgress={setProgress} progress={progress}/>} />
            <Route path="/Combo" element={<Combo notify={notify} setProgress={setProgress} progress={progress}/>} />
            <Route
              path="/offer"
              element={<Offer mode={mode} notify={notify} setProgress={setProgress} progress={progress}/>}
            />
            <Route path="/TrackOrder" element={<TrackOrder setProgress={setProgress} progress={progress}/>} />
            <Route
              path="/details"
              element={<Details mode={mode} notify={notify} setProgress={setProgress} progress={progress}/>}
            />
            <Route
              path="/brands"
              element={<Brands mode={mode} notify={notify} setProgress={setProgress} progress={progress}/>}
            />
            <Route
              path="/coupons"
              element={<Coupons mode={mode} notify={notify} setProgress={setProgress} progress={progress}/>}
            />
          
          </Routes>
          
          <ToastContainer
            position="top-center"
            autoClose={1500}
            limit={6}
            hideProgressBar
            newestOnTop
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable={false}
            pauseOnHover={false}
            theme="light"
          />

          <Footer mode={mode} />
          <ScrollButton />
        </Fragment>
      </>
    )
  );
}

export default App;
