import styled from 'styled-components'

export const HeaderGlobalStyle = styled.section `
    height: 10vh;
    display: flex;
    justify-content: space-between;
`

export const ProfileArea = styled.section `
    display:flex;
    align-items: center;
`

export const ButtonsArea = styled.section `
    display:flex;
    align-items: center;
    margin: 1rem;
    gap: 0.5rem;
    padding-top: 1vh;
`

export const ProfilePic = styled.img `
    height: 8vh;
    width: 4vw;
    display: flex;
    align-items: center;
    margin-bottom: 1.5vh;
`

export const Icons = styled.img `
    :hover {
        cursor: pointer;
        background-color: #F1F4F9;
        border-radius: 50%;
        height: 3vh;
        width: 1.5vw;
    }
`

export const NameArea = styled.div `
    font-weight: 900;
    padding-top: 1vh;
`

export const Status = styled.p `
    font-weight: 400;
    color: #B9BEC3;
    margin-left: 0.2vw;
`

export const SelectUser = styled.select `
    border: none;
    font-weight: 900;
`