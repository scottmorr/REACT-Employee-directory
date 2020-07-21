import React from "react";
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import Wrapper from './components/Wrapper'

import Home from './pages/Home'

function App() {
    return (
        <div>
            <NavBar />
            <Wrapper>
                <Home />
            </Wrapper >
            <Footer />
        </div>
    );
}

export default App;