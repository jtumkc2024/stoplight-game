import { Link } from "react-router-dom";

export default function LeftSideNav() {
  return (
    <div className="min-h-screen w-[20vw] bg-gray-300 p-4">
      <header className="h-[25vh] flex justify-center">
        <h2 className="h2 text-center">Stop Light Game</h2>
      </header>
      <div className="flex flex-col space-y-5">
        <Link to="/Home">
          <h3 className="h3 w-full py-2 hover:bg-gray-400 rounded text-center">
            Home
          </h3>
        </Link>
        <Link to="/Game">
          <h3 className="h3 w-full py-2 hover:bg-gray-400 rounded text-center">
            Game
          </h3>
        </Link>
        <Link to="/End">
          <h3 className="h3 w-full py-2 hover:bg-gray-400 rounded text-center">
            End
          </h3>
        </Link>
      </div>
    </div>
  )
}