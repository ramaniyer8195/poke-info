import { MoveDetailsModalProps } from "@/interfaces/modals";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "../ui/dialog";

const MoveDetailsModal = ({
  isOpen,
  onOpenChange,
  move,
}: MoveDetailsModalProps) => {
  if (!move) return <></>;

  return (
    <Dialog
      modal
      open={isOpen}
      defaultOpen={isOpen}
      onOpenChange={onOpenChange}
    >
      <DialogContent className="max-w-lg">
        <DialogHeader>
          <DialogTitle className="flex items-center justify-center">
            {move.name} Details
          </DialogTitle>
        </DialogHeader>
        <div className="flex flex-col gap-5">
          <div className="flex gap-3">
            <span className="font-bold">Name</span>
            <span>:</span>
            <span>{move.name}</span>
          </div>
          <div className="whitespace-pre-wrap">{move.desc}</div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default MoveDetailsModal;
