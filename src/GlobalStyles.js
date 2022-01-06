import { createGlobalStyle } from "styled-components";
import Stars from "../src/images/background-stars.svg"

export const GlobalStyle = createGlobalStyle`

:root{
    --backgroundColor: #070724;
    --darkGrey: #838391;
    --white: #FFFFFF;
    --maxWidth: 1280px;
    --mercuryColor: #419EBB;
    --venusColor: #EDA249;
    --earthColor: #6f2ed6;
    --marsColor: #D14C32;
    --jupiterColor: #D83A34;
    --saturnColor: #CD5120;
    --uranusColor: #1ec2a4;
    --neptuneColor: #2d68f0;
}

body {  
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    background: url(${Stars}), var(--backgroundColor);
    font-family: 'Spartan', sans-serif;
    font-weight: 400;
    font-size: 14px;
    line-height: 25px;

    a{
        text-decoration: none;
    }
    

    h1{
        font-family: 'Antonio', sans-serif;
        font-size: 80px;
        line-height: 103px;
    }

    h2{
        font-family: 'Antonio', sans-serif;
        font-size: 40px;
        line-height: 52px;
        letter-spacing: -1.5px;
        color: var(--white);
    }

    h3{
        font-family: 'Spartan', sans-serif;
        font-size: 12px;
        line-height: 25px;
        letter-spacing: 2.6px;
        color: var(--white)
    }


    }

* {
    box-sizing: border-box;
}

`

