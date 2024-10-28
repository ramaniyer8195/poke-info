import express from "express";
import {
  getPokemonsData,
  getPokemonDetails,
} from "../controllers/pokemonController";

const router = express.Router();

router.get("/getPokemons", getPokemonsData);
router.get("/getPokemon/:pokemonId", getPokemonDetails);

export default router;
