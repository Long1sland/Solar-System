import { useEffect, useState } from "react";
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
  const { planetId, section } = useParams();
  const [state, setState] = useState(initialState);
  const [planetImage, setPlanetImage] = useState("");
  const [planetText, setPlanetText] = useState("");

  useEffect(() => {
    getData();
  }, [planetId, section]);

  const getData = async () => {
    console.log("just entered");
    const planetData = await (await fetch("../data.json")).json();

    console.log(planetData);
    const filtered = planetData.filter((planet) => {
      return planet.name === planetId;
    });

    setState(...filtered);
    setPlanetImage(() => {
      if (section === "overview") {
        return [filtered[0].images.planet];
      } else if (section === "internal") {
        return [filtered[0].images.internal];
      } else {
        return [filtered[0].images.planet, filtered[0].images.geology];
      }
    });

    setPlanetText(() => {
      if (section === "overview") {
        return filtered[0].overview.content;
      } else if (section === "internal") {
        return filtered[0].structure.content;
      } else {
        return filtered[0].geology.content;
      }
    });
  };

  return { state, planetId, section, planetImage, planetText };
};

export default usePlanetFetch;
