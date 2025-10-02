import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "./ui/dialog";
import { Button } from "./ui/button";
import { Send } from "lucide-react";

interface TelegramModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const TelegramModal = ({ isOpen, onClose }: TelegramModalProps) => {
  const handleTelegramClick = () => {
    window.open("https://t.me/+JSky86_04M2Zjd1", "_blank");
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md bg-card border-border">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-foreground">Join Our Telegram</DialogTitle>
          <DialogDescription className="text-muted-foreground">
            Stay updated with the latest streams and announcements
          </DialogDescription>
        </DialogHeader>
        <div className="flex flex-col gap-4 py-4">
          <Button 
            onClick={handleTelegramClick}
            className="w-full bg-[hsl(var(--telegram-blue))] hover:bg-[hsl(var(--telegram-hover))] text-white font-semibold py-6 text-lg"
          >
            <Send className="mr-2 h-5 w-5" />
            Open Telegram
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default TelegramModal;
