import { createGlobalStyle } from "styled-components";
export const GlobalStyles = createGlobalStyle`
  
  @font-face {
    font-family: 'Melodrama';
    src: url('/src/assets/fonts/Melodrama-Light.woff2') format('woff2'),
         url('/src/assets/fonts/Melodrama-Light.woff') format('woff'),
         url('/src/assets/fonts/Melodrama-Light.ttf') format('truetype');
    font-weight: 300;
    font-display: swap;
    font-style: normal;
  }

  @font-face {
    font-family: 'Melodrama';
    src: url('/src/assets/fonts/Melodrama-Regular.woff2') format('woff2'),
         url('/src/assets/fonts/Melodrama-Regular.woff') format('woff'),
         url('/src/assets/fonts/Melodrama-Regular.ttf') format('truetype');
    font-weight: 400;
    font-display: swap;
    font-style: normal;
  }

  @font-face {
    font-family: 'Melodrama';
    src: url('/src/assets/fonts/Melodrama-Medium.woff2') format('woff2'),
         url('/src/assets/fonts/Melodrama-Medium.woff') format('woff'),
         url('/src/assets/fonts/Melodrama-Medium.ttf') format('truetype');
    font-weight: 500;
    font-display: swap;
    font-style: normal;
  }

  @font-face {
    font-family: 'Melodrama';
    src: url('/src/assets/fonts/Melodrama-Semibold.woff2') format('woff2'),
         url('/src/assets/fonts/Melodrama-Semibold.woff') format('woff'),
         url('/src/assets/fonts/Melodrama-Semibold.ttf') format('truetype');
    font-weight: 600;
    font-display: swap;
    font-style: normal;
  }

  @font-face {
    font-family: 'Melodrama';
    src: url('/src/assets/fonts/Melodrama-Bold.woff2') format('woff2'),
         url('/src/assets/fonts/Melodrama-Bold.woff') format('woff'),
         url('/src/assets/fonts/Melodrama-Bold.ttf') format('truetype');
    font-weight: 700;
    font-display: swap;
    font-style: normal;
  }


  @font-face {
    font-family: 'Melodrama Variable';
    src: url('/src/assets/fonts/Melodrama-Variable.woff2') format('woff2'),
         url('/src/assets/fonts/Melodrama-Variable.woff') format('woff'),
         url('/src/assets/fonts/Melodrama-Variable.ttf') format('truetype');
    font-weight: 300 700;
    font-display: swap;
    font-style: normal;
  }


  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body {
    background-color: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.text};
    font-family: ${({ theme }) => theme.fonts.regular};
    scroll-behavior: smooth;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  section {
    min-height: 100vh;
    padding: 4rem 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
