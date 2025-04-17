import { useEffect, useState } from 'react';

const Loader = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress(oldProgress => {
        if (oldProgress === 100) {
          return 0;
        }
        const diff = Math.random() * 10;
        return Math.min(oldProgress + diff, 100);
      });
    }, 500);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <>
      <div className="fixed top-0 left-0 w-full h-1 overflow-hidden z-[1000]">
        <span
          className="absolute w-full h-full rounded bg-[#0076ff] transition-all duration-500 ease-in-out"
          style={{ width: `${progress}%` }}
        ></span>
      </div>
    </>
  );
};

export default Loader;
