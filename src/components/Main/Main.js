import React from 'react'
import { useState } from 'react'

import {GlobalStyleMain, InputArea, InputMessage, Button, SideIcon} from './StyledMain'
import {Card} from '../Card/Card'

import microphone from '../assets/microphone.svg'
import paperclip from '../assets/paperclip.svg'
import smiley from '../assets/smiley.svg'


export function Main (props) {

    const [message, setMessage] = useState("")

    const [cards, setCards] = useState([])

    const onChangeInput = (event) => {
        setMessage(event.target.value)
    }

    const onKeyDownInput = (event) => {
        if(event.key === "Enter") {
            let copyMessage = [...cards]
            copyMessage.push(message)
            setCards(copyMessage)
            setMessage("")
        }
    }

    return (
    <>
        <GlobalStyleMain  >
            {cards.map((card, index) => {
                return <Card 
                key={index}
                card={card}
                user={props.user}
                />
            })}
        </GlobalStyleMain>
        <InputArea>
            <SideIcon src={smiley} alt="Smiley-Icon"/>
            <InputMessage onKeyDown={onKeyDownInput} value={message} onChange={onChangeInput} type={"text"} placeholder="Type a message" />
            <SideIcon src={paperclip} alt="Paperclip-icon" />
            <Button ><img src={microphone} alt="Mic-Icon" /></Button>
        </InputArea>
    </>
    )
}