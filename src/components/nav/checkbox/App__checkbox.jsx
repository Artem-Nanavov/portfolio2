import React, {Component} from "react"
import s from './App__checkbox.module.css'
import Checkbox from '@material-ui/core/Checkbox';

import FormControlLabel from '@material-ui/core/FormControlLabel';

const App__checkbox = props => {

    const handleChange = name => event => {
        props.setState( { ...props.state, [ name ]: event.target.checked } );
    }

    return (
        <div className={ s.wrapper }>
            <div className={ s.container }>
                <p className={ s.title }> Колличество пересадок </p>

                <div className={ s.body }>
                    <FormControlLabel
                        control={
                            <Checkbox
                                checked={ props.state.all }
                                onChange={ handleChange( 'all' ) }
                                value="checkedA"
                                color="primary"
                            />
                        }
                        label="Все"
                    />
                    <FormControlLabel
                        control={
                            <Checkbox
                                checked={ props.state.nonStop }
                                onChange={ handleChange( 'nonStop' ) }
                                value="checkedB"
                                color="primary"
                            />
                        }
                        label="Без пересадок"
                    />
                    <FormControlLabel
                        control={
                            <Checkbox
                                checked={ props.state.oneStop }
                                onChange={ handleChange( 'oneStop' ) }
                                value="checkedC"
                                color="primary"
                            />
                        }
                        label="1 пересадка"
                    />
                    <FormControlLabel
                        control={
                            <Checkbox
                                checked={ props.state.twoStops }
                                onChange={ handleChange( 'twoStops' ) }
                                value="checkedD"
                                color="primary"
                            />
                        }
                        label="2 пересадки"
                    />
                    <FormControlLabel
                        control={
                            <Checkbox
                                checked={ props.state.threeStops }
                                onChange={ handleChange( 'threeStops' ) }
                                value="checkedF"
                                color="primary"
                            />
                        }
                        label="3 пересадки"
                    />
                </div>
            </div>
        </div>
    )
}

export default App__checkbox