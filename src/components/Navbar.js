import { Link } from "react-router-dom";
const Navbar=()=>{

return( <div className="flex border shadow-xl justify-between items-center px-8">
    <Link to="/">
      <h1 className="text-[50px] font-black cursor-pointer pb-2">
        My<span className="text-blue-800">Crypto</span>
      </h1>
    </Link>
    <navitems className="flex font-bold text-[25px] gap-6">
      <Link to="/top10">
        <p className="cursor-pointer hover:text-blue-600">Top10</p>
      </Link>
      <Link to="/trending">
        <p className="cursor-pointer hover:text-blue-600">Trending</p>
      </Link>
      <Link to="/watchlist">
        <p className="cursor-pointer hover:text-blue-600">Watchlist</p>
      </Link>
    </navitems>
  </div> );
};
export default Navbar;