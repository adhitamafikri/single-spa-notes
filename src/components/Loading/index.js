import React from 'react'
import { createPortal } from 'react-dom'
import styled from 'styled-components'

const StyledLoading = styled.div`
  background: rgba(0,0,0,0.35);
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 24px;
  color: white;
`

function Loading() {
  return createPortal(<StyledLoading>Loading...</StyledLoading>, document.body)
}

export default Loading
