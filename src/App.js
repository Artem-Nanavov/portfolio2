import React from 'react'
import './App.css'
import App__header from "./components/header/App__header"
import App__nav from "./components/nav/App__nav"
import {BrowserRouter, Route} from "react-router-dom"
import hashHistory from 'react-dom'

function App(props) {
    return (
        <BrowserRouter history={hashHistory}>
            <header className="header">
                <App__header/>
            </header>

            <nav>
                <App__nav state={ props.state } />
            </nav>
        </BrowserRouter>
    );
}

export default App;