import React, {Component} from "react"
import s from './App__nav.module.css'
import App__checkbox from "./checkbox/App__checkbox";
import App__navigation from "./navigaton/App__navigation";
import App__tickets from "./tickets/App__tickets";
import {BrowserRouter, Route} from 'react-router-dom'

const App__nav = props => {

    const [ state, setState ] = React.useState( {
        all: false,
        nonStop: false,
        oneStop: false,
        twoStops: false,
        threeStops: false,
    } )

    return (
        <BrowserRouter>
            <div className={s.wrapper}>
                <App__checkbox state={ state } setState={ setState } />
                <div>
                    <App__navigation />
                    <div>
                        <Route exact path="/" render={() => <App__tickets state={ state } tickets={props.state.tickets}/>}/>
                        <Route exact path="/cheap" render={() => <App__tickets tickets={props.state.minCheapTickets}/>}/>
                        <Route exact path="/faster" render={() => <App__tickets tickets={props.state.minPriceTickets}/>}/>
                    </div>
                </div>
            </div>
        </BrowserRouter>
    )
}

export default App__nav