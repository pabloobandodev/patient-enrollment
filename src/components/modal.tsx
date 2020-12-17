import React from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import ReactDOM from 'react-dom'
import styled from 'styled-components'

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1040;
  width: 100vw;
  height: 100vh;
  background-color: #00000030;
`
const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1050;
  width: 100%;
  height: 100%;
  overflow-x: hidden;
  overflow-y: auto;
  outline: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`
const ModalStyled = styled.div`
  z-index: 100;
  background-color: #fff;
  height: 55%;
  position: relative;
  margin: 1.75rem auto;
  border-radius: 0.6rem;
  width: 100%;
  max-width: 50rem;
  margin: 1rem;
  display: flex;
  flex-direction: column;
`

const Modal: React.FC<{ isOpen: boolean }> = ({ children, isOpen }) => {
  if (!isOpen) {
    return null
  }
  return ReactDOM.createPortal(
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 1 }}
      >
        <Overlay />
        <Wrapper aria-modal aria-hidden tabIndex={-1} role='dialog'>
          <ModalStyled>{children}</ModalStyled>
        </Wrapper>
      </motion.div>
    </AnimatePresence>,
    document.body
  )
}

export default Modal
