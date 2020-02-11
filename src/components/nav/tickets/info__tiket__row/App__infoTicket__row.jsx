import React, {Component} from "react"
import s from './App__infoTicket__row.module.css'

class App__infoTicket__row extends Component {
    render() {
        const segments = this.props.segments

        function editDate( str ) {
            const date = Date.parse( str )
            const DATE = new Date( date )

            return `${ DATE.toLocaleTimeString().slice( 0,-6 ) } ${ DATE.toLocaleTimeString().substr( -2, 2 ) }`
        }
        
        function editNewDate( date, duration ) {
            const num = duration
            const newDuration = num * 60 * 100

            const DATE = new Date ( Date.parse( date ) + Number( newDuration ) )

            return `${ DATE.toLocaleTimeString().slice( 0,-6 ) } ${ DATE.toLocaleTimeString().substr( -2, 2 ) }`
        }

        function transplantations( arr ) {
            if ( arr.length === 0 ) {
                return 'Без пересадок'
            } else if ( arr.length === 1 ) {
                return '1 пересадка'
            } else if ( arr.length >= 2 && arr.length <= 4 ) {
                return `${ arr.length } пересдки`
            } else {
                return `${ arr.length } пересадок`
            }
        }

        function durationTime( time ) {
            const num = ( time / 60 ).toFixed( 2 )

            const minutes = num.substr( -2, 2 ) * 0.6

            const hour = Number( num ).toFixed( 0 )

            if ( minutes === 0 ) {
                return `${ hour }ч`
            } else {
                return `${ hour }ч ${ minutes.toFixed( 0 ) }м`
            }

        }

        return (
            <div className={ s.box } >
                <div className={ s.wrapper } >
                    <div className={ s.container } >
                        <div className={ s.body } >
                            <p className={ s.title } > { segments[0].origin} - { segments[0].destination } </p>
                            <p className={ s.subTitle } > { editDate( segments[0].date ) } - { editNewDate( segments[0].date, segments[0].duration ) } </p>
                        </div>

                        <div className={ s.body } >
                            <p className={ s.title } > { segments[1].origin} - { segments[1].destination } </p>
                            <p className={ s.subTitle } > { editDate( segments[1].date ) } - { editNewDate( segments[1].date, segments[1].duration ) } </p>
                        </div>
                    </div>

                    <div className={ s.container } >
                        <div className={ s.body } >
                            <p className={ s.title } > В пути </p>
                            <p className={ s.subTitle } > { durationTime( segments[0].duration ) } </p>
                        </div>

                        <div className={ s.body } >
                            <p className={ s.title } > В пути </p>
                            <p className={ s.subTitle } > { durationTime( segments[1].duration ) } </p>
                        </div>
                    </div>

                    <div className={ s.container } >
                        <div className={ s.body } >
                            <p className={ s.title } > { transplantations( segments[0].stops ) } </p>
                            <p className={ s.subTitle } > { segments[0].stops.join(' ') } </p>
                        </div>

                        <div className={ s.body } >
                            <p className={ s.title } > { transplantations( segments[1].stops ) } </p>
                            <p className={ s.subTitle } > { segments[1].stops.join(' ') } </p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default App__infoTicket__row