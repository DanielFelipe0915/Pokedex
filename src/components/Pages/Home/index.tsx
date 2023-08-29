import React, { useEffect, useState } from "react";
import {
  Details,
  GridContainer,
  List,
  Main,
  CardPK,
  Component,
  Header,
  Body,
  SearchBox,
  TypePokemonDiv,
} from "./styles";
import Link from "next/link";

interface Pokemon {
  name: string;
  url: string;
  sprites: {
    front_default: string;
  };
}

interface PokemonDetails {
  name: string;
  id: number;
  height: number;
  weight: number;
  sprites: {
    front_default: string;
  };
  types: {
    slot: number;
    type: {
      name: string;
      url: string;
    };
  }[];
}

const PokeList: React.FC = () => {
  const [pokemonList, setPokemonList] = useState<Pokemon[]>([]);
  const [completePokemonList, setCompletePokemonList] = useState<Pokemon[]>([]);
  const [selectedPokemon, setSelectedPokemon] = useState<Pokemon | null>(null);
  const [pokemonDetails, setPokemonDetails] = useState<PokemonDetails | null>(
    null
  );
  const [searchTerm, setSearchTerm] = useState("");

  const [isLoading, setIsLoading] = useState(false);
  const [showPokeball, setShowPokeball] = useState("none");

  useEffect(() => {
    const fetchPokemonList = async () => {
      setIsLoading(true);

      try {
        const response = await fetch(
          "https://pokeapi.co/api/v2/pokemon?limit=1000"
        );
        const data = await response.json();

        setPokemonList(data.results);
        setCompletePokemonList(data.results);
        setIsLoading(false);
      } catch (error) {
        console.error("Error al obtener la lista de Pokémon", error);
        setIsLoading(false);
      }
    };

    fetchPokemonList();
  }, []);

  useEffect(() => {
    const fetchPokemonDetails = async () => {
      if (selectedPokemon) {
        try {
          const response = await fetch(selectedPokemon.url);
          const data = await response.json();
          setPokemonDetails({
            name: data.name,
            height: data.height,
            weight: data.weight,
            sprites: data.sprites,
            id: data.id,
            types: data.types,
          });
        } catch (error) {
          console.error("Error al obtener los detalles del Pokémon", error);
        }
      }
    };

    fetchPokemonDetails();
  }, [selectedPokemon]);

  const handlePokemonClick = (pokemon: Pokemon) => {
    setSelectedPokemon(pokemon);
    setShowPokeball("flex");
  };
  const handlePokemonDelete = () => {
    setSelectedPokemon(null);
    setShowPokeball("none");
  };

  const translateType = (type: string) => {
    switch (type) {
      // 1
      case "fire":
        return "Fuego";
      //2
      case "water":
        return "Agua";
      //3
      case "electric":
        return "Electrico";
      //4
      case "grass":
        return "Planta";
      //5
      case "ground":
        return "Tierra";
      //6
      case "bug":
        return "Bicho";
      //7
      case "poison":
        return "Veneno";
      //8
      case "flying":
        return "Volador";
      //9
      
      case "fairy":
        return "Hada";
      //10
      case "normal":
        return "Normal";
      //11
      case "steel":
        return "Acero";
      //12
      case "rock":
        return "Roca";
      //13
      case "ghost":
        return "Fantasma";
      //14
      case "dragon":
        return "Dragon";
      //15
      case "psychic":
        return "Psiquico";
      //16
      case "ice":
        return "Hielo";
      //17
      case "fighting":
        return "Lucha";
      //18
      case "dark":
        return "Siniestro";

      default:
        return type;
    }
  };

  const handleSearch = (event: any) => {
    setSearchTerm(event.target.value);

    const filteredPokemonList = completePokemonList.filter((pokemon) =>
      pokemon.name.toLowerCase().includes(event.target.value.toLowerCase())
    );
    setPokemonList(filteredPokemonList);
  };

  return (
    <>
      <Header>
        <h1>Pokedex</h1>
      </Header>
      <Body>
        {/* <Aside></Aside> */}
        <Main>
          <List>
            <SearchBox
              type="search"
              value={searchTerm}
              onChange={handleSearch}
              placeholder="Buscar Pokémon"
            />

            {isLoading ? (
              <p>Cargando...</p>
            ) : (
              <GridContainer>
                {pokemonList.map((pokemon) => (
                  <Link href="#topclass">
                    <CardPK
                      key={pokemon.name}
                      onClick={() => handlePokemonClick(pokemon)}
                    >
                      {pokemon.name.charAt(0).toUpperCase()}
                      {pokemon.name.slice(1)}
                      <img
                        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${getPokemonId(
                          pokemon.url
                        )}.png`}
                        alt="Sprite del Pokémon"
                      />

                      <span>No. {getPokedexNumber(pokemon.url)}</span>
                    </CardPK>
                  </Link>
                ))}
              </GridContainer>
            )}
          </List>
          <Details style={{ display: showPokeball }} id="topclass">
            {selectedPokemon && (
              <div>
                <h2>Detalles del Pokémon</h2>
                {pokemonDetails ? (
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                    }}
                  >
                    <p style={{ textAlign: "center" }}>
                      Nombre: {pokemonDetails.name.charAt(0).toUpperCase()}
                      {pokemonDetails.name.slice(1)}
                    </p>
                    <img
                      style={{ width: "50%", margin: "0 auto" }}
                      src={pokemonDetails.sprites.front_default}
                      alt="Sprite del Pokémon"
                    />
                    <p style={{ textAlign: "center" }}>
                      Altura: {pokemonDetails.height}
                    </p>
                    <p style={{ textAlign: "center" }}>
                      Peso: {pokemonDetails.weight}
                    </p>
                    <p style={{ textAlign: "center" }}>Tipos:</p>

                    {pokemonDetails.types.map((type) => (
                      <TypePokemonDiv
                      
                        // style={{ textAlign: "center", lineHeight: "4px" }}
                        key={type.slot}
                      >
                        <div id="name" className={type.type.name }>
                        {translateType(type.type.name)}
</div>
                        {/* *{type.type.name.charAt(0).toUpperCase()}
                        {type.type.name.slice(1)} */}
                      </TypePokemonDiv>
                    ))}
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    ></div>
                    <Component style={{ display: showPokeball }}>
                      <img
                        src="/static/img/Home/pokeball.png"
                        onClick={() => handlePokemonDelete()}
                      />
                    </Component>
                  </div>
                ) : (
                  <p>Cargando detalles...</p>
                )}
              </div>
            )}
          </Details>
        </Main>
      </Body>
    </>
  );
};

export default PokeList;

function getPokemonId(url: string) {
  const parts = url.split("/");
  return parts[parts.length - 2];
}
function getPokedexNumber(url: string) {
  const parts = url.split("/");
  const pokemonId = parseInt(parts[parts.length - 2]);
  return pokemonId.toString().padStart(3, "0");
}
