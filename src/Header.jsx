import React, { useState, useEffect } from "react";

function Header() {
  const [name, setName] = useState("Mumbai");
  const [num, setNum] = useState(null);

  useEffect(() => {
    const fetchApi = async () => {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${name}&units=metric&appid=566203d2e249859587704915066d78e7`;
      const response = await fetch(url);
      const resJson = await response.json();
      setNum(resJson.main);
      console.log(resJson.main);
    };
    fetchApi();
    // 566203d2e249859587704915066d78e7
  }, [name]);

  const Changed = (event) => {
    console.log(event.target.value);
    setName(event.target.value);
  };
  return (
    <>
      <div className="header">
        <h1>Weather....!</h1>
        <input
          type="text"
          placeholder="Search"
          onChange={Changed}
          value={name}
        />
      </div>
      <div className="card">
        {!num ? (
          <>
            <h1>😇</h1>
            <h2>no data found</h2>
            <div className="min_max">
              <p>....</p>
              <p>....</p>
            </div>
          </>
        ) : (
          <>
            <h1>{name}</h1>
            <h2>{num.temp}℃</h2>
            <div className="min_max">
              <p>{`Max:${num.temp_max}`}</p>
              <p>{`Min:${num.temp_min}`}</p>
            </div>
          </>
        )}
      </div>
    </>
  );
}

export default Header;
