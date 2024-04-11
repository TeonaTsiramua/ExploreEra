import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`

:root {
  
  /* colors */
  --background: 0, 0%, 96%;

  --white: 0, 0%, 100%;

  --primary-1: 24, 100%, 50%;
  --primary-2: 24, 100%, 39%;
  --primary-3: 24, 100%, 62%;

  --secondary-1: 0, 0%, 88%;
  --secondary-2: 0, 2%, 92%;
  --secondary-3: 0, 0%, 86%;
  --secondary-4: 0, 0%, 90%;


  --clr-text-1: 240, 1%, 26%;
  --clr-text-2: 0, 0%, 15%;
  --clr-text-3: 0, 100%, 50%;



  /* font-sizes */
  --fs-900: 24px;
  --fs-800: 24px;
  --fs-700: 16px;
  --fs-600: 16px;

  --fs-h2: 22px;
  --fs-h3: 20px;

  --fs-link: 18px;
  --fs-button: 16px;
  --fs-p: 16px;
  --fs-label: 14px;
  --fs-ph: 16px;
  
  --fs-28: 20px;
  --fs-20: 16px;


  --fs-16: 1rem;

  @media (min-width: 430px) {
  
    --fs-900: 28px;
    --fs-800: 30px;
    --fs-700: 24px;
    --fs-600: 24px;

    --fs-h2: 32px;
    --fs-h3: clamp(16px, 3.8vw, 28px);;
    --fs-link: 20px;    
    --fs-button: 20px;
    --fs-label: 16px;
    --fs-ph: 20px;


    --fs-28: clamp(20px, 1.5vw, 28px);
    --fs-20: clamp(16px, 1.5vw, 20px);

  
}

@media (min-width: 800px) {
  
  --fs-900: clamp(28px, 2.5vw, 48px);
  --fs-800: 64px;
  --fs-700: 40px;
  --fs-600: 40px;


    --fs-h2:  clamp(32px, 3.5vw, 40px);
    --fs-h3:  clamp(20px, 2vw, 32px);
    --fs-link: clamp(18px, 1.5vw, 28px);
    --fs-button: 24px;
    --fs-p: 18px;

    --fs-28: clamp(24px, 2vw, 32px);
    --fs-20: clamp(16px, 1.5vw, 24px);
    --fs-16: 1rem;
  
}
}



/* ------------------- */
/* Reset               */
/* ------------------- */

/* Box sizing rules */
*,
*::before,
*::after {
  box-sizing: border-box;
}


body {
  margin: 0;
  padding: 0;
  overflow-x: hidden;
  min-height: 100vh;
  text-rendering: optimizeSpeed;
  font-family: "Roboto", sans-serif;
  font-size: 1rem;
  color: hsl(var(--clr-text-1));
  background-color: hsl(var(--background));
  line-height: 1.1;
  
}

#root{
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  justify-content: space-between;
  gap: 3rem;
}
h1,
h2,
h3,
h4,
h5,
h6,
p,
ul,
figure,
picture  {
  padding: 0;
  margin: 0;
}
button {
  border: none;
  background-color: transparent;
  font-family: inherit;
  padding: 0;
  cursor: pointer;
}
/* Remove list styles on ul, ol elements with a list role, which suggests default styling will be removed */
ul,
ol {
  list-style: none;
}
li {
  list-style-type: none;
}
/* Set core root defaults */
html:focus-within {
  scroll-behavior: smooth;
}


/* Make images easier to work with */
img,
picture {
  max-width: 100%;
  display: block;
}

/* Inherit fonts for inputs and buttons */
input,
button,
textarea,
select {
  font: inherit;
}
/* Remove all animations, transitions and smooth scroll for people that prefer not to see them */
@media (prefers-reduced-motion: reduce) {
  html:focus-within {
    scroll-behavior: auto;
  }

  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}

   .body-scroll-lock {
       overflow: hidden;
    }

`;
