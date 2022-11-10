import React from 'react'
import { useState } from 'react'

import {GlobalStyleMain, InputArea, InputMessage, Button, SideIcon} from './StyledMain'
import {Card} from '../Card/Card'

import microphone from '../assets/microphone.svg'
import paperclip from '../assets/paperclip.svg'
import smiley from '../assets/smiley.svg'


export function Main (props) {

    const [message, setMessage] = useState("")

    const [cards, setCards] = useState([
        {
            id: 1,
            user: "Luke",
            message: "Hello World!",
            hour: new Date().toLocaleString("pt-BR", {
                hour: "numeric",
                minute: "numeric",
                hour12: true
            })
        }
    ])

    const onChangeInput = (event) => {
        setMessage(event.target.value)
    }


    const onKeyDownInput = (event) => {
        if(event.key === "Enter") {
            let copyMessage = [...cards]
            let newMessage = {
                id: Date.now(),
                user: props.user,
                message: message,
                hour: new Date().toLocaleString("pt-BR", {
                    hour: "numeric",
                    minute: "numeric",
                    hour12: true
                })
            }

            copyMessage.push(newMessage)
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
                setCards={setCards}
                cards={cards}
                person={card.user}
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