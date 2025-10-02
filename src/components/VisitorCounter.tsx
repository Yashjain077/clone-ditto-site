import { useEffect, useState } from "react";

const VisitorCounter = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Simulate visitor count
    const storedCount = localStorage.getItem("visitorCount");
    const currentCount = storedCount ? parseInt(storedCount) : 0;
    const newCount = currentCount + 1;
    
    setCount(newCount);
    localStorage.setItem("visitorCount", newCount.toString());
  }, []);

  return (
    <img 
      className="hidden" 
      src={`https://visit-counter.vercel.app/counter.png?page=allrounder.com&s=40&c=00ff00&bg=00000000&no=10&ff=digi&tb=&ta=`}
      alt="visitor counter"
      style={{ display: 'none' }}
    />
  );
};

export default VisitorCounter;
