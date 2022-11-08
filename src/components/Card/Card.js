import React from 'react'
import tickgreen from '../assets/tick-green-double.svg'

import {GlobalStyleCard, CardMessage, NameUser, MessageUser, TimeSend, TickGreen} from './StyledCard'

export function Card (props) {
    return (
        <GlobalStyleCard>
        <CardMessage>
            <NameUser>{props.card.name}</NameUser>
            <MessageUser>{props.card.message}</MessageUser>
            <TimeSend>20:00<TickGreen src={tickgreen} alt="tick-green" /></TimeSend>
        </CardMessage>
        </GlobalStyleCard>
    )
}