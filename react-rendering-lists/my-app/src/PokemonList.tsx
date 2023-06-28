export type Pokemon = {
  number: string;
  name: string;
};

type Props = {
  pokedex: Pokemon[];
};

export default function PokemonList({ pokedex }: Props) {
  return (
    <ul>
      {pokedex.map((pokemon) => (
        <li key={pokemon.number}>
          {' '}
          <h1>{pokemon.name}</h1>{' '}
        </li>
      ))}
    </ul>
  );
}
