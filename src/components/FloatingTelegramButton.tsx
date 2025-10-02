import { useState, useEffect } from "react";
import { Button } from "./ui/button";
import { Send } from "lucide-react";
import TelegramModal from "./TelegramModal";

const FloatingTelegramButton = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    // Check if user has seen the Telegram popup before
    const hasSeenTelegramPopup = localStorage.getItem("hasSeenTelegramPopup");
    
    if (!hasSeenTelegramPopup) {
      // Show popup after 2 seconds for new users
      const timer = setTimeout(() => {
        setIsModalOpen(true);
        localStorage.setItem("hasSeenTelegramPopup", "true");
      }, 2000);
      
      return () => clearTimeout(timer);
    }
  }, []);

  return (
    <>
      <Button
        onClick={() => setIsModalOpen(true)}
        className="fixed bottom-6 right-6 h-14 w-14 rounded-full bg-[hsl(var(--telegram-blue))] hover:bg-[hsl(var(--telegram-hover))] shadow-lg transition-all hover:scale-110 z-50"
        size="icon"
        aria-label="Open Telegram"
      >
        <Send className="h-6 w-6 text-white" />
      </Button>
      
      <TelegramModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
};

export default FloatingTelegramButton;
