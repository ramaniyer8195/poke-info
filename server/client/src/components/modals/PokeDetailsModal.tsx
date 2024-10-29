import { PokeDetailsModalProps } from "@/interfaces/modals";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "../ui/dialog";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import { TYPE_IMAGES } from "@/constants/pokeConstants";
import PokeDetailsTab from "../home/PokeDetailsTab";
import PokeTypingTab from "../home/PokeTypingTab";
import PokeMovesTab from "../home/PokeMovesTab";
import { ReactFlow, Background } from "@xyflow/react";
import "@xyflow/react/dist/style.css";
import PokeNode from "../home/PokeNode";
import PokeEdge from "../home/PokeEdge";
import { PokeNode as PokeNodeType } from "@/interfaces/api";

const PokeDetailsModal = ({
  isOpen,
  onOpenChange,
  pokemon,
  handlePokemonChange,
}: PokeDetailsModalProps) => {
  const [regularSprite, setRegularSprite] = useState(true);
  const [selectedSprite, setSelectedSprite] = useState<{
    regular: string;
    shiny: string;
  }>(pokemon.sprites[pokemon.name]);
  const [showEvoGraph, setShowEvograph] = useState(false);

  const handleSpriteChange = (form: string) => {
    setSelectedSprite(pokemon.sprites[form]);
  };

  const onModalClose = (open: boolean) => {
    setShowEvograph(false);
    setSelectedSprite(pokemon.sprites[pokemon.name]);
    setRegularSprite(true);
    onOpenChange(open);
  };

  const handleNodeClick = (event: React.MouseEvent, node: PokeNodeType) => {
    setShowEvograph(false);
    setSelectedSprite(pokemon.sprites[pokemon.name]);
    setRegularSprite(true);
    handlePokemonChange(node.data.id);
  };

  return (
    <Dialog
      modal
      open={isOpen}
      defaultOpen={isOpen}
      onOpenChange={onModalClose}
    >
      <DialogContent className="w-[65vw] h-[85vh]">
        <DialogHeader>
          <DialogTitle className="flex gap-3 items-center justify-center">
            <span className="uppercase text-center text-2xl flex gap-2 font-display">
              <span>#{pokemon.pokemonId}</span>
              <span>{pokemon.name}</span>
            </span>
            <div className="flex gap-2">
              {pokemon.types.map((type) => {
                return <img src={TYPE_IMAGES[type].image} className="w-7" />;
              })}
            </div>
          </DialogTitle>
          <DialogDescription>
            <div className="flex items-center justify-center">
              <Badge>{pokemon.genera}</Badge>
            </div>
          </DialogDescription>
        </DialogHeader>
        {showEvoGraph ? (
          <div className="w-full h-[59vh]">
            <ReactFlow
              nodes={pokemon.evolutionChain.nodes}
              nodeTypes={{ pokemon: PokeNode }}
              edges={pokemon.evolutionChain.edges}
              edgeTypes={{ pokemon: PokeEdge }}
              fitView
              nodesConnectable={false}
              nodesDraggable={false}
              onNodeClick={handleNodeClick}
            >
              <Background color="hsl(var(--foreground))" size={1.5} />
            </ReactFlow>
          </div>
        ) : (
          <div className="flex gap-5">
            <div className="flex flex-col gap-5 items-center justify-center w-[40%]">
              <div>
                <Button
                  variant={regularSprite ? "default" : "secondary"}
                  onClick={() => setRegularSprite(true)}
                  className="rounded-tr-none rounded-br-none"
                >
                  Regular
                </Button>
                <Button
                  variant={!regularSprite ? "default" : "secondary"}
                  onClick={() => setRegularSprite(false)}
                  className="rounded-tl-none rounded-bl-none"
                >
                  Shiny
                </Button>
              </div>
              <div className="w-full flex items-center justify-center">
                <img
                  src={
                    regularSprite
                      ? selectedSprite.regular
                      : selectedSprite.shiny
                  }
                  alt={pokemon.name}
                />
              </div>
            </div>
            <div className="w-[60%]">
              <Tabs defaultValue="details">
                <TabsList className="w-full h-9 p-0">
                  <TabsTrigger className="w-full h-full" value="details">
                    Details
                  </TabsTrigger>
                  <TabsTrigger className="w-full h-full" value="typing">
                    Typing
                  </TabsTrigger>
                  <TabsTrigger className="w-full h-full" value="moves">
                    Moves
                  </TabsTrigger>
                </TabsList>
                <TabsContent value="details">
                  <PokeDetailsTab
                    pokemon={pokemon}
                    handleSpriteChange={handleSpriteChange}
                  />
                </TabsContent>
                <TabsContent value="typing">
                  <PokeTypingTab pokemon={pokemon} />
                </TabsContent>
                <TabsContent value="moves">
                  <PokeMovesTab pokemon={pokemon} />
                </TabsContent>
              </Tabs>
            </div>
          </div>
        )}

        <DialogFooter className="flex items-center sm:justify-center w-full">
          <Button onClick={() => setShowEvograph(!showEvoGraph)}>{`${
            showEvoGraph ? "Hide" : "Show"
          } Evolution Graph`}</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default PokeDetailsModal;
