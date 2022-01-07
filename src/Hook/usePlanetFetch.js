import React, { useEffect, useState } from "react";

const initialState = [
    {
        name:"",
        color:"",
        overview:{
            content:"",
            source:""
        },
        structure:{
            content:"",
            source:""
        },
        geology:{
            content: "",
            source:""
        },

        rotation:"",
        revolution:"",
        radius:"",
        temperature:"",
        images:{
            planet:"./assets/geology-mercury.png",
            internal:"",
            geology:""
        }
    }
]

const usePlanetFetch = (planetName) => {

    const [state, setState] = useState(initialState)


    useEffect(() => {
        getData();
    }, [planetName])

    const getData = async () => {

        const planetData = await (await fetch("data.json")).json()

        const filtered = planetData.filter((planet) =>{
            return planet.name == planetName
        })

        setState(...filtered)


    }


    return {state};
}
 
export default usePlanetFetch;