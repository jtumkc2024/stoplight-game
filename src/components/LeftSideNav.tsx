import { Link } from "react-router-dom";

export default function LeftSideNav() {
  return (
    <div className="min-h-screen w-[20vw] bg-gray-300 p-4">
      <header className="h-[10vh] flex justify-center">
        <h2 className="h2">Navigation</h2>
      </header>
      <div className="flex flex-col ml-5 space-y-5">
        <Link to="/Home" >
          <h3 className="h3 w-24">
            Home
          </h3>
        </Link>
        <Link to="/Game" >
          <h3 className="h3 w-24">
            Game
          </h3>
        </Link>
        <Link to="/End" >
          <h3 className="h3 w-24">
            End
          </h3>
        </Link>
        <Link to="/FAQ" >
          <h3 className="h3 w-24">
            FAQ
          </h3>
        </Link>
      </div>
    </div>
  )
}