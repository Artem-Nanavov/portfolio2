import React, { Component } from "react"
import s from './App__navigation.module.css'
import {NavLink} from "react-router-dom";

class App__navigation extends Component {
    render() {
        return (
            <div className={ s.menu }>
                <NavLink className={ `${ s.link }` } activeClassName={ s.active } to="/cheap"> Самый дешевый </NavLink>

                <NavLink className={ `${ s.link } ${ s.border_l }` } activeClassName={ s.active } to="/faster"> Самый быстрый </NavLink>
            </div>
        )
    }
}

export default App__navigation