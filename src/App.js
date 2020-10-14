import React from "react";
// import logo from "./logo.svg";
import "./App.css";
import Title from "./components/Title";
import Pokemon from "./components/Pokemon/Pokemon";

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

// const listPokemons = pokemons.map((aPokemon) => {
//   return (
//     <Pokemon
//       name={aPokemon.name}
//       weight={aPokemon.weight}
//       awesome={aPokemon.awesome}
//       terrifying={aPokemon.terrifying}
//       abilities={aPokemon.abilities}
//     />
//   );
// });

function App() {
  return (
    <main className="container">
      <Title content="Pokemon! Gotta catch'em all!" />
      <div className="row my-4 mb-5">
        {pokemons.map((aPokemon) => (
          <div className="col-md-6 col-lg-4">
            <Pokemon
              name={aPokemon.name}
              weight={aPokemon.weight}
              awesome={aPokemon.awesome}
              terrifying={aPokemon.terrifying}
              abilities={aPokemon.abilities}
            />
          </div>
        ))}
      </div>
    </main>
  );
}
export default App;

// <div className="App">
//   {/* <header className="App-header">
//     <img src={logo} className="App-logo" alt="logo" />
//     <p>
//       I love coding, and I love this journey. JavaScript rocks!
//       <code>src/App.js</code>
//     </p>
//     <a
//       className="App-link"
//       href="https://reactjs.org"
//       target="_blank"
//       rel="noopener noreferrer"
//     >
//       Click here and start your journey on becoming a hacker with us!
//     </a>
//   </header>
// </div> */}
