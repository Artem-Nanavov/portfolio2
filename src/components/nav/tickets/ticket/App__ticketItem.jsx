import React, {Component} from "react"
import s from './App__ticketItem.module.css'
import App__infoTicket__row from "../info__tiket__row/App__infoTicket__row";

class App__ticketItem extends Component {
    render() {
        const arr = this.props.tickets

        function replaceNumbers( x, delimiter ) {
            return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, delimiter || " ");
        }

        if ( this.props.tickets !== 0 && this.props.state ) {

            const arrFilter = arr.filter( item =>
                ( this.props.state.nonStop ? item.segments[0].stops.length === 0 : item.price >= 0 ) &&
                ( this.props.state.oneStop ? item.segments[0].stops.length <= 1 : item.price >= 0 ) &&
                ( this.props.state.twoStops ? item.segments[0].stops.length <= 2 : item.price >= 0 ) &&
                ( this.props.state.threeStops ? item.segments[0].stops.length >= 0 : item.price >= 0 )
            )

            return (
                <div>
                    {arrFilter.map(item => (
                        <div className={s.wrapper} >
                            <div className={s.header}>
                                <p className={s.price}> { replaceNumbers( item.price ) } Р </p>
                                <div>
                                    <img src={`//pics.avs.io/99/36/${item.carrier}.png`} alt=""/>
                                </div>
                            </div>

                            <div className={ s.subHeader } >
                                <App__infoTicket__row segments={ item.segments } />
                            </div>
                        </div>
                    ))}
                </div>
            )
        } else {
            return (
                <div>
                    {arr.map(item => (
                        <div className={s.wrapper} >
                            <div className={s.header}>
                                <p className={s.price}> { replaceNumbers( item.price ) } Р </p>
                                <div>
                                    <img src={`//pics.avs.io/99/36/${item.carrier}.png`} alt=""/>
                                </div>
                            </div>

                            <div className={ s.subHeader } >
                                <App__infoTicket__row segments={ item.segments } />
                            </div>
                        </div>
                    ))}
                </div>
            )
        }
    }
}

export default App__ticketItem