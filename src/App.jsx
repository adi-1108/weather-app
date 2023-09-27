import React, { useEffect } from "react";
import { useState } from "react";
import Search from "./components/Search";

const App = () => {
  const [citytext, setCitytext] = useState("");
  const [data, setdata] = useState(null);
  let url = `https://weatherapi-com.p.rapidapi.com/current.json?q=${citytext}`;
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "135547f337mshad32361c5fd34bdp1735b5jsn045a35a7f1cd",
      "X-RapidAPI-Host": "weatherapi-com.p.rapidapi.com",
    },
  };
  const fetchData = async () => {
    try {
      const response = await fetch(url, options);
      const result = await response.json();
      setdata(result);
      console.log("Fetch data current", result);
    } catch (error) {
      console.error(error);
    }
  };

  const submitHandler = (e) => {
    e.preventDefault();
    fetchData();

    console.log("The data is :", data);
    // console.log("the city is from submithandler :", city);
    setCitytext("");
  };
  return (
    <div className="app ">
      <div className="mx-auto w-[1200px]">
        {!data ? (
          <p className="my-10 flex items-center justify-between rounded-2xl bg-white px-5 py-3 shadow-inner ">
            No data Found
          </p>
        ) : (
          <div className="my-10 flex h-[120px] items-center justify-between gap-7 rounded-2xl bg-white px-5 py-3 shadow-xl">
            <div className="h-full flex-1 rounded-2xl bg-yellow-100 px-5 py-3 shadow-lg ring-1">
              <h1 className="text-2xl font-bold">
                {data.location.name}{" "}
                <span className="text-xl font-normal text-slate-500">
                  {data.location.region}
                </span>
              </h1>
              <p className="text-xl font-medium">{data.location.country}</p>
            </div>

            <div className="flex-1 rounded-2xl bg-blue-200 px-5 py-3 shadow-xl ring-1">
              <p className="font-bold">TEMPERATURE : {data.current.temp_c} C</p>
              <p className="font-medium">
                <span className="font-bold">
                  Wind{" "}
                  <span className="font-light text-slate-800">(in kmph)</span>{" "}
                </span>{" "}
                : {data.current.wind_kph}
              </p>
              <p className="font-medium">
                <span className="font-bold">Cloud Cover </span> :{" "}
                {data.current.cloud}%
              </p>
            </div>

            <div className="flex-1 rounded-2xl bg-lime-400 px-5 py-3 ring-1">
              <p className="font-bold">
                <span>Humidity :</span> {data.current.humidity}
              </p>

              <p className="font-medium">
                <span className="font-bold">Feels Like </span> :{" "}
                {data.current.feelslike_c}
              </p>

              <div className="relative justify-between">
                <h1 className="font-bold text-blue-700 ">{data.current.condition.text}</h1>
                <div className="absolute -right-2  -top-[55px] rounded-full bg-white p-4 shadow-lg ">
                  <img
                    width={50}
                    src={data.current.condition.icon}
                    className=""
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        )}

        <Search
          submitHandler={submitHandler}
          setCitytext={setCitytext}
          citytext={citytext}
        />
      </div>
    </div>
  );
};

export default App;
