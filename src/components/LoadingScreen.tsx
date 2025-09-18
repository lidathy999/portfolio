"use client";
import { useEffect, useState } from "react";

function LoadingScreen({ onFinish }: { onFinish: () => void }) {
  const [showTitle, setShowTitle] = useState(true);

  useEffect(() => {
    const timer1 = setTimeout(() => setShowTitle(false), 1800); // Show name for 1.8s
    const timer2 = setTimeout(onFinish, 3500); // Show "Front-end Developer" for 1.7s
    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, [onFinish]);

  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center z-50">
      {showTitle ? (
        <h1 className="text-5xl font-bold zoom-in-down">THY LYDA</h1>
      ) : (
        <h2 className="text-2xl font-semibold animate-typewriter">
          Front-end Developer
        </h2>
      )}
    </div>
  );
}

export default LoadingScreen;