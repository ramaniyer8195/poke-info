import { RequestHandler } from "express";
import { GetPokemonsRes } from "../interfaces/controllers";

export const getPokemons: RequestHandler<{}, GetPokemonsRes> = async (
  req,
  res
) => {
  res.status(200).json({ data: [{ name: "temp" }] });
};
