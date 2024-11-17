import { createGlobalStyle } from 'styled-components'
import  { globalStyles } from 'twin.macro'

const GlobalStyles = createGlobalStyle(globalStyles, `
   /* Below animations are for modal created using React-Modal */
     .ReactModal__Overlay {
     transition: transform 300ms ease-in-out;
     transition-delay: 100ms;
     transform: scale(0);
   }
   .ReactModal__Overlay--after-open{
     transform: scale(1);
   }
   .ReactModal__Overlay--before-close{
     transform: scale(0);
   }
   body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    background: rgb(90, 193, 52);
    background: linear-gradient(90deg, rgba(90, 193, 52, 1) 0%, rgba(0, 0, 0, 1) 100%);
    color: white; /* Optional: Set text color to white */
  }
`)

export default GlobalStyles