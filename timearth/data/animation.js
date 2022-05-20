import styled, { keyframes } from 'styled-components';

export const fadeIn = keyframes`
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
`

export const fadeOut = keyframes`
    from {
        opacity: 1;
    }
    to {
        opacity: 0;
    }
`

export const slideInLeft = keyframes`
    from {
        opacity: 0;
        left: -50px;
        position: relative;
    }
    to {
        opacity: 1;
        left: 0;
        position: relative;
    }
`

export const slideInRight = keyframes`
    from {
        opacity: 0;
        right: -50px;
        position: relative;
    }
    to {
        opacity: 1;
        right: 0;
        position: relative;
    }
`