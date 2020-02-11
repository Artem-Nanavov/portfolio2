import React, { Component } from "react"
import s from './App__tickets.module.css'
import App__ticketItem from "./ticket/App__ticketItem";

class App__tickets extends Component {
    render() {
        return (
            <div>
                <App__ticketItem state={ this.props.state } tickets={ this.props.tickets } />
            </div>
        )
    }
}


export default App__tickets