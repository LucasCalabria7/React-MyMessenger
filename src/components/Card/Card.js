import React from 'react'
import tickgreen from '../assets/tick-green-double.svg'

import {GlobalStyleCard, CardMessage, NameUser, MessageUser, TimeSend, TickGreen, BottomCard} from './StyledCard'

export function Card (props) {
    console.log(props.person)
    return (
        <GlobalStyleCard
        person={props.person}
        >
        <CardMessage
        person={props.person}
        >
            <NameUser person={props.person} >{props.card.user}</NameUser>
            <MessageUser person={props.person} >{props.card.message}</MessageUser>

            <BottomCard>
            <TimeSend>20:00</TimeSend>
            <TickGreen src={tickgreen} alt="tick-green" />
            </BottomCard>
        </CardMessage>
        </GlobalStyleCard>
    )
} 