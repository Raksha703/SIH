/*import { Link } from "react-router-dom";

const TopBar = ({pageName, login, home, logout, register}) => {
  return (
    <div className="w-full h-16 bg-[#96b6c5] relative py-5 drop-shadow-lg">
      <h1 className="font-bold text-lg ml-5" >{pageName}</h1>
      {login && <Link to="/login" className="absolute right-4 top-3 bg-[#adc4ce] p-2 rounded-md drop-shadow-md">Login</Link>}
      {home && <Link to="/" className="absolute right-4 top-3 bg-[#adc4ce] p-2 rounded-md drop-shadow-md">Home</Link>}
      {logout && <Link to="/" className="absolute right-4 top-3 bg-[#adc4ce] p-2 rounded-md drop-shadow-md">Logout</Link>}
      {register && <Link to="/register" className="absolute right-[100px] top-3 bg-[#adc4ce] p-2 rounded-md drop-shadow-md">Register</Link>}
    </div>
  )
}

export default TopBar
*/

import { Link } from "react-router-dom";

const TopBar = ({ pageName, login, home, logout, register }) => {
  return (
    <div className="w-full h-16 bg-[#96b6c5] relative py-3 px-5 flex items-center justify-between">
      <h1 className="font-bold text-lg text-white">{pageName}</h1>
      <div className="space-x-4 flex">
        {home && (
          <Link to="/" className="btn bg-[#adc4ce] hover:bg-[#6b879b]">
            Home
          </Link>
        )}
        {login && (
          <Link to="/login" className="btn bg-[#adc4ce] hover:bg-[#6b879b]">
            Login
          </Link>
        )}
        {logout && (
          <Link to="/" className="btn bg-[#adc4ce] hover:bg-[#6b879b]">
            Logout
          </Link>
        )}
        {register && (
          <Link to="/register" className="btn bg-[#adc4ce] hover:bg-[#6b879b]">
            Register
          </Link>
        )}
      </div>
    </div>
  );
};

export default TopBar;
