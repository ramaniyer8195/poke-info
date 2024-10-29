import { PokeEdgeLabelProps } from "@/interfaces/home";
import { FaInfoCircle } from "react-icons/fa";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

const PokeEdgeLabel = ({ labelX, labelY, label }: PokeEdgeLabelProps) => {
  return (
    <div
      className="absolute"
      style={{
        transform: `translate(-50%, -50%) translate(${labelX}px,${labelY}px)`,
      }}
    >
      <Popover>
        <PopoverTrigger>
          <FaInfoCircle className="text-2xl pointer-events-auto" />
        </PopoverTrigger>
        <PopoverContent className="w-36 text-center">
          <div>{label}</div>
        </PopoverContent>
      </Popover>
    </div>
  );
};

export default PokeEdgeLabel;
