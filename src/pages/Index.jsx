import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";

const Index = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-4xl font-bold mb-4 flex items-center">
        <Home className="mr-2" />
        Simple Counter App
      </h1>
      <p className="text-2xl mb-4">Count: {count}</p>
      <div className="space-x-2">
        <Button onClick={() => setCount(count - 1)}>Decrease</Button>
        <Button onClick={() => setCount(count + 1)}>Increase</Button>
      </div>
    </div>
  );
};

export default Index;
