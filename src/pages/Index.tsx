import { useEffect, useState } from "react";
import FloatingTelegramButton from "@/components/FloatingTelegramButton";
import VisitorCounter from "@/components/VisitorCounter";
import LanguageSelector from "@/components/LanguageSelector";

const Index = () => {
  const [streamUrl, setStreamUrl] = useState("https://cricketstan.github.io/Channel-13/");

  useEffect(() => {
    // Update page title
    document.title = "Sports Live Stream";

    // Block right-click
    const handleContextMenu = (e: MouseEvent) => {
      e.preventDefault();
      return false;
    };

    // Block keyboard shortcuts for dev tools
    const handleKeyDown = (e: KeyboardEvent) => {
      if (
        e.key === "F12" ||
        (e.ctrlKey && e.shiftKey && e.key === "I") ||
        (e.ctrlKey && e.shiftKey && e.key === "J") ||
        (e.ctrlKey && e.shiftKey && e.key === "C") ||
        (e.ctrlKey && e.key === "U")
      ) {
        e.preventDefault();
        return false;
      }
    };

    // Detect dev tools and close site
    const detectDevTools = () => {
      const threshold = 160;
      const widthThreshold = window.outerWidth - window.innerWidth > threshold;
      const heightThreshold = window.outerHeight - window.innerHeight > threshold;
      
      if (widthThreshold || heightThreshold) {
        window.location.href = "about:blank";
        window.close();
      }
    };

    document.addEventListener("contextmenu", handleContextMenu);
    document.addEventListener("keydown", handleKeyDown);
    const interval = setInterval(detectDevTools, 1000);

    return () => {
      document.removeEventListener("contextmenu", handleContextMenu);
      document.removeEventListener("keydown", handleKeyDown);
      clearInterval(interval);
    };
  }, []);

  return (
    <main className="relative h-screen w-screen overflow-hidden bg-background">
      {/* Hidden Visitor Counter */}
      <VisitorCounter />
      
      {/* Language Selector */}
      <LanguageSelector onLanguageChange={setStreamUrl} />
      
      {/* Main Content Frame */}
      <iframe
        id="contentFrame"
        className="absolute inset-0 w-full h-full border-0"
        sandbox="allow-forms allow-pointer-lock allow-same-origin allow-scripts allow-top-navigation"
        frameBorder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        scrolling="no"
        src={streamUrl}
        title="Sports Live Stream"
      />
      
      {/* Floating Telegram Button */}
      <FloatingTelegramButton />
    </main>
  );
};

export default Index;
