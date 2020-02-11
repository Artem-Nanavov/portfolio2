import React, { Component } from "react"
import s from './App__header.module.css'

//========================================
import logoIcon from '../../asests/Logo.svg'
//========================================

class App__header extends Component {
    render() {
        return (
            <header >
                <img src={ logoIcon } alt="" />
            </header>
        )
    }
}

export default App__header