import { Link } from "react-router-dom";
import LeftSideNav from "../components/LeftSideNav";
import Stoplight from "../components/StopLight";

export default function End() {
  return (
    <div className='flex bg-gray-100'>
      <LeftSideNav />
      <div id="page-content" className="w-full flex flex-col items-center justify-center">
        <header>
          <h1 className="h1">
            Stop Light Game
          </h1>
        </header>
        <Stoplight disabled={true} />
        <h2 className="h2 text-center">
          You win!!!
        </h2>
        <Link to="/Game">
          <button className="hover:bg-gray-400 text-center py-2 px-3 rounded">Play Again!</button>
        </Link>
      </div>
    </div>
  )
}