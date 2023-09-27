import React from "react";

const Search = ({ submitHandler, setCitytext, citytext }) => {
  return (
    <div>
      <div>
        <form
          onSubmit={submitHandler}
          className="flex justify-center"
          action=""
        >
          <input
            className="flex-[0.8] rounded-3xl px-8 py-3 font-bold shadow-2xl focus:outline-none"
            type="text"
            placeholder="Enter a city"
            onChange={(e) => setCitytext(e.target.value)}
            value={citytext}
          />
          <button
            onClick={submitHandler}
            className="ml-3 flex-[0.1] rounded-full bg-blue-500 px-4 py-2 font-bold"
          >
            Fetch
          </button>
        </form>
      </div>
    </div>
  );
};

export default Search;
