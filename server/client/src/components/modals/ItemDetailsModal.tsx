import { ItemDetailsModalProps } from "@/interfaces/modals";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "../ui/dialog";

const ItemDetailsModal = ({
  isOpen,
  onOpenChange,
  item,
}: ItemDetailsModalProps) => {
  if (!item) return <></>;

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
            {item.name} Details
          </DialogTitle>
        </DialogHeader>
        <div className="flex flex-col gap-5">
          <div className="flex gap-3">
            <span className="font-bold">Name</span>
            <span>:</span>
            <span>{item.name}</span>
          </div>
          <div className="flex gap-3">
            <span className="font-bold">Image</span>
            <span>:</span>
            <img src={item.sprite} className="w-8" />
          </div>
          <div className="flex gap-3">
            <span className="font-bold">Cost</span>
            <span>:</span>
            <span>{item.cost}</span>
          </div>
          <div className="whitespace-pre-wrap">{item.desc}</div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ItemDetailsModal;
