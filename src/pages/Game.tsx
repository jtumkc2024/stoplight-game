import { useEffect, useState } from "react";
import LeftSideNav from "../components/LeftSideNav";
import Stoplight from "../components/StopLight";
import { useNavigate } from "react-router-dom";

export default function Game() {
  const navigate = useNavigate();
  const [score, setScore] = useState<number>(0);
  useEffect(() => {
    if (score >= 3) {
      navigate('/end');
    }
  }, [score]);
  return (
    <div className='flex bg-gray-100'>
      <LeftSideNav />
      <div id="page-content" className="w-full flex flex-col items-center justify-center">
        <header className="mb-10">
          <h1 className="h1">
            Play!!
          </h1>
          <p className="text-center">
            Current: {score}
          </p>
        </header>
        <Stoplight setScore={setScore} />
      </div>
    </div>
  );
}