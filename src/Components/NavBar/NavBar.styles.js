import styled from "styled-components";


export const Wrapper = styled.div`


background-color: transparent;
padding: 0 28px;
border-bottom: 1px solid var(--darkGrey);




`



export const Content = styled.div`

display: flex;
justify-content: space-between;
align-items: center;
max-width: var(--maxWidth);
margin: 0 auto;
height: 100%;

p{
    font-family: "Antonio", sans-serif;
    color: var(--white);
    font-size: 28px;
}


//Tablets
@media screen and (max-width: 1024px){

    flex-direction: column;
}

//Phones
@media screen and (max-width: 768px){
    flex-direction: row;
}

`


export const Navlinks = styled.div`

display: flex;



a{
    
    font-family: 'Spartan', sans-serif;
    font-weight: 700;
    font-size: 11px;
    line-height: 25px;
    letter-spacing: 1px;
    color: var(--darkGrey);
    
    margin-right: 33px;
    border-top: 3px solid transparent;
    padding: 30px 0;
    transition: all 0.3s ease-in-out;
}

a:hover, .active{
    color: var(--white)
}



#mercury.active , #mercury:hover{
    border-top: 3px solid var(--mercuryColor);
}

#venus.active, #venus:hover{

    border-top: 3px solid var(--venusColor)
}

#earth.active, #earth:hover{
border-top: 3px solid var(--earthColor)
}

#mars.active, #mars:hover{
border-top: 3px solid var(--marsColor)
}

#jupiter.active, #jupiter:hover{
border-top: 3px solid var(--jupiterColor)
}

#saturn.active, #saturn:hover{
border-top: 3px solid var(--saturnColor)
}

#uranus.active, #uranus:hover{
border-top: 3px solid var(--uranusColor)
}

#neptune.active, #neptune:hover{
border-top: 3px solid var(--neptuneColor)
}

.noMargin{
    margin-right: 0px; 
    
}
//Phones
@media screen and (max-width: 768px) {
    display: none;
}
`

