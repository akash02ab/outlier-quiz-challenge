import React from 'react'
import styled from 'styled-components'

const Overlay = styled.div`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`
const Spinner = () => {
  return (
    <Overlay>
      <div className='spinner-border' />
    </Overlay>
  )
}

export default Spinner
