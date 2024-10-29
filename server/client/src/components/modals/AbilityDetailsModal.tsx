import { AbilityDetailsModalProps } from "@/interfaces/modals";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "../ui/dialog";

const AbilityDetailsModal = ({
  isOpen,
  onOpenChange,
  ability,
}: AbilityDetailsModalProps) => {
  if (!ability) return <></>;

  return (
    <Dialog
      modal
      open={isOpen}
      defaultOpen={isOpen}
      onOpenChange={onOpenChange}
    >
      <DialogContent className="max-w-lg">
        <DialogHeader>
          <DialogTitle className="flex items-center justify-center font-display text-2xl">
            {ability.name} Details
          </DialogTitle>
        </DialogHeader>
        <div className="flex flex-col gap-5">
          <div className="flex gap-3">
            <span className="font-bold">Name</span>
            <span>:</span>
            <span>
              {ability.name}
              {ability.hidden ? " (Hidden Ability)" : ""}
            </span>
          </div>
          <div className="whitespace-pre-wrap">{ability.desc}</div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default AbilityDetailsModal;
