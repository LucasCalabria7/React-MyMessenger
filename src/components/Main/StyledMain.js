import styled from 'styled-components'

export const GlobalStyleMain = styled.section `
    background-color: #F1F4F7;
    height: 80vh;
    width: 50vw;
    display: flex;
    flex-direction: column;
`

export const InputArea = styled.div `
    margin: 1rem;
    display: flex;
    background-color: white;
    border-radius: 1rem;
    justify-content: space-between;
    align-items: center;
`

export const InputMessage = styled.input `
    width: 35vw;
    height: 5vh;
    border-radius: 1rem;
    border: none;
    outline: 0;
    box-shadow: 0 0 0 0;
`

export const Button = styled.button `
    height: 5vh;
    border-radius: 1rem;
    border: none;
    width: 5vw;
    background-color: rgb(97, 197, 84);
    display: flex;
    justify-content: center;
    align-items: center;

    :hover {
        cursor: pointer;
        opacity: 0.7;
    }
`

export const SideIcon = styled.img `
    :hover {
        cursor: pointer;
        background-color: #F1F4F9;
        border-radius: 1.5rem;
        height: 4vh;
        width: 2vw;
    }
`