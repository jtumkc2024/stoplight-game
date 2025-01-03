import { Link } from "react-router-dom";
import LeftSideNav from "../components/LeftSideNav";
import Stoplight from "../components/StopLight";

export default function Home() {
  return (
    <div className='flex bg-gray-100'>
      <LeftSideNav />
      <div id="page-content" className="w-full flex flex-col items-center justify-center">
        <header>
          <h1 className="h1">
            Stop Light Game
          </h1>
        </header>
        <p>
          Get ready to play the Stop Light Game!
        </p>
        <p>
          Match the words to the color!
        </p>
        <p>
          Three correct guesses and you win!
        </p>
        <Stoplight disabled={true} />
        <Link to="/Game">
          <button className="hover:bg-gray-400 text-center py-2 px-3 rounded">Start</button>
        </Link>
      </div>
    </div>
  );
}