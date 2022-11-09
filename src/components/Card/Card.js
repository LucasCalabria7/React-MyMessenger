import React from 'react'
import tickgreen from '../assets/tick-green-double.svg'

import {GlobalStyleCard, CardMessage, NameUser, MessageUser, TimeSend, TickGreen, BottomCard} from './StyledCard'

export function Card (props) {
    console.log(props)
    return (
        <GlobalStyleCard>
        <CardMessage>
            <NameUser>{props.user}</NameUser>
            <MessageUser>{props.card}</MessageUser>
            <BottomCard>
            <TimeSend>20:00</TimeSend>
            <TickGreen src={tickgreen} alt="tick-green" />
            </BottomCard>
        </CardMessage>
        </GlobalStyleCard>
    )
}