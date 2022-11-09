import React from "react";
import {useState} from 'react';

import styled, { createGlobalStyle } from "styled-components";

import { Header } from "./components/Header/Header";
import { Main } from "./components/Main/Main"

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`

const Container = styled.section `
  display:flex;
  flex-direction:column;
  min-height: 100vh;
  max-width: 50vw;
  margin: 0 auto;
`


function App() {

  const [user, setUser] = useState("")

  return (
  <>
  <GlobalStyles />
  <Container>
  <Header
  user={user}
  setUser={setUser}
  />

  <Main 
  user={user}
  />
  </Container>
  </>
  )
}

export default App;
