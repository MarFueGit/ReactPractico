// en App.jsx
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from '../containers/Layout';
import Login from '../pages/Login';
import RecoveryPassword from '../pages/RecoveryPassword';
import Home from '../pages/Home';
import NotFound from '../pages/NotFound';
import SendEmail from '../pages/SendEmail';
import NewPassword from '../pages/NewPassword';
import MyAccount from '../pages/MyAccount';
import CreateAccount from '../pages/CreateAccount';
import Checkout from '../pages/Checkout';
import Orders from '../pages/Orders';
import '../styles/global.scss';


const App = () => {
    return (
        <BrowserRouter>
        <Layout>
            <Routes>
            <Route exact path="/" element={ <Home />} />
            <Route exact path="/login" element={ <Login />} />
            <Route exact path="/recoverypassword" element={ <RecoveryPassword />} />
            <Route exact path="/sendemail" element={ <SendEmail />} />
			<Route exact path="/newpassword" element={ <NewPassword />} />
			<Route exact path="/account" element={ <MyAccount />} />
			<Route exact path="/signup" element={ <CreateAccount />} />
			<Route exact path="/checkout" element={ <Checkout />} />
			<Route exact path="/orders" element={ <Orders />} />
            <Route exact path="*" element={ <NotFound />} />
            </Routes> 
        </Layout>
        </BrowserRouter>
    );
}

export default App;

