import React from "react";
import {HeaderGlobalStyle, ProfileArea, ButtonsArea, ProfilePic, Icons, NameArea, Status, SelectUser} from './StyledHeader.js'

import phone from '../assets/phone.svg'
import camera from '../assets/video-cam.svg'
import hamburguer from '../assets/hamburger.svg'
import bighead1 from '../assets/bighead-1.svg'


export function Header () {
    return (
        <>
        <HeaderGlobalStyle>
        <ProfileArea>
        <ProfilePic src={bighead1} alt="Imagem Perfil" />
        <NameArea>
            <SelectUser>
            <option value="">Lucas</option>
            <option value="">Mary</option>
            <option value="">Robbie</option>
            <option value="">Me</option>
            </SelectUser>
            <Status>Online</Status>
        </NameArea>
        </ProfileArea>

        <ButtonsArea>
            <Icons src={phone} alt="Phone Icon" />
            <Icons src={camera} alt="Camera Icon" />
            <Icons src={hamburguer} alt="Hamburguer Icon" />
        </ButtonsArea>
        </HeaderGlobalStyle>
        </>
    )
}