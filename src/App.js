import React from "react";
import { BrowserRouter, Switch, Route } from 'react-router-dom';

/* import Home from './pages/Home'
import Login from './pages/Login' */

import NavBar from './components/NavBar/NavBar'
import Footer from './components/Footer/Footer'
import Button from './components/Button/Button'

import Row from './components/Row/Row'
import Wrapper from './components/Wrapper/Wrapper'
import Container from './components/Container/Container'

import Card from './components/Card/Card'

function App() {
    return (<BrowserRouter>
        <NavBar />
        <Wrapper>
            <Container />
            <Button />
            <Row />
            <Card />
        </Wrapper>
        <Footer />
    </BrowserRouter>)
}

export default App;
{/* <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/login" component={Login} />
</Switch> */}