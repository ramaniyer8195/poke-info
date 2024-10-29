import { AreaEncounterModalProps } from "@/interfaces/modals";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "../ui/dialog";

const AreaEncounterModal = ({
  isOpen,
  onOpenChange,
  pokemonName,
  areas,
}: AreaEncounterModalProps) => {
  if (!areas) return <></>;

  return (
    <Dialog
      modal
      open={isOpen}
      defaultOpen={isOpen}
      onOpenChange={onOpenChange}
    >
      <DialogContent className="max-w-xl">
        <DialogHeader>
          <DialogTitle className="flex items-center justify-center font-display text-2xl">
            {pokemonName} Area Encounters
          </DialogTitle>
        </DialogHeader>
        <div className="grid grid-cols-3 gap-3 max-h-[70vh] overflow-y-auto">
          {areas.map((area) => (
            <span>{area}</span>
          ))}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default AreaEncounterModal;
