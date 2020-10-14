import React from "react";
// import logo from "./logo.svg";
import "./App.css";
import Title from "./components/Title";
import Pokemon from "./components/Pokemon/Pokemon";
import LikeCounter from "./components/LikeCounter";
import LikeButton from "./components/LikeButton";
import AwesomeAnimals from "./components/AwesomeAnimals";
import ArticleList from "./components/ArticleList";

const pokemons = [
  {
    name: "Charizard",
    weight: 90,
    awesome: true,
    terrifying: false,
    abilities: ["Blaze", "Solar power", "Tough claws", "Drought"],
  },
  {
    name: "Bulbasaur",
    weight: 6.9,
    awesome: true,
    terrifying: false,
    abilities: ["Overgrow", "Chlorophyl"],
  },
  {
    name: "Mewtwo",
    weight: 122,
    awesome: true,
    terrifying: true,
    abilities: ["Pressure", "Unnerve", "Steadfast", "Insomnia"],
  },
  {
    name: "Beedril",
    weight: 45,
    awesome: false,
    terrifying: false,
    abilities: ["Intimidate", "Unnerve"],
  },
];

const pokemonCards = pokemons.map((aPokemon) => {
  return (
    <div className="col-md-6 col-lg-4">
      <Pokemon
        name={aPokemon.name}
        weight={aPokemon.weight}
        awesome={aPokemon.awesome}
        terrifying={aPokemon.terrifying}
        abilities={aPokemon.abilities}
      />
      <LikeButton />
      <LikeCounter />
    </div>
  );
});

const animals = [
  {
    name: "Chicken",
    level: 1,
  },
  {
    name: "Sloth",
    level: 2,
  },
  {
    name: "Porcupine",
    level: 3,
  },
  {
    name: "Killer Whale",
    level: 4,
  },
  {
    name: "Velociraptor",
    level: 5,
  },
];

const awesomAnimals = animals.map((animal) => {
  return <AwesomeAnimals name={animal.name} level={animal.level} />;
});

function App() {
  return (
    <main className="container">
      <Title content="Pokemon! Gotta catch'em all!" />
      <div>
        <ArticleList />
      </div>
      <div className="row my-4 mb-5">{pokemonCards}</div>
      <ul>{awesomAnimals}</ul>
    </main>
  );
}
export default App;
