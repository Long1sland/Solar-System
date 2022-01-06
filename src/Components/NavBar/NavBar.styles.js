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
height: 100%;


a{
    
    font-family: 'Spartan', sans-serif;
    font-weight: 700;
    font-size: 11px;
    line-height: 25px;
    letter-spacing: 1px;
    color: var(--darkGrey);
    
    margin-right: 33px;
    height: 100%;
    border-top: 3px solid transparent;
    padding: 26px 0;
    transition: all 0.3s ease-in-out;
}

a:hover{
    border-top: 3px solid white;
    color: var(--white)
}

#mercury{

}

#venus{

}

#earth{

}

#mercury{

}

#jupiter{

}

#saturn{

}

#uranus{

}

#neptune{

}

.noMargin{
    margin-right: 0px; 
    
}
//Phones
@media screen and (max-width: 768px) {
    display: none;
}
`

