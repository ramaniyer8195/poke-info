import { Ability, Item, Move, Pokemon } from "./api";

export interface ModalProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
}

export interface PokeDetailsModalProps extends ModalProps {
  pokemon: Pokemon;
  handlePokemonChange: (pokemonId: number) => void;
}

export interface AbilityDetailsModalProps extends ModalProps {
  ability: Ability | null;
}

export interface ItemDetailsModalProps extends ModalProps {
  item: Item | null;
}

export interface MoveDetailsModalProps extends ModalProps {
  move: Move | null;
}

export interface AreaEncounterModalProps extends ModalProps {
  pokemonName: string;
  areas: string[];
}
