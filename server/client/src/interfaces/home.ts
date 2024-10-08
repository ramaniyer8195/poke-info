import { Pokemon } from "./api";

export interface PokeCardProps {
  pokemon: Pokemon;
  handleModalChange: (pokemon: Pokemon) => void;
}

export interface TabProps {
  pokemon: Pokemon;
}

export interface PokeDetailsTabProps extends TabProps {
  handleSpriteChange: (form: string) => void;
}

export interface PokeEdgeLabelProps {
  labelX: number;
  labelY: number;
  label: string;
}
