import { useState } from "react";
import { Globe } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface LanguageSelectorProps {
  onLanguageChange: (url: string) => void;
}

const languages = {
  hindi: {
    label: "Hindi",
    url: "https://cricketstan.github.io/Channel-13/",
  },
  english: {
    label: "English",
    url: "https://cricketstan.github.io/channel-10/",
  },
};

const LanguageSelector = ({ onLanguageChange }: LanguageSelectorProps) => {
  const [selected, setSelected] = useState("hindi");

  const handleChange = (value: string) => {
    setSelected(value);
    onLanguageChange(languages[value as keyof typeof languages].url);
  };

  return (
    <div className="fixed top-4 right-4 z-50">
      <Select value={selected} onValueChange={handleChange}>
        <SelectTrigger className="w-[140px] bg-card/95 backdrop-blur-sm border-border">
          <Globe className="w-4 h-4 mr-2" />
          <SelectValue />
        </SelectTrigger>
        <SelectContent className="bg-card border-border">
          {Object.entries(languages).map(([key, { label }]) => (
            <SelectItem key={key} value={key}>
              {label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};

export default LanguageSelector;
