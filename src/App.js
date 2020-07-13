import React from "react";
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './pages/Home'
import Login from './pages/Login'

import NavBar from './components/NavBar/NavBar'
import Footer from './components/Footer/Footer'



function App() {
    return (<BrowserRouter>
        <NavBar />
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/login" component={Login} />
        </Switch>
        <Footer />
    </BrowserRouter>)
}

export default App;