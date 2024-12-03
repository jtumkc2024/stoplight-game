import LeftSideNav from "../components/LeftSideNav";
import Stoplight from "../components/StopLight";

export default function Game() {
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
          ** Input home page explanation of game. **
        </p>
        <Stoplight />
      </div>
    </div>
  );
}