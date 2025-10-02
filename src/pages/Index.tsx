import { useEffect } from "react";
import FloatingTelegramButton from "@/components/FloatingTelegramButton";
import VisitorCounter from "@/components/VisitorCounter";

const Index = () => {
  useEffect(() => {
    // Update page title
    document.title = "Sports Live Stream";
  }, []);

  return (
    <main className="relative h-screen w-screen overflow-hidden bg-background">
      {/* Hidden Visitor Counter */}
      <VisitorCounter />
      
      {/* Main Content Frame */}
      <iframe
        id="contentFrame"
        className="absolute inset-0 w-full h-full border-0"
        sandbox="allow-forms allow-pointer-lock allow-same-origin allow-scripts allow-top-navigation"
        frameBorder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        scrolling="no"
        src="https://cricketstan.github.io/Sony-ten-5/"
        title="Sports Live Stream"
      />
      
      {/* Floating Telegram Button */}
      <FloatingTelegramButton />
    </main>
  );
};

export default Index;
