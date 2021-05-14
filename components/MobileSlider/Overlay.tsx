import React from 'react'
import { styled } from '../../stitches.config'

const OverlayWrapper = styled("div", {
    backgroundColor: 'rgb(188 188 188 / 50%)',
    width: '100vw',
    height: '100vh',

    position: 'fixed',
    top: '0',
    backdropFilter: 'blur(4px)'
})


const Overlay: React.FC = ({ children }) => {

    return <OverlayWrapper>
        {children}
    </OverlayWrapper>
}

export default Overlay
