import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

const initialState = [
  {
    name: "",
    color: "",
    overview: {
      content: "",
      source: "",
    },
    structure: {
      content: "",
      source: "",
    },
    geology: {
      content: "",
      source: "",
    },

    rotation: "",
    revolution: "",
    radius: "",
    temperature: "",
    images: {
      planet: "./assets/geology-mercury.png",
      internal: "",
      geology: "",
    },
  },
];

const usePlanetFetch = () => {
  const { planetId } = useParams();
  const [state, setState] = useState(initialState);

  useEffect(() => {
    getData();
  }, [planetId]);

  const getData = async () => {
    const planetData = await (await fetch("data.json")).json();

    const filtered = planetData.filter((planet) => {
      return planet.name == planetId;
    });

    setState(...filtered);
  };

  return { state };
};

export default usePlanetFetch;
