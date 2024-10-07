import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { PokeCardProps } from "@/interfaces/home";
import { TYPE_IMAGES } from "@/constants/pokeConstants";

const PokeCard = ({ pokemon, handleModalChange }: PokeCardProps) => {
  return (
    <Card
      className="bg-muted cursor-pointer"
      onClick={() => handleModalChange(pokemon)}
    >
      <CardHeader className="p-2">
        <CardTitle>
          <div className="flex items-center justify-between">
            <span className="text-xl">#{pokemon.pokemonId}</span>
            <div className="flex gap-3">
              {pokemon.types.map((type) => {
                return <img className="w-8" src={TYPE_IMAGES[type].image} />;
              })}
            </div>
          </div>
        </CardTitle>
      </CardHeader>
      <CardContent className="px-2">
        <div className="flex items-center justify-center">
          <img src={pokemon.sprites.pikachu.regular} />
        </div>
      </CardContent>
      <CardFooter className="px-2">
        <p className="uppercase text-xl text-center w-full">{pokemon.name}</p>
      </CardFooter>
    </Card>
  );
};

export default PokeCard;
