import { TabProps } from "@/interfaces/home";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { TYPE_IMAGES } from "@/constants/pokeConstants";
import { Move } from "@/interfaces/api";
import { useState } from "react";
import MoveDetailsModal from "../modals/MoveDetails";

const PokeMovesTab = ({ pokemon }: TabProps) => {
  const [move, setMove] = useState<Move | null>(null);
  const [isMoveOpen, setIsMoveOpen] = useState(false);

  const handleMoveOpenChange = (open: boolean) => {
    setIsMoveOpen(open);
  };

  const handleMoveSelect = (move: Move) => {
    setMove(move);
    setIsMoveOpen(true);
  };

  return (
    <>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[220px]">Name</TableHead>
            <TableHead className="w-[70px]">Type</TableHead>
            <TableHead className="w-[90px]">Power</TableHead>
            <TableHead className="w-[70px]">PP</TableHead>
            <TableHead className="w-[110px]">Accuracy</TableHead>
            <TableHead>Priority</TableHead>
          </TableRow>
        </TableHeader>
      </Table>
      <div className="max-h-[48vh] overflow-auto">
        <Table>
          <TableBody>
            {pokemon.moves.map((move) => (
              <TableRow
                key={move.name}
                className="cursor-pointer"
                onClick={() => handleMoveSelect(move)}
              >
                <TableCell className="capitalize w-[220px]">
                  {move.name}
                </TableCell>
                <TableCell className="w-[70px]">
                  <img src={TYPE_IMAGES[move.type].image} className="w-4" />
                </TableCell>
                <TableCell className="w-[90px]">{move.power}</TableCell>
                <TableCell className="w-[70px]">{move.pp}</TableCell>
                <TableCell className="w-[110px]">{move.accuracy}</TableCell>
                <TableCell>{move.priority}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
      <MoveDetailsModal
        isOpen={isMoveOpen}
        onOpenChange={handleMoveOpenChange}
        move={move}
      />
    </>
  );
};

export default PokeMovesTab;
