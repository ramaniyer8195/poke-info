import { Handle, NodeProps, Position } from "@xyflow/react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { TYPE_IMAGES } from "@/constants/pokeConstants";

const PokeNode = ({ data }: NodeProps) => {
  const { name, id, types, sprite, nodeLevel } = data as {
    name: string;
    id: number;
    types: string[];
    sprite: string;
    nodeLevel: -1 | 0 | 1 | 2;
  };

  return (
    <>
      {(nodeLevel === 1 || nodeLevel === 2) && (
        <Handle type="target" position={Position.Left} />
      )}
      <Card className="bg-muted cursor-pointer w-[207px] h-[300px]">
        <CardHeader className="p-2">
          <CardTitle>
            <div className="flex items-center justify-between">
              <span className="text-xl">#{id}</span>
              <div className="flex gap-3">
                {types.map((type) => {
                  return <img className="w-8" src={TYPE_IMAGES[type].image} />;
                })}
              </div>
            </div>
          </CardTitle>
        </CardHeader>
        <CardContent className="px-2">
          <div className="flex items-center justify-center">
            <img src={sprite} />
          </div>
        </CardContent>
        <CardFooter className="px-2">
          <p className="uppercase text-xl text-center w-full font-display">
            {name}
          </p>
        </CardFooter>
      </Card>
      {(nodeLevel === 0 || nodeLevel === 1) && (
        <Handle type="source" position={Position.Right} />
      )}
    </>
  );
};

export default PokeNode;
