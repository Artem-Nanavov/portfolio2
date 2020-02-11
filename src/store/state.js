import axios from "axios"
import { rerenderEntireTree } from "../render";

let state = {
    tickets: [],
    minCheapTickets: [],
    minPriceTickets: [],
}

export const click = value => {
    console.log( value )
}

export const getItem = async ( all, withoutTransfer, oneTrasfer, twoTransfer, threeTransfer ) => {
    try {
        const REQUEST = await axios.get('https://front-test.beta.aviasales.ru/search')

        const a = await REQUEST.data

        const URL = `https://front-test.beta.aviasales.ru/tickets?searchId=${a.searchId}`

        const result = await axios.get(URL)
        console.log( result )

        state.tickets = result.data.tickets

        //============================================================

        let arrMinCheapTickets = []
        let arrMinPriceTickets = []

        for ( let i = 0; i < result.data.tickets.length; i++ ) {
            arrMinCheapTickets.push( result.data.tickets[i].price )

            arrMinPriceTickets.push( result.data.tickets[i].segments[0].duration )
        }

        const minSumTickets = Math.min(...arrMinCheapTickets)
        const minPriceTickets = Math.min(...arrMinPriceTickets)

        for ( let i = 0; i < result.data.tickets.length; i++ ) {
            if ( result.data.tickets[i].price === minSumTickets ) {
                state.minCheapTickets.push( result.data.tickets[i] )
            }

            if ( result.data.tickets[i].segments[0].duration === minPriceTickets ) {
                state.minPriceTickets.push( result.data.tickets[i] )
            }
        }

        rerenderEntireTree(state)
    } catch (e) {
        console.error(e)
    }
}

getItem()

export default state
