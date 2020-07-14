import React from "react";
// import { BrowserRouter, Switch, Route } from 'react-router-dom';

/* import Home from './pages/Home'
import Login from './pages/Login' */

import NavBar from './components/NavBar'
import Footer from './components/Footer'
import Button from './components/Button'
import Row from './components/Row'
import Wrapper from './components/Wrapper'
import Container from './components/Container'
import Card from './components/Card'

function App() {
    // return (<BrowserRouter>
    return (
        <div>
            <NavBar />
            <Wrapper>
                <Container />
                <Button />
                <Row />
                <Card />
            </Wrapper >
            <Footer />
        </div>
    );
    // </BrowserRouter>)
}

export default App;





{/* <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/login" component={Login} />
</Switch> */}