import express from "express";
import { getPokemons, getPokemon } from "../controllers/pokemonController";

const router = express.Router();

router.get("/getPokemons", getPokemons);
router.get("/getPokemon/:pokemonId", getPokemon);

export default router;
