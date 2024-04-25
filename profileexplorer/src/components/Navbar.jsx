import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(searchTerm);
    setSearchTerm("");
  };
  return (
    <div>
      <div>
        <div className="flex justify-between p-5 bg-white">
          <div className="flex">
            <Link to="/">
              <h2 className="font-bold ml-2 text-black sm:text-3xl text-xl">
                ProfileExplorer
              </h2>
            </Link>
          </div>
          <div>
            {" "}
            <form>
              <input
                type="text"
                placeholder="Search profile..."
                value={searchTerm}
                onChange={handleChange}
                className="p-2 mr-2 border border-gray-300 rounded-md focus:outline-none"
              />
              <button
                type="submit"
                className="p-2 bg-[pink] text-sm sm:text-md text-white rounded-md"
              >
                Search
              </button>
            </form>
          </div>
          <div>
            <Link to="/dashboard">
              <button className="p-2 bg-[pink] text-sm sm:text-md text-white rounded-md">
                Dashboard
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
