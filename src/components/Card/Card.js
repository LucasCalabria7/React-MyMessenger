import React from 'react'
import tickgreen from '../assets/tick-green-double.svg'

import {GlobalStyleCard, CardMessage, NameUser, MessageUser, TimeSend, TickGreen, BottomCard} from './StyledCard'

export function Card (props) {

    function removeCard (id) {
        if(window.confirm("Are you sure you want to remove this message?")){
        const removeItem = props.cards.filter((message)=>{
            if(message.id !== id) {
                return message
            }
        })  
        props.setCards(removeItem)
    }
}

    return (
        <GlobalStyleCard
        person={props.person}
        >
        <CardMessage
        onDoubleClick={()=>removeCard(props.card.id)}
        person={props.person}
        >
            <NameUser person={props.person} >{props.card.user}</NameUser>
            <MessageUser person={props.person} >{props.card.message}</MessageUser>

            <BottomCard>
            <TimeSend>{props.card.hour}</TimeSend>
            <TickGreen src={tickgreen} alt="tick-green" />
            </BottomCard>
        </CardMessage>
        </GlobalStyleCard>
    )
} 