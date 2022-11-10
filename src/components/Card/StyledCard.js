import styled from 'styled-components'

export const GlobalStyleCard = styled.section `
    display: flex;
    flex-wrap: wrap;
    justify-content: ${props => props.person === 'me' ? "flex-end" : "flex-start"};
`

export const CardMessage = styled.div `
    background-color: ${props => props.person === 'me' ? "rgb(97, 197, 84)" : "lightgray"};
    color: ${props => props.person === 'me' ? "white" : "black"};
    max-height: 5.5rem;
    min-width: ${props => props.person === 'me' ? "6vw" : "15vw"};
    margin: 1rem;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    border-radius: 0.5rem;
`

export const NameUser = styled.p `
    display: ${props => props.person === 'me' ? "none" : "inline"};
    font-weight: 700;
    margin: 0.5rem;
`

export const BottomCard = styled.section `
    display: flex;
    justify-content: flex-end;
    margin-right: 0.5rem;
`

export const MessageUser = styled.p `
    margin: 0 0.5rem;
    margin-top: ${props => props.person === 'me' ? "0.5rem" : "0"};
`

export const TimeSend = styled.p `
    margin: 0.5rem;
    color: #727272;
    font-size: 0.75rem;
`

export const TickGreen = styled.img `
    margin-top: 0.6rem;
    width: 1rem;
    height: 1rem;
`
